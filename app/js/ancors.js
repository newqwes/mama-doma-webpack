const anchors = document.querySelectorAll('a[href*="#"');
for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
        const blockID = anchor.getAttribute('href');
        if (blockID !== '#popup' && blockID !== '#arrowToTop') {
            event.preventDefault();
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
}
window.onload = function () {
    window.onscroll = function () {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            return (document.querySelector('.arrow-to-top').style.display = 'block');
        } else {
            return (document.querySelector('.arrow-to-top').style.display = 'none');
        }
    };
};
