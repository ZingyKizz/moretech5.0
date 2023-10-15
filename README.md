# moretech5.0

## Шаги для запуска веб-приложения
* Склонировать репозиторий
  ~~~
  git clone https://github.com/ZingyKizz/moretech5.0.git
  ~~~
* Перейти в папку проекта
  ~~~
  cd moretech5.0
  ~~~
* Распаковать postgres-data.zip
  ~~~
  unzip postgres-data.zip
  ~~~
* Поднять докер-компоуз
  ~~~
  docker-compose up -d --force-recreate --build
  ~~~
* Перейдите через адресную строку браузера URL 
  ~~~
  http://localhost
  ~~~

## Функционал
* Отображение карты города, в котором находится пользователь, включая метку его текущего местоположения и метки отделений Банка ВТБ. Открытые и закрытые отделения имеют разный цвет иконки. 
<img width="608" alt="image" src="https://github.com/ZingyKizz/moretech5.0/assets/63020800/4fe966a3-bc7b-4a6a-84ba-65359d8eb2e3">
* Возможность построения марштрута до подходящего отделения в нескольких вариантах - пеший, автомобильный, общественный транспорт, на велосипеде.
![image](https://github.com/ZingyKizz/moretech5.0/assets/63020800/2e70be78-d0ba-4258-a618-25aeef4884ec)
![image](https://github.com/ZingyKizz/moretech5.0/assets/63020800/6972a74f-dea1-4069-96df-9cc0ee276991)
* Возможность фильтрации отделений по необходимой услуге
  <img width="271" alt="image" src="https://github.com/ZingyKizz/moretech5.0/assets/63020800/9e5241ea-3ae4-4268-97a5-d92f7bcbf0ae">
* Возможность не искать среди десятков услуг нужную глазами - можно воспользоваться поиском, который сработает даже на неформальных запросах, так как использует мощь языковых моделей.
* <img width="287" alt="image" src="https://github.com/ZingyKizz/moretech5.0/assets/63020800/e86bc158-8d05-4e82-aa8b-2abf6c0c8809">



