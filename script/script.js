let show = true

const menuSection = document.querySelector(".menu-section")
const menu = menuSection.querySelector(".menu")

menu.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = !show
})