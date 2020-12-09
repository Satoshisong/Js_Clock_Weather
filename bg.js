const body = document.querySelector("body");

const IMG_NUM = 1;

function paintBg(imgnumber){
    const image = new Image();
    image.src = `images/${imgnumber + 1}.jpg`
    image.classList.add(`bgImage`);
    body.appendChild(image);
}

function bgRandom(){
    const number = Math.floor(Math.random() * IMG_NUM);
    return number
}

function init(){
    const randomNumber = bgRandom();
    paintBg(randomNumber);
}

init();