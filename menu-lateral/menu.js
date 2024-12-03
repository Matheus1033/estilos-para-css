let hamburguer = document.getElementById("bnt-hamburguer");
let menuItem = document.querySelectorAll(".item-menu")
let expandir = document.querySelector("#expandir")
let menuSid = document.querySelector(".menu-lateral")
function apertou(){
    hamburguer.classList.toggle("ativar")
    menuSid.classList.toggle("expandir")
}
function selected() {
    menuItem.forEach((item) => {
        item.classList.remove("active")
    })
    this.classList.add("active")
}
menuItem.forEach((item) => {
    item.addEventListener("click", selected)
})