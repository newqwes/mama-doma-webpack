window.onload = function () {
    const city = document.querySelector('.region__now_label').innerHTML;
    let cityCenter = [];
    const belarusCountry = [
        'map',
        {
            center: [53.800439, 27.891501],
            zoom: 6,
        },
        {
            searchControlProvider: 'yandex#search',
        },
    ];
    const minskCenter = [
        'map',
        {
            center: [53.907508, 27.558029],
            zoom: 11,
        },
        {
            searchControlProvider: 'yandex#search',
        },
    ];
    const brestCenter = [
        'map',
        {
            center: [52.094246, 23.684559],
            zoom: 12,
        },
        {
            searchControlProvider: 'yandex#search',
        },
    ];
    const gomelCenter = [
        'map',
        {
            center: [52.431936, 30.986377],
            zoom: 12,
        },
        {
            searchControlProvider: 'yandex#search',
        },
    ];
    const mogilevCenter = [
        'map',
        {
            center: [53.894548, 30.330654],
            zoom: 11,
        },
        {
            searchControlProvider: 'yandex#search',
        },
    ];

    if (city === 'Минск') {
        cityCenter = minskCenter;
    } else if (city === 'Брест') {
        cityCenter = brestCenter;
    } else if (city === 'Гомель') {
        cityCenter = gomelCenter;
    } else if (city === 'Могилев') {
        cityCenter = mogilevCenter;
    } else {
        cityCenter = belarusCountry;
    }
    ymaps.ready(function () {
        var myMap = new ymaps.Map(...cityCenter),
            minskMomo = new ymaps.Placemark(
                [53.859766, 27.674067],
                {
                    hintContent: 'ТЦ “МОМО”, фудкорт 2 этаж, "Мама дома"',
                    balloonContent: 'Просп. Партизанский, 150а, станция метро Магилевская, "Мама дома"',
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: '../images/dest/newLogo.png',
                    iconImageSize: [32, 32],
                    iconImageOffset: [-16, -16],
                }
            ),
            minskDana = new ymaps.Placemark(
                [53.933485, 27.652204],
                {
                    hintContent: 'ТРЦ “Dana Mall”, фудкорт 3 этаж, "Мама дома"',
                    balloonContent: 'ул. Мстиславца, 11, станция метро Восток, МИНСК, "Мама дома"',
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: '../images/dest/newLogo.png',
                    iconImageSize: [32, 32],
                    iconImageOffset: [-16, -16],
                }
            ),
            minskGalileo = new ymaps.Placemark(
                [53.890535, 27.55374],
                {
                    hintContent: 'ТРЦ “Galileo”, фудкорт 3 этаж, "Мама дома"',
                    balloonContent: 'ул. Бобруйская, 6, станция метро площадь Ленина, МИНСК, "Мама дома"',
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: '../images/dest/newLogo.png',
                    iconImageSize: [32, 32],
                    iconImageOffset: [-16, -16],
                }
            ),
            minskPlazo = new ymaps.Placemark(
                [53.926915, 27.510074],
                {
                    hintContent: 'ТРЦ “Palazzo”, фудкорт 3 этаж, "Мама дома"',
                    balloonContent: 'ул. Тимирязева, 74А, МИНСК, "Мама дома"',
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: '../images/dest/newLogo.png',
                    iconImageSize: [32, 32],
                    iconImageOffset: [-16, -16],
                }
            );
        brestCYM = new ymaps.Placemark(
            [52.085091, 23.694424],
            {
                hintContent: 'Брест, ТЦ “ЦУМ”, 3 этаж, "Мама дома"',
                balloonContent: 'просп. Машерова, 17, "Мама дома"',
            },
            {
                iconLayout: 'default#image',
                iconImageHref: '../images/dest/newLogo.png',
                iconImageSize: [32, 32],
                iconImageOffset: [-16, -16],
            }
        );
        gomelSecret = new ymaps.Placemark(
            [52.423797, 30.997004],
            {
                hintContent: 'Гомель, ТРЦ “Секрет”, 1 этаж, "Мама дома"',
                balloonContent: 'ул. Гагарина, 65, "Мама дома"',
            },
            {
                iconLayout: 'default#image',
                iconImageHref: '../images/dest/newLogo.png',
                iconImageSize: [32, 32],
                iconImageOffset: [-16, -16],
            }
        );
        mogilevPark = new ymaps.Placemark(
            [53.935452, 30.256978],
            {
                hintContent: 'Могилев, ТЦ “Парк Сити”, фудкорт 1 этаж, "Мама дома"',
                balloonContent: 'Минское шоссе, 31, "Мама дома"',
            },
            {
                iconLayout: 'default#image',
                iconImageHref: '../images/dest/newLogo.png',
                iconImageSize: [32, 32],
                iconImageOffset: [-16, -16],
            }
        );

        myMap.geoObjects.add(minskMomo).add(minskDana).add(minskGalileo).add(minskPlazo).add(brestCYM).add(gomelSecret).add(mogilevPark);
        myMap.behaviors.disable('scrollZoom');
    });
};
