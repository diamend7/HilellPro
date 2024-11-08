const slidesImages = document.querySelectorAll('#slidesImages img');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
const dots = document.querySelector('#dots');
let currentImg = 0;

function setActiveSlide(index){
    slidesImages.forEach(function(img, num){ 
            img.classList.toggle(`activeImage`, num === index)
    });

    if(currentImg === 0){
        prevButton.setAttribute(`style`, 'visibility:hidden;');
    } else {
        prevButton.setAttribute(`style`, 'visibility:visible');
    }

    if(currentImg === slidesImages.length - 1){
        nextButton.setAttribute(`style`, 'visibility:hidden;');
    } else {
        nextButton.setAttribute(`style`, 'visibility:visible');
    }

    setActiveDot(index);
}

function setDots(){
    slidesImages.forEach(function(img, num){
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.textContent = 'о';
        dot.addEventListener('click', function(){
            currentImg = num;
            setActiveSlide(currentImg);
        })
        dots.appendChild(dot);
    });
}

function setActiveDot(index){
    const allDot = document.querySelectorAll(`.dot`);
    allDot.forEach(function(dot, num){
        dot.classList.toggle(`activeDot`, num === index)
    });
}

prevButton.addEventListener('click', function(){
    currentImg--
    setActiveSlide(currentImg);
});
nextButton.addEventListener('click', function(){
    currentImg++
    setActiveSlide(currentImg);
    
 });

setDots();
setActiveSlide(currentImg);
