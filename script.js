//Funcion para encriptar
function encriptar() {
  // Convierte el la entrada en mayuscula
  var texto = document.getElementById("entradaTexto").value.toLowerCase();
  
  // igm es para afectar a mayusculas, minusculas, toda la linea y varias lineas.
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");  
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    document.getElementById("imagenPagina").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("entradaTexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
}

//Funcion para desencriptar
function desencriptar() {
  var texto = document.getElementById("entradaTexto").value.toLowerCase();
  var txtcifrado = texto.replace(/enter/igm,"e");
  var txtcifrado = txtcifrado.replace(/imes/igm,"i");
  var txtcifrado = txtcifrado.replace(/ai/igm,"a");
  var txtcifrado = txtcifrado.replace(/ober/igm,"o");
  var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
  document.getElementById("imagenPagina").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("texto2").innerHTML = txtcifrado;
  document.getElementById("entradaTexto").innerHTML = " ";
  document.getElementById("copiar").style.display = "inherit";
}

function copia() {
  var contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand('copy');
  alert("El texto ha sido copiado.");
}

function limpiar() {
  document.getElementById("entradaTexto").value="";
}