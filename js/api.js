import * as UI from "./interfaz.js";

class API{
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        UI.spinner();
        const spinner = document.querySelector('.spinner');

        fetch(url)
            .then(respuesta => {
                    spinner.remove();
                    return respuesta.json()
                })
            .then( resultado => {
                if (resultado.lyrics) {
                    const {lyrics} = resultado;
                    UI.divResultado.textContent = lyrics;
                    UI.hedingResultado.textContent = `${this.cancion} - ${this.artista}`;
                    UI.formulario.reset();
                }else{
                    UI.limpiarHTML();
                    UI.hedingResultado.textContent = 'No se encontraron resultados.';
                    UI.hedingResultado.classList.add('error');

                    setTimeout(() => {
                        UI.hedingResultado.textContent = '';
                        UI.hedingResultado.classList.remove('error');
                    }, 3000);
                }
            })
    }
}

export default API;