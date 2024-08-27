

function reemplazarVocales(parrafo1) {
    return parrafo1.replace(/[aeiou]/g, 
        function(vocal) {
             switch(vocal) {
            case 'a': return 'ai';
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'o': return 'ober';
            case 'u': return 'ufat';
            default: return vocal;
            }
         }
    );
    const regex = /[A-ZÁÉÍÓÚáéíóú]/;
    if (regex.test(parrafo1)) {
        return("Lo siento, puede que hayan MAYÚSCULAS o acentos.");
    } else {
        return texto.replace(/a/g, 'agua');
    }
}
function elimiarDerecha(){
    var imagenInicial = document.getElementById("munieco");
    var textosIniciales = document.getElementById("mensajesInicio");

    if(imagenInicial){
        imagenInicial.remove();
        textosIniciales.remove();
    }
}
function encripText(){
    let textInicial = document.getElementById("areaEncriptar").value;

    let textEncriptado = reemplazarVocales(textInicial);

document.getElementById("textoFinal").innerText = textEncriptado;
    
elimiarDerecha;
}

