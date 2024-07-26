let d = document;

/* Selección de todos los elementos HTML */

const btnEncriptar = d.querySelector('.btn-encriptar');
const btnDesencriptar = d.querySelector('.btn-desencriptar');
const txtEncriptar = d.querySelector('.encriptar');
const textoAviso = d.querySelector('.aviso-texto');
const respuesta = d.querySelector('.evaluar');
const contenidoTarjetaContainer = d.querySelector('.tarjeta-container');
const btnCopy = d.querySelector('.btn-copy');

//Delegación del evento 'click' al botón de 'Ecnriptar'//
btnEncriptar.addEventListener('click', e=> {

    e.preventDefault();
    let valorTexto = txtEncriptar.value;
    

    let txt = valorTexto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" );
    console.log(txt);

    if(valorTexto == "") {

        textoAviso.style.background = "#0A3871";
        textoAviso.style.color = "#FFFF";
        textoAviso.style.fontWeight = "800";
        textoAviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(()=> {

            textoAviso.removeAttribute('style');

        }, 1500);


    } else if(valorTexto !== txt ) {

        textoAviso.style.background = "#0A3871";
        textoAviso.style.color = "#FFFF";
        textoAviso.style.fontWeight = "800";
        textoAviso.textContent = "El texto no debe tener acentos ni caratéres especiales...";

        setTimeout(()=> {

            textoAviso.removeAttribute('style');

        }, 1500);


    } else if(valorTexto !== valorTexto.toLowerCase()) {

        textoAviso.style.background = "#0A3871";
        textoAviso.style.color = "#FFFF";
        textoAviso.style.fontWeight = "800";
        textoAviso.textContent = "El texto debe ser en minúsculas...";

        setTimeout(()=> {

            textoAviso.removeAttribute('style');

        }, 1500);


    } else {

        valorTexto = valorTexto.replace(/e/mg, 'enter');
        valorTexto = valorTexto.replace(/i/mg, 'imes');
        valorTexto = valorTexto.replace(/a/mg, 'ai');
        valorTexto = valorTexto.replace(/o/mg, 'ober');
        valorTexto = valorTexto.replace(/u/mg, 'ufat');

        respuesta.innerHTML = valorTexto;
        btnCopy.style.visibility = 'inherit';
        contenidoTarjetaContainer.remove();


    }

    




});


////Delegación del evento 'click' al botón de 'Desecnriptar'//


btnDesencriptar.addEventListener('click', e=> {

    e.preventDefault();
    let valorTexto = txtEncriptar.value;
    

    let txt = valorTexto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" );
    console.log(txt);

    if(valorTexto == "") {

        textoAviso.style.background = "#0A3871";
        textoAviso.style.color = "#FFFF";
        textoAviso.style.fontWeight = "800";
        textoAviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(()=> {

            textoAviso.removeAttribute('style');

        }, 1500);


    } else if(valorTexto !== txt ) {

        textoAviso.style.background = "#0A3871";
        textoAviso.style.color = "#FFFF";
        textoAviso.style.fontWeight = "800";
        textoAviso.textContent = "El texto no debe tener acentos ni caratéres especiales...";

        setTimeout(()=> {

            textoAviso.removeAttribute('style');

        }, 1500);


    } else if(valorTexto !== valorTexto.toLowerCase()) {

        textoAviso.style.background = "#0A3871";
        textoAviso.style.color = "#FFFF";
        textoAviso.style.fontWeight = "800";
        textoAviso.textContent = "El texto debe ser en minúsculas...";

        setTimeout(()=> {

            textoAviso.removeAttribute('style');

        }, 1500);


    } else {

        valorTexto = valorTexto.replace(/enter/mg, 'e');
        valorTexto = valorTexto.replace(/imes/mg, 'i');
        valorTexto = valorTexto.replace(/ai/mg, 'a');
        valorTexto = valorTexto.replace(/ober/mg, 'o');
        valorTexto = valorTexto.replace(/ufat/mg, 'u');

        respuesta.innerHTML = valorTexto;
        btnCopy.style.visibility = 'inherit';
        contenidoTarjetaContainer.remove();


    }

    




});


/* Delegación de evento a botón 'Copiar'. */

btnCopy.addEventListener('click', e=> {

    e.preventDefault();

    let copiarTexto = respuesta;
    copiarTexto.select();
    d.execCommand('copy');

});