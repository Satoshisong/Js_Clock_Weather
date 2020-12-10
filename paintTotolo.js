function paintToto(){
    const image = new Image();
    image.src = `images/totolo1.jpg`;
    image.classList.add(`totolo`);
    body.appendChild(image);
}

function init(){
    paintToto();
}

init();