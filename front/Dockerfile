FROM python:3.8-slim

RUN pip install --upgrade pip
COPY front/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY front/dist/moretech ./dist/moretech
COPY front/app.py .

CMD ["python", "-m", "app"]

EXPOSE 80
