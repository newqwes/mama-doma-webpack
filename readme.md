# mama-doma

mama-doma - рестораны на фудкортах.

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

## Ссылка на рабочий прототип:

[Ресторан Мама дома](https://mama-doma.by/)

## Описание приложения

При разработке использованы технологии `Sass`, `Gulp`, `PHP`

**Для сборки проекта необходимо:**

1. очистить возможно забилдженный проект командой

```bash
npm clean
```

2. Делаем поиск по всему проекту ищим **41temphash** и заменяем везде на +1 к числу

3. Делаем билд проекта командой

```bash
npm build
```

3. 1. Картинки доставки (и те что нужно сохранить в хорошем качестве) после build переносишь из image/src в билд папку

4. Все готовые файлы будут в папке dist, в ней папка под названием html извлечь всё содержимое в dist и удалить папку html. (папка images/dest - так и должно быть)

5. Также добавьте два файла в корень где index.html google0b3e4a...html и .htaccess

### P.S. по всем вопросам писать в личку.
