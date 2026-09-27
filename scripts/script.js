//INICIO Carrousel de imagenes
    const carrouselImagenList = document.querySelectorAll(".previewCard");
    setPositions();
    let carrouselPuntero = -1;
    imagenSiguiente();

    function setPositions(){
        carrouselImagenList.forEach((card, index) => {
            card.dataset.position = index;
        });
    }

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

        carrouselPuntero = parseInt(element.dataset.position);

        document.getElementById("imagenCarrousel").src=element.src;
    }
//FIN carrousel imagenes

//INICIO Menu
    const abrirMenu = document.getElementById("navMenuOpen");
    const cerrarMenu = document.getElementById("navMenuClose");
    const botones = document.getElementsByClassName("navButton");

    abrirMenu.addEventListener("click", function () {
        cerrarMenu.hidden=false;
        abrirMenu.hidden=true;

        for(let boton of botones){
            boton.hidden= false;
        }
    });

    cerrarMenu.addEventListener("click", function () {
        cerrarMenu.hidden=true;
        abrirMenu.hidden=false;

        for(let boton of botones){
            boton.hidden=true;
        }
    });
//FIN MEnu

//INICIO Calculadora
    let precioSinIva = 0;
    const IVA_multiplo = 1.21;
    const precioCarrito = document.getElementById("precioTotalCarrito_Euros");

    document.querySelectorAll('.panelUnidades').forEach(panel => {
        const counter = panel.querySelector('p');
        const precioUnidad = parseFloat(panel.closest(".videojuego").dataset.precio);

        function actualizarTotal(){
            precioCarrito.textContent = 
            (parseFloat(precioSinIva) * parseFloat(IVA_multiplo)) < 0 
                ? "0.0"
                : (parseFloat(precioSinIva) * parseFloat(IVA_multiplo)).toFixed(2);
            precioCarrito.textContent += "€";
        }

        panel.querySelector('.addUnit').addEventListener('click', () => {
            counter.textContent = parseInt(counter.textContent) + 1;
            precioSinIva += precioUnidad;
            actualizarTotal();
        });

        panel.querySelector('.subUnit').addEventListener('click', () => {
            let current = parseInt(counter.textContent);
            if (current > 0) {
                counter.textContent --;
                precioSinIva -= precioUnidad;
                actualizarTotal();
            }
        });
    });
//FIN Calculadora

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