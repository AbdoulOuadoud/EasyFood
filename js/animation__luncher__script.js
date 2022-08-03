const anime__0 = document.getElementsByClassName('anime__0');
const anime__1 = document.getElementsByClassName('anime__1');
const anime__2 = document.getElementsByClassName('anime__2');
const anime__3 = document.getElementsByClassName('anime__3');
const anime__4 = document.getElementsByClassName('anime__4');

window.addEventListener('scroll', ()=>{
    animation__luncher(anime__0 , 'animation__class__0')
    animation__luncher(anime__1 , 'animation__class__1')
    animation__luncher(anime__2 , 'animation__class__2')
    animation__luncher(anime__3 , 'animation__class__3')
    animation__luncher(anime__4 , 'animation__class__4')
})

function animation__luncher(elementsToAnime , animation){

    const {scrollTop , clientHeight } = document.documentElement;

    for (let index = 0; index < elementsToAnime.length; index++) {
        const element = elementsToAnime[index];

        const topElementToTopViewport = element.getBoundingClientRect().top;

        if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.95){
            element.classList.add(animation)
        }
    }
}