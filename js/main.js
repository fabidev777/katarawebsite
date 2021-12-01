window.addEventListener("DOMContentLoaded", (event) => {
    let topbutton = document.getElementById("topButton")

    window.onscroll = () => {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            topbutton.style.display = "block"
        } else {
            topbutton.style.display = "none"
        }
    }

})