//Funcion para encriptar
function encriptar() {
  // Convierte la entrada en mayuscula
  var texto = document.getElementById("textIn").value.toLowerCase();

  //valida el texto introducido
  var input = document.getElementById("textIn").value;
  if(!/^[a-zñ]+$/m.test(input)) {
    alert("No se permiten caracteres especiales. ");
    return false;
  }

  if(input){
    // igm es para afectar a mayusculas, minusculas, toda la linea y varias lineas.
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");  
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    document.getElementById("imgLeftside").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("textTwo").style.display = "none";
    document.getElementById("btnCopy").style.display = "show";
    document.getElementById("textEncrypted").display = "show";
    document.getElementById("textEncrypted").innerHTML = txtcifrado;
    document.getElementById("textIn").innerHTML = " ";
    document.getElementById("btnCopy").style.display = "inherit";
  }
}


//Funcion para desencriptar
function desencriptar() {
  // Convierte la entrada en mayuscula
  var texto = document.getElementById("textIn").value.toLowerCase();

  //valida el texto introducido
  var entrada = document.getElementById("textIn").value;
  if(!/^[a-zñ-ú]+$/m.test(entrada)) {
    alert("No se permiten caracteres especiales. ");
    return false;
  }

  if(entrada){
    // igm es para afectar a mayusculas, minusculas, toda la linea y varias lineas.
    var texto = document.getElementById("textIn").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
    document.getElementById("imgLeftside").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("textTwo").style.display = "none";
    document.getElementById("btnCopy").style.display = "show";
    document.getElementById("textEncrypted").display = "show";
    document.getElementById("textEncrypted").innerHTML = txtcifrado;
    document.getElementById("textIn").innerHTML = " ";
    document.getElementById("btnCopy").style.display = "inherit";
  }
}


function copia() {
  var contenido = document.querySelector("#textEncrypted");
  contenido.select();
  document.execCommand('Copy');
  alert("El texto ha sido copiado.");
}


function limpiar() {
  document.getElementById("textIn").value="";
}