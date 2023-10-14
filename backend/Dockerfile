FROM python:3.8-slim

RUN apt-get update && apt-get install -y

RUN pip install --upgrade pip
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/app.py .
COPY backend/query_templates.py .
COPY backend/utils.py .

CMD ["python", "-m", "app"]