document.querySelector('.hamburger-region').addEventListener('click', function (e) {
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
    } else {
        this.classList.add('is-active');
    }
});

document.querySelector('.hamburger').addEventListener('click', function (e) {
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
    } else {
        this.classList.add('is-active');
    }
});
window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.querySelector('.hamburger').classList.remove('is-active');
        document.querySelector('.hamburger-region').classList.remove('is-active');
    }
};
