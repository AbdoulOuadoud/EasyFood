const newsletter = document.getElementById("newsletter")
const popup__container = document.querySelector(".popup__container")
const close__popup = document.getElementById("close__popup")
const popup_sheet = document.querySelector(".popup_sheet")
try { 
    body; 
}
catch(e) {
    if(e.name == "ReferenceError") {
        const body = document.getElementsByTagName("body")
        newsletter.addEventListener("click", ()=>{
            popup_sheet.classList.add("active")
            popup__container.classList.add("active")
            body[0].classList.add("active")
        })

        close__popup.addEventListener("click", ()=>{
            popup_sheet.classList.remove("active")
            popup__container.classList.remove("active")
            body[0].classList.remove("active")
        })

        popup_sheet.addEventListener("click", ()=>{
            popup_sheet.classList.remove("active")
            popup__container.classList.remove("active")
            body[0].classList.remove("active")
        })
    }
}