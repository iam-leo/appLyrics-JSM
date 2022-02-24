export const formulario = document.querySelector('#formulario-buscar'),
             divBuscar = document.querySelector('#buscar'),
             divMensajes = document.querySelector('#mensajes'),
             divResultado = document.querySelector('#resultado'),
             hedingResultado = document.querySelector('.letra-resultado h2');


export function spinner(){
    limpiarHTML();
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('spinner');
    divSpinner.innerHTML = `
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    `
    divMensajes.appendChild(divSpinner);
}

export function limpiarHTML(){
    hedingResultado.textContent = '';
    divResultado.textContent = '';
}
