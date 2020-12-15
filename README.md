# Проект "Активный гражданин 2025" 

## Для разработчиков
Проект создан с помощью create-react-application [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)

***Для работы с проектом у вас должен быть установлен Node.js [https://nodejs.org/en/](https://nodejs.org/en/) последней версии.***

Для запуска проекта на локальной машине вам необходимо установить все необходимые зависимости:
    
    npm install

После установки всех зависимостей ваш проект сможет быть запущен слудующими скриптами:

    npm start
    npm build

После запуска скрипта start ваш проект в режиме HotReload будет доступен в браузере по адресу http://localhost:3000

Скрипт build  используется для продакшн сборки, скомпилированные файлы будут размещены в дирректории public/

## Оформление кода
В проекте используется линтер Eslint [https://eslint.org/](https://eslint.org/)

### Файлы конфигурации eslint

* .eslintrc.js описывает конфигуразии для eslint
* .eslintignore содержит исключения для проверки

### Стандарт стиля Airbnb

* руководство на английском [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)

* руководство перевод на русский [https://github.com/leonidlebedev/javascript-airbnb](https://github.com/leonidlebedev/javascript-airbnb) 

## Editorconfig

EditorConfig [https://editorconfig.org/](https://editorconfig.org/) помогает поддерживать согласованные стили кодирования для нескольких разработчиков, работающих над одним проектом в разных редакторах и IDE.

### Файл конфигурации Editorconfig

* .editorconfig

В том случае, если вы используете среду разработки vsCode ва необходимо установить разрешение editorconfig for vsCode из маркетплейса vsCode.

Если вы используете IDE, например, webStorm или phpStorm дополнительная установка расширения Editorconfig не требуется


## Дополнительные модули npm используемые в проекте

* CSS Modules [https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
