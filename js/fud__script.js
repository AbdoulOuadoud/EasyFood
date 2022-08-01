const step__item = document.getElementsByClassName("step__item")
const step__btn = document.getElementsByClassName("step__btn");
const step__content = document.getElementsByClassName("step__content");

for (let index = 0; index < step__btn.length; index++) {
    const element = step__btn[index];
    element.addEventListener('click',()=>{
        for (let i = 0; i < step__btn.length; i++) {           
            try{
                step__content[i - 1].classList.remove('active__step')
                step__item[i - 1].classList.remove('doing')
                step__item[i - 1].classList.add('done')
            } catch(e){
                console.log(e)
            }
        }
        step__content[index].classList.add('active__step')
        step__item[index].classList.remove('to__do')
        step__item[index].classList.add('doing')
        for (let j = index + 1; j < step__btn.length; j++) {
            try {
                step__item[j].classList.remove('doing')
                step__item[j].classList.remove('done')
                step__item[j].classList.add('to__do')
                step__content[j].classList.remove('active__step')
            } catch (error) {
                console.log(error)
            }
        }
    })
}

const countries = document.getElementById('countries');
const flags = document.querySelector(".flags");

let previous__flag = ""

countries.addEventListener('change', (event) =>{
    selected__flag = "fi-"+event.target.value.toLowerCase()
    if(flags.classList.contains("fi-fr")){
        flags.classList.replace("fi-fr",selected__flag)
    } else {
        flags.classList.replace(previous__flag,selected__flag)
    }
    previous__flag = selected__flag;
})

const check = document.getElementById("check__2")
const raison__sociale = document.querySelector(".raison__sociale")

check.addEventListener('click', ()=>{
    raison__sociale.classList.toggle('active')
})

