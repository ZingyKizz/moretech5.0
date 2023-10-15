from math import radians, cos, sin, asin, sqrt
import datetime as dt



def haversine(lat1, lon1, lat2, lon2):
      if not all([lat1, lon1, lat2, lon2]):
          return None
      lat1, lon1, lat2, lon2 = map(float, [lat1, lon1, lat2, lon2])
      R = 6372.8
      dLat = radians(lat2 - lat1)
      dLon = radians(lon2 - lon1)
      lat1 = radians(lat1)
      lat2 = radians(lat2)
      a = sin(dLat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dLon / 2) ** 2
      c = 2 * asin(sqrt(a))
      return R * c


idx2dayofweek = dict(zip(range(7), ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]))


def get_workload(data, service_title=None):
    time = dt.datetime.now()
    if service_title is not None:
        data = data[data["service_title"] == service_title]
    workload_data = (
        data
        .groupby(["dayofweek", "start_time_of_wait_hour"], as_index=False)
        .agg({"waiting_time_prediction": "mean", "service_time_prediction": "mean"})
        .astype(int)
        .sort_values(by=["dayofweek", "start_time_of_wait_hour"])
        .to_dict("records")
    )
    res = {"chosen_service": service_title, "workload": []}
    for v in workload_data:
        v = v.copy()
        v["days"] = idx2dayofweek[v["dayofweek"]]
        res["workload"].append(v)
        if v["dayofweek"] == time.weekday():
            res["waiting_time_prediction"] = v["waiting_time_prediction"]
            res["service_time_prediction"] = v["service_time_prediction"]
    return res
