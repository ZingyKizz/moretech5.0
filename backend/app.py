import json
from query_templates import (
    branch_info_query,
    branch_services_query,
    branches_query,
    branch_workload_query,
)
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine
import pandas as pd
import uvicorn
import datetime as dt
from utils import haversine, get_workload
from typing import Optional
from intent_classification import classify_intent


con = create_engine("postgresql+psycopg2://moretech5:moretech@postgres:5432/moretech")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_data(query, pandas=False):
    res = pd.read_sql(query, con=con)
    if pandas:
        return res
    return res.to_dict("records")


def get_branches_data(dayofweek, current_hour, service_title=None):
    branches_query_formatted = branches_query.format(dayofweek=dayofweek, current_hour=current_hour)
    if service_title is not None:
        branches_query_formatted += f" and '{service_title}' = ANY(services)"
    return get_data(branches_query_formatted)


def get_batches_workload_data(dayofweek, current_hour, service_title=None):
    branches_workload_formatted = branch_workload_query
    if service_title is not None:
        branches_workload_formatted += f" and service_title = '{service_title}'"
    branches_workload_formatted += f" and start_time_of_wait_hour = {current_hour}"
    branches_workload_formatted += f" and dayofweek = {dayofweek}"
    branch_workload = get_data(branches_workload_formatted, pandas=True)
    if len(branch_workload) == 0:
        branch_workload = {}
    else:
        branch_workload = branch_workload.groupby("branch_id").agg(
            {"waiting_time_prediction": "mean", "service_time_prediction": "mean"}
        ).astype(int).to_dict(orient="index")
    return branch_workload


def get_ranking_score(waiting_time_prediction, service_time_prediction, distance):
    waiting_time_prediction = waiting_time_prediction or 10
    service_time_prediction = service_time_prediction or 26
    distance = distance or 7
    score = 0
    # время на получение услуги в офисе
    score -= waiting_time_prediction + service_time_prediction
    # Для расстояния считаем количество минут, затраченных на маршрут до офиса
    # Если расстояние меньше 2 км, то идет пешком со скоростью 5 км/ч
    if distance < 2:
        score -= (distance * 60 / 5) ** 1.2
    # Если расстояние больше 2 км, то садится на автобус и движется со средней скоростью 25 км/ч
    else:
        score -= (7 + distance * 60 / 25) ** 1.2
    return score


@app.get("/branchInfoById/")
def branch_info_by_id(id: int, service_title: Optional[str] = None):
    """Возвращает основную информацию и загруженность для конкретного отделения"""
    branch_info = get_data(branch_info_query.format(id=id))[0]
    branch_services = get_data(branch_services_query.format(id=id))[0]
    branch_workload_query_formatted = branch_workload_query + f" and branch_id = {id}"
    branch_workload = get_data(branch_workload_query_formatted, pandas=True)
    return dict(
        id=branch_info["id"],
        address=branch_info["address"],
        lat=branch_info["latitude"],
        lon=branch_info["longitude"],
        salePointName=branch_info["salePointName"],
        openHours=json.loads(branch_info["openHours"]),
        hasRamp=1 if branch_info["hasRamp"] == "Y" else 0,
        metroStation=branch_info["metroStation"],
        services=branch_services["services"],
        workload=get_workload(branch_workload, service_title)
    )


@app.get("/getBranches/")
def get_branches(lat: Optional[str] = None, lon: Optional[str] = None, service_title: Optional[str] = None):
    """Возвращает список отделений с рассчитанным расстоянием и загруженностью"""
    time = dt.datetime.now()
    dayofweek = 4 or time.weekday()
    current_hour = 13 or time.hour

    branches = get_branches_data(dayofweek, current_hour, service_title=service_title)
    branch_workload = get_batches_workload_data(dayofweek, current_hour, service_title=service_title)
    res = []
    for branch in branches:
        workload = branch_workload.get(branch["id"], {})
        waiting_time_prediction = workload.get("waiting_time_prediction")
        service_time_prediction = workload.get("service_time_prediction")
        distance = haversine(
            lat,
            lon,
            branch["latitude"],
            branch["longitude"]
        )
        res.append({
            "id": branch["id"],
            "salePointName": branch["salePointName"],
            "address": branch["address"],
            "metroStation": branch["metroStation"],
            "geometry": {
                "lat": branch["latitude"],
                "lon":  branch["longitude"]
            },
            "isOpen": branch["isOpen"],
            "distance": distance,
            "services": sorted(branch["services"]),
            "chosen_service": service_title,
            "hasRamp": 1 if branch["hasRamp"] == "Y" else 0,
            "current_datetime": {
                "time": str(time),
                "dayofweek": str(dayofweek),
                "hour": str(current_hour)
            },
            "workload": {
                "waiting_time_prediction": waiting_time_prediction,
                "service_time_prediction": service_time_prediction,
            },
            "score": get_ranking_score(waiting_time_prediction, service_time_prediction, distance)
        })
    return sorted(res, key=lambda x: (-x["isOpen"], -x["score"]))


@app.get("/suggestService/")
def intent(text: str):
    """Определяет тип услуги по тексту, который вводит клиент"""
    return classify_intent(str(text))


if __name__ == "__main__":
    uvicorn.run(
        "app:app",
        host="0.0.0.0",
        port=5000
    )

