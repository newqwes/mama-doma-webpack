ymaps.ready(function () {
    var myMap = new ymaps.Map(
            'map', {
                center: [53.907508, 27.558029],
                zoom: 11,
            }, {
                searchControlProvider: 'yandex#search',
            }
        ),
        minskMomo = new ymaps.Placemark(
            [53.859766, 27.674067], {
                hintContent: 'ТЦ “МОМО”, фудкорт 2 этаж, "Мама дома"',
                balloonContent: 'Просп. Партизанский, 150а, станция метро Магилевская, "Мама дома"',
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/newLogo.PNG',
                iconImageSize: [32, 32],
                iconImageOffset: [-16, -16],
            }
        ),
        minskDana = new ymaps.Placemark(
            [53.933485, 27.652204], {
                hintContent: 'ТРЦ “Dana Mall”, фудкорт 3 этаж, "Мама дома"',
                balloonContent: 'ул. Мстиславца, 11, станция метро Восток, "Мама дома"',
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/newLogo.PNG',
                iconImageSize: [32, 32],
                iconImageOffset: [-16, -16],
            }
        ),
        minskGalileo = new ymaps.Placemark(
            [53.890535, 27.553740], {
                hintContent: 'ТРЦ “Galileo”, фудкорт 3 этаж, "Мама дома"',
                balloonContent: 'ул. Бобруйская, 6, станция метро плошщаль Ленина, "Мама дома"',
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/newLogo.PNG',
                iconImageSize: [32, 32],
                iconImageOffset: [-16, -16],
            }
        ),
        minskPlazo = new ymaps.Placemark(
            [53.926915, 27.510074], {
                hintContent: 'ТРЦ “Palazzo”, фудкорт 3 этаж, "Мама дома"',
                balloonContent: 'ул. Тимиряева, 74А, "Мама дома"',
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/newLogo.PNG',
                iconImageSize: [32, 32],
                iconImageOffset: [-16, -16],
            }
        );

    myMap.geoObjects.add(minskMomo).add(minskDana).add(minskGalileo).add(minskPlazo);
    myMap.behaviors.disable('scrollZoom');
});