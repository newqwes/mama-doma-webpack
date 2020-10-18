document.querySelector('.hamburger-region').addEventListener('click', function (e) {
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
    } else {
        this.classList.add('is-active');
    }
});

window.onscroll = () =>
    (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) &&
    document.querySelector('.hamburger-region').classList.remove('is-active');

document.querySelector('.hamburger').addEventListener('click', function (e) {
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
    } else {
        this.classList.add('is-active');
    }
});

window.onscroll = () =>
    (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) &&
    document.querySelector('.hamburger').classList.remove('is-active');
