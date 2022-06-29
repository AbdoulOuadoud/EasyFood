const rejoin = document.getElementById("rejoin")
const modal_sheet = document.querySelector(".modal_sheet")
const modal__container = document.querySelector(".modal__container")
const close = document.querySelector(".close")
const body = document.getElementsByTagName("body")

rejoin.addEventListener("click", ()=>{
    modal_sheet.classList.add("active")
    modal__container.classList.add("active")
    body[0].classList.add("active")
})

close.addEventListener("click", ()=>{
    modal_sheet.classList.remove("active")
    modal__container.classList.remove("active")
    body[0].classList.remove("active")
})

modal_sheet.addEventListener("click", ()=>{
    modal_sheet.classList.remove("active")
    modal__container.classList.remove("active")
    body[0].classList.remove("active")
})