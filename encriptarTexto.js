let imagen = document.getElementById("munieco");
let textosDerecha = document.getElementById("mensajesInicio");
let areaTextDerecha = document.getElementById("textoFinal");


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
    
}
function descartarAcentosMayusculas(parrafo1){
    const regex = /[A-ZÁÉÍÓÚáéíóú]/;
    if (regex.test(parrafo1)) {
        document.getElementById("textoFinal").innerText = "Lo siento, puede que hayan mayúsculas o acentos.";
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
    var areaEncriptar = document.getElementById('areaEncriptar').value;
    if(areaEncriptar === ""){
        document.getElementById("textoFinal").innerText = "No hay texto por encriptar.";
        elimiarDerecha();
    } else{
        let textInicial = document.getElementById("areaEncriptar").value;
        let textEncriptado = reemplazarVocales(textInicial);
        document.getElementById("textoFinal").innerText = textEncriptado;
        
        elimiarDerecha();
        descartarAcentosMayusculas(textInicial);
        mostrarBoton();
    }
}

function reemplazarFraces(parrafo2) {
    const reemplazosInversos = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    for (var clave in reemplazosInversos) {
        var valor = reemplazosInversos[clave];
        parrafo2 = parrafo2.replaceAll(clave, valor);
    }

    return parrafo2;
}
function desenpripText(){
    var areaEncriptar = document.getElementById('areaEncriptar').value;
    if(areaEncriptar === ""){
        document.getElementById("textoFinal").innerText = "No hay texto por desencriptar.";
        elimiarDerecha();
    } else{
        let textInicial = document.getElementById("areaEncriptar").value;

    let textDesencriptado = reemplazarFraces(textInicial);
document.getElementById("textoFinal").innerText = textDesencriptado;

elimiarDerecha();
descartarAcentosMayusculas(textInicial);
mostrarBoton();
    }
    
}
function mostrarBoton() {
    var botonCopiar = document.getElementById("botonCopiar");
    botonCopiar.style.display = 'block'; 
}

function copiarTexto() {
    var textoCopiado = document.getElementById("textoFinal");
    var rango = document.createRange();
    rango.selectNodeContents(textoCopiado);
    var seleccion = window.getSelection();
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
    try {
        document.execCommand("copy");
        console.log("Texto copiado al portapapeles.");
    } catch (err) {
        alert("Hubo un problema al copiar el texto.");
    }
    seleccion.removeAllRanges();
}