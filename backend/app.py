import json
from query_templates import (
    branch_info_query,
    branch_services_query,
    branches_query,
)
from fastapi import FastAPI
from sqlalchemy import create_engine
import pandas as pd
import uvicorn
import datetime as dt
from utils import haversine
from typing import Optional


con = create_engine("postgresql+psycopg2://moretech5:moretech@postgres:5432/moretech")

app = FastAPI(debug=True)


def get_data(query):
    res = pd.read_sql(query, con=con).to_json(orient="records", force_ascii=False)
    return json.loads(res)


@app.get("/branchInfoById/")
def branch_info_by_id(id: int):
    branch_info = get_data(branch_info_query.format(id=id))[0]
    branch_services = get_data(branch_services_query.format(id=id))[0]
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
    )


@app.get("/getBranches/")
def get_branches(lat: Optional[str] = None, lon: Optional[str] = None):
    time = dt.datetime.now()
    dayofweek = time.weekday()
    current_hour = time.hour
    branches = get_data(branches_query.format(dayofweek=dayofweek, current_hour=current_hour))
    res = []
    for branch in branches:
        distance = haversine(
            lat,
            lon,
            branch["latitude"],
            branch["longitude"]
        )
        res.append({
            "id": branch["id"],
            "geometry": {
                "lat": branch["latitude"],
                "lon":  branch["longitude"]
            },
            "isOpen": branch["isOpen"],
            "distance": distance
        })
    return sorted(res, key=lambda x: x["distance"] or float("inf"))


@app.get("/getClosestBranches/")
def get_branches():
    time = dt.datetime.now()
    dayofweek = time.weekday()
    current_hour = time.hour
    branches = get_data(branches_query.format(dayofweek=dayofweek, current_hour=current_hour))
    return branches


if __name__ == "__main__":
    uvicorn.run(
        "app:app",
        host="0.0.0.0",
        port=5000,
        reload=True
    )

