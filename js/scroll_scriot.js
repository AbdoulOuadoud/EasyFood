const scroll__left = document.getElementById("scroll__left");
const scroll__right = document.getElementById("scroll__right");

const container__to__scroll = document.querySelector('.partners__logos__container');

scroll__left.addEventListener('click',()=>{
    container__to__scroll.scrollLeft -= 150;
    console.log("dood")
})

scroll__right.addEventListener('click',()=>{
    container__to__scroll.scrollLeft += 150;
    console.log("dood")
})