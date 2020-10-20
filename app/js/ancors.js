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
window.onscroll = function () {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.querySelector('.arrow-to-top').style.display = 'block';
    } else {
        document.querySelector('.arrow-to-top').style.display = 'none';
    }
};
