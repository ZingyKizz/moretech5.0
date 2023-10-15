FROM python:3.8-slim

RUN apt-get update && apt-get install -y

RUN pip install --upgrade pip

COPY backend/requirements.txt .
RUN pip install --no-cache-dir --default-timeout=900 -r requirements.txt

COPY backend/app.py .
COPY backend/query_templates.py .
COPY backend/utils.py .
COPY backend/intent_classification.py .

RUN python -c 'from sentence_transformers import SentenceTransformer; SentenceTransformer("cointegrated/rubert-tiny2")'

CMD ["python", "-m", "app"]