const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.feedback').offsetWidth + 'px';
    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});
// (function () {
//     if (!Element.prototype.closest) {
//         Element.prototype.closest = function (css) {
//             var node = this;
//             while (node) {
//                 if (node.matches(css)) return node;
//                 else node = node.parentElement;
//             }
//             return null;
//         }
//     }
// })();
// (function () {
//     if (!Element.prototype.matches) {
//         Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
//     }
// })();

// Form send
jQuery(document).ready(function () {
    jQuery('.formReview').submit(function () {
        // Событие отправки с формы
        var form_data = jQuery(this).serialize(); // Собираем данные из полей
        jQuery.ajax({
            type: 'POST', // Метод отправки
            url: '../sendform.php', // Путь к PHP обработчику sendform.php
            data: form_data,
            success: swal({
                title: 'Спасибо за отзыв!',
                type: 'success',
                showConfirmButton: false,
                timer: 2000,
            }),
        });
        $(this).find('input, textarea').prop('disabled', true);
        document.querySelector('.popup.open').classList.remove('open');
        bodyUnLock();
        event.preventDefault();
    });
    jQuery('.formJob').submit(function () {
        // Событие отправки с формы
        var form_data = jQuery(this).serialize(); // Собираем данные из полей
        jQuery.ajax({
            type: 'POST', // Метод отправки
            url: '../sendform2.php', // Путь к PHP обработчику sendform.php
            data: form_data,
            success: swal({
                title: 'Спасибо, заявка принята!',
                type: 'success',
                showConfirmButton: false,
                timer: 2000,
            }),
        });
        $(this).find('input, textarea').prop('disabled', true);
        document.querySelector('.popup.open').classList.remove('open');
        bodyUnLock();
        event.preventDefault();
    });
});
// Form send
