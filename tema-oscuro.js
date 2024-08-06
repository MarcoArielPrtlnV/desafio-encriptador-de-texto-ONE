const d = document;

export default function darkTheme(btn, classDark) {

    const themeBtn = d.querySelector(btn);
    const selectors = d.querySelectorAll('[data-dark]');
    const txtEncriptar = d.querySelector('.encriptar');
    const tarjetaTexto = d.querySelector('.tarjeta-texto');
    const imgMuñeco = d.querySelector('.img-muñeco');
    const textoUno = d.querySelector('.texto-uno');
    const textoDos = d.querySelector('.texto-dos');
    const copyRight = d.querySelector('.copy-right');
    const respuesta = d.querySelector('.evaluar');
    const gitHub = d.querySelector('.github');
    
    
    console.log(selectors);

    let moon = '🌙';
    let sun = '☀️';

    d.addEventListener('click', (e) =>{

        if(e.target.matches(btn)) {

            console.log(themeBtn.textContent);


            if(themeBtn.textContent === moon) {

                selectors.forEach(el => el.classList.add(classDark));
                themeBtn.textContent = sun;
                txtEncriptar.style.background = "#6EACDA"
                tarjetaTexto.style.background = "#03346E"
                imgMuñeco.style.background = "#03346E";
                textoUno.style.background =  "#03346E";  
                textoUno.style.color =  "#67808e";              
                textoDos.style.background = "#03346E";
                copyRight.style.color = "#e5e5e5e5" 
                respuesta.style.color ="#e5e5e5e5";
                gitHub.style.color = "#e5e5e5e5"

            } else {

                selectors.forEach(el => el.classList.remove(classDark));
                themeBtn.textContent = moon;
                txtEncriptar.style.background = "#ffffff"
                tarjetaTexto.style.background = "#e5e5e5e5"
                imgMuñeco.style.background = "#e5e5e5e5";
                textoUno.style.background =  "#e5e5e5e5"; 
                textoUno.style.color =  "#343a40";              
                textoDos.style.background = "#e5e5e5e5";
                copyRight.style.color = "#343a40";
                respuesta.style.color ="#495057";
                
            }


        }
    });
    
    
        
}
