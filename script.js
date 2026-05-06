const carrouselImagenList = document.querySelectorAll(".previewCard");
let carrouselPuntero = -1;
imagenSiguiente();

function imagenSiguiente(){
    carrouselPuntero ++;
    if(carrouselPuntero >= carrouselImagenList.length){
        carrouselPuntero = 0;
    }
    cambiarFotoCarrousel(carrouselImagenList[carrouselPuntero]);
}

function imagenAnterior(){
    carrouselPuntero --;
    if(carrouselPuntero < 0){
        carrouselPuntero = carrouselImagenList.length-1;
    }
    cambiarFotoCarrousel(carrouselImagenList[carrouselPuntero]);
}

function cambiarFotoCarrousel(element){
    const selected = document.getElementsByClassName("previewCardSelected");
    for (let el of selected) {
        el.classList.remove("previewCardSelected");
        el.classList.add("previewCard")
    }

    element.classList.remove("previewCard");
    element.classList.add("previewCardSelected");

    document.getElementById("imagenCarrousel").src=element.src;
}



