
const criterio = /^[a-z\s]+$/;


// Encriptar texto

 function encriptar(){
    const ingresoTexto = document.querySelector('.ingreso-texto').value;
    if(criterio.test(ingresoTexto)){

         const textoEncriptado = encriptarTexto(ingresoTexto);
         const egresoTexto = document.querySelector('.egreso-texto');
        egresoTexto.textContent = textoEncriptado;
        
        const mensajeGato = document.querySelector('.imagen-msg');
        mensajeGato.textContent = 'Encriptado!'

    } else{
        ingresoTexto.value = '';
       alert('Por favor, Ingrese solo letras minúsculas');
    }
}

function encriptarTexto(texto){

    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');

    return texto;
}

// Desencriptar texto

 function desencriptar(){
    const egresoTexto = document.querySelector('.ingreso-texto').value;

    const textoDesencriptado = desencriptarTexto(egresoTexto);
    const resultadoDesencriptado = document.querySelector('.egreso-texto');
    resultadoDesencriptado.textContent = textoDesencriptado;

    const mensajeGato = document.querySelector('.imagen-msg');
        mensajeGato.textContent = 'Desencriptado!'
 }


function desencriptarTexto(texto){
    
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');

    return texto;
}

//Limpiar texto

function limpiarTexto(){
    const ingresoTexto = document.querySelector('.ingreso-texto');
    ingresoTexto.value = '';
    const egresoTexto = document.querySelector('.egreso-texto');
    egresoTexto.textContent = '';

    const mensajeGato = document.querySelector('.imagen-msg');
    mensajeGato.textContent = 'Eliminado!';
}

// Copiar texto
function copiar(){
    const textoCopiado = document.querySelector('.egreso-texto').value;
    const mensajeGato = document.querySelector('.imagen-msg');

    navigator.clipboard.writeText(textoCopiado)
    .then(() => mensajeGato.textContent = 'Copiado!')
    .catch(error => mensajeGato.textContent = 'Error al copiar!');

}

//funcion secreta

function nometoques(){
    const mensajeGato = document.querySelector('.imagen-msg');
    mensajeGato.textContent = 'No me toques!';
}