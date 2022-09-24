# mama-doma

mama-doma - рестораны на фудкортах.

### P.S. по всем вопросам писать в личку.

## Как установить приложение

Для начала, [склонируйте репозиторий](https://github.com/newqwes/mama-doma-webpack.git).

Далее, перейдите в папку со скаченным репозиторием и установите зависимости:

```bash
cd mama-doma-webpack && npm install
```

Или, если Вы пользуетесь `yarn`, тогда:

```bash
cd mama-doma-webpack && yarn
```

Затем, как все зависимости будут проинсталированны, запустите проект:

```bash
npm start
```

Или, если Вы пользуетесь `yarn`, тогда:

```bash
yarn start
```

&nbsp - если нужно что бы слова не переносились ставится вместо пробела

## Ссылка на рабочий прототип:

[Ресторан Мама дома](https://mama-doma.by/)

## Описание приложения

При разработке использованы технологии `Sass`, `Gulp`, `PHP`

Работает на версии node 12.22

**Для сборки проекта необходимо:**

1. очистить возможно забилдженный проект командой

```bash
npm run clean
```

2. Делаем поиск по всему проекту ищим **70temphash** и заменяем везде на +1 к числу

3. Делаем билд проекта командой

```bash
npm run build
```

3. 1. Картинки доставки (и те что нужно сохранить в хорошем качестве) заменяешь всё из dist/images/dest на app/images/src (в app всё оставляешь как есть!)

4. Все готовые файлы будут в папке dist, в ней папка под названием html извлечь всё содержимое в dist и удалить папку html. (папка images/dest - так и должно быть)

5. Также добавьте два файла в корень где index.html google0b3e4a...html и .htaccess ЕСЛИ ИХ НЕ БЫЛО РАНЕЕ НА СЕРВЕРЕ!!!
