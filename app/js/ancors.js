const anchors = document.querySelectorAll('a[href*="#"')
for (let anchor of anchors) {

    anchor.addEventListener("click", function (event) {
        const blockID = anchor.getAttribute('href')
        if (blockID !== "#popup" && blockID !== "#arrowToTop") {
            event.preventDefault();
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    })
}

let arrow = document.querySelector(".arrow-to-top").style;
window.onscroll = () => (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) ? arrow.display = "block" : arrow.display = "none";