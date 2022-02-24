import * as UI from "./interfaz.js";
import API from "./api.js";

UI.formulario.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();
    UI.limpiarHTML();

    //Obtener datos del form
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    //Validar form
    if(artista === '' || cancion === ''){
        UI.divMensajes.textContent = 'Ambos campos son obligatoios.';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);

        return
    }

    //Consultar API
    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();
}

