const menu = document.getElementById("menu")
const menu__container = document.getElementById("menu__container")
const side_naviguation = document.getElementById("side_naviguation")
const side__nav__item = document.getElementsByClassName("side__nav__item")
menu.addEventListener("click",()=>{
    display__menu()
})

function display__menu(){
    if(menu__container.classList.contains("active")){
        menu.classList.add("menu__open")
        menu.classList.remove("menu__close")
    }else{
        menu.classList.remove("menu__open")
        menu.classList.add("menu__close")
    }
    side_naviguation.classList.toggle("active")
    menu__container.classList.toggle("active")

    for (let index = 0; index < side__nav__item.length; index++) {
        const element = side__nav__item[index];
        element.classList.toggle("active")
    }
    
}