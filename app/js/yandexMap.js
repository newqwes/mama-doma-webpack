function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

window.onload = function () {
  var city = document.querySelector('.region__now_label').innerHTML;
  var cityCenter = [];
  var belarusCountry = [
    'map',
    {
      center: [53.800439, 27.891501],
      zoom: 6
    },
    {
      searchControlProvider: 'yandex#search'
    }
  ];
  var minskCenter = [
    'map',
    {
      center: [53.907508, 27.558029],
      zoom: 11
    },
    {
      searchControlProvider: 'yandex#search'
    }
  ];
  var gomelCenter = [
    'map',
    {
      center: [52.431936, 30.986377],
      zoom: 12
    },
    {
      searchControlProvider: 'yandex#search'
    }
  ];
  var mogilevCenter = [
    'map',
    {
      center: [53.894548, 30.330654],
      zoom: 11
    },
    {
      searchControlProvider: 'yandex#search'
    }
  ];
  var linkToImg = '../../';
  if (city === 'Минск') {
    linkToImg = '../';
  }
  if (city === 'Минск' || city === 'Мінск') {
    cityCenter = minskCenter;
  } else if (city === 'Гомель' || city === 'Гомель') {
    cityCenter = gomelCenter;
  } else if (city === 'Могилев' || city === 'Магілёў') {
    cityCenter = mogilevCenter;
  } else {
    cityCenter = belarusCountry;
  }
  ymaps.ready(function () {
    var myMap = new (Function.prototype.bind.apply(
        ymaps.Map,
        [null].concat(_toConsumableArray(cityCenter))
      ))(),
      minskMomo = new ymaps.Placemark(
        [53.859766, 27.674067],
        {
          hintContent: 'ТЦ «МОМО», фудкорт,  2 этаж',
          balloonContent: 'Просп. Партизанский, 150а, ст.м. Магилевская'
        },
        {
          iconLayout: 'default#image',
          iconImageHref: linkToImg + 'images/dest/logo7.png',
          iconImageSize: [32, 32],
          iconImageOffset: [-16, -16]
        }
      ),
      minskExpobel = new ymaps.Placemark(
        [53.964164, 27.623744],
        {
          hintContent: 'ТЦ EXPOBEL, фудкорт,  1 этаж',
          balloonContent: '50-й километр Минский район, пересечение ул. Мирошниченко и МКАД'
        },
        {
          iconLayout: 'default#image',
          iconImageHref: linkToImg + 'images/dest/logo7.png',
          iconImageSize: [32, 32],
          iconImageOffset: [-16, -16]
        }
      ),
      minskCityMall = new ymaps.Placemark(
        [53.890203, 27.546928],
        {
          hintContent: 'ТРК «Minsk City Mall», фудкорт, 3 этаж',
          balloonContent: 'ул. Толстого, 1 ст.м. Вокзальная'
        },
        {
          iconLayout: 'default#image',
          iconImageHref: linkToImg + 'images/dest/logo7.png',
          iconImageSize: [32, 32],
          iconImageOffset: [-16, -16]
        }
      ),
      minskDana = new ymaps.Placemark(
        [53.933485, 27.652204],
        {
          hintContent: 'ТРЦ «Dana Mall», фудкорт,  3 этаж',
          balloonContent: 'ул. П.Мстиславца, 11, ст.м. Восток, МИНСК'
        },
        {
          iconLayout: 'default#image',
          iconImageHref: linkToImg + 'images/dest/logo7.png',
          iconImageSize: [32, 32],
          iconImageOffset: [-16, -16]
        }
      ),
      minskGreenCity = new ymaps.Placemark(
        [53.908721, 27.431585],
        {
          hintContent: 'ТРЦ «Green City», фудкорт,  3 этаж',
          balloonContent: 'ул. Притыцкого, 156, ст.м. Каменная Горка, МИНСК'
        },
        {
          iconLayout: 'default#image',
          iconImageHref: linkToImg + 'images/dest/logo7.png',
          iconImageSize: [32, 32],
          iconImageOffset: [-16, -16]
        }
      ),
      minskPlazo = new ymaps.Placemark(
        [53.926915, 27.510074],
        {
          hintContent: 'ТРЦ «Palazzo», фудкорт,  3 этаж',
          balloonContent: 'ул. Тимирязева, 74А, МИНСК'
        },
        {
          iconLayout: 'default#image',
          iconImageHref: linkToImg + 'images/dest/logo7.png',
          iconImageSize: [32, 32],
          iconImageOffset: [-16, -16]
        }
      );
    gomelSecret = new ymaps.Placemark(
      [52.423797, 30.997004],
      {
        hintContent: 'Гомель, ТРЦ «Секрет», 1 этаж',
        balloonContent: 'ул. Гагарина, 65'
      },
      {
        iconLayout: 'default#image',
        iconImageHref: linkToImg + 'images/dest/logo7.png',
        iconImageSize: [32, 32],
        iconImageOffset: [-16, -16]
      }
    );
    mogilevPark = new ymaps.Placemark(
      [53.935452, 30.256978],
      {
        hintContent: 'Могилев, ТЦ «Парк Сити», фудкорт,  1 этаж',
        balloonContent: 'Минское шоссе, 31'
      },
      {
        iconLayout: 'default#image',
        iconImageHref: linkToImg + 'images/dest/logo7.png',
        iconImageSize: [32, 32],
        iconImageOffset: [-16, -16]
      }
    );

    myMap.geoObjects
      .add(minskMomo)
      .add(minskDana)
      .add(minskGreenCity)
      .add(minskPlazo)
      .add(minskExpobel)
      .add(minskCityMall)
      .add(gomelSecret)
      .add(mogilevPark);
    myMap.behaviors.disable('scrollZoom');
  });
};
