jQuery(document).ready(function () {
    jQuery("form").submit(function () { // Событие отправки с формы
        var form_data = jQuery(this).serialize(); // Собираем данные из полей
        jQuery.ajax({
            type: "POST", // Метод отправки
            url: "../sendform.php", // Путь к PHP обработчику sendform.php
            data: form_data,
            success: swal({
                title: "Спасибо за отзыв!",
                type: "success",
                showConfirmButton: false,
                timer: 2000
            })
        });
        $(this).find('input, textarea').prop('disabled', true);
        document.querySelector('.popup.open').classList.remove('open');
        event.preventDefault();
    });
});