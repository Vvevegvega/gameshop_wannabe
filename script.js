//INICIO Carrousel de imagenes
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
//FIN carrousel imagenes

//INICIO validacion del formulario
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("userLoginForm");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const userName = document.forms["userLoginForm"]["userName"].value;
            const userEmail = document.forms["userLoginForm"]["userMail"].value;

            if (userName.trim() === "") {
                window.alert("El nombre no puede estar vacío");
                return;
            }
            if (userName.length <= 3) {
                window.alert("El nombre debe tener más de 3 caracteres");
                return;
            }

            if (userEmail.trim() === "") {
                window.alert("El correo no puede estar vacío");
                return;
            }
            if (!userEmail.includes("@")) {
                window.alert("Correo no válido");
                return;
            }

            window.alert("Formulario válido")
        });
    });
//FIN validacion formulario