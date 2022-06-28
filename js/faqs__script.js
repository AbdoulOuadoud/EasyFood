const unfold__buttons = document.getElementsByClassName("unfold__icon")
const question__boxs = document.getElementsByClassName("question__box")
const icons = document.getElementsByClassName("icon")
for (let unfold__button = 0; unfold__button < unfold__buttons.length; unfold__button++) {
    unfold__buttons[unfold__button].addEventListener('click',()=>{
        for (let index = 0; index < unfold__buttons.length; index++) {
            if (unfold__button != index){
                question__boxs[index].classList.remove('active')
                unfold__buttons[index].classList.add('muted__background')
                unfold__buttons[index].classList.remove('primary__background')
                icons[index].classList.remove('less')
                icons[index].classList.add('more')
            }
        }
        question__boxs[unfold__button].classList.toggle('active')
        unfold__buttons[unfold__button].classList.toggle('muted__background')
        unfold__buttons[unfold__button].classList.toggle('primary__background')
        icons[unfold__button].classList.toggle('more')
        icons[unfold__button].classList.toggle('less')
    });
}