const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const btnHablar = document.querySelector("#escuchar");


const tarjeta1 = document.querySelector(".tarjetan1");

function encriptar() {
    if (!validarMensaje()) return;
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("a"," 27 ")
    .replaceAll("b"," 26 ")
    .replaceAll("c"," 25 ")
    .replaceAll("d"," 24 ")
    .replaceAll("e"," 23")
    .replaceAll("f"," 22 ")
    .replaceAll("g"," 21 ")
    .replaceAll("h"," 20 ")
    .replaceAll("i"," 19 ")
    .replaceAll("j"," 18 ")
    .replaceAll("k"," 17 ")
    .replaceAll("l"," 16 ")
    .replaceAll("m"," 15 ")
    .replaceAll("n"," 14 ")
    .replaceAll("ñ"," 13 ")
    .replaceAll("o"," 12 ")
    .replaceAll("p"," 11 ")
    .replaceAll("q"," 10 ")
    .replaceAll("r"," 9 ")
    .replaceAll("s"," 8 ")
    .replaceAll("t"," 7 ")
    .replaceAll("u"," 6 ")
    .replaceAll("v"," 5 ")
    .replaceAll("w"," 4 ")
    .replaceAll("x"," 3 ")
    .replaceAll("y"," 2 ")
    .replaceAll("z"," 1 ")
    .replaceAll("-"," 0 ");

    document.getElementById("muñecoo").style.display = "none";
    document.getElementById("sintexto").style.display = "none";
    
    inputResultado.value = mensajeEncriptado;
    
}

function desencriptar() {
    if (!validarMensaje()) return;
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("27","a")
    .replaceAll("26","b")
    .replaceAll("25","c")
    .replaceAll("24","d")
    .replaceAll("23"," e")
    .replaceAll("22"," f ")
    .replaceAll("21"," g ")
    .replaceAll("20"," h ")
    .replaceAll("19"," i ")
    .replaceAll("18"," j ")
    .replaceAll("17"," k ")
    .replaceAll("16"," l ")
    .replaceAll("15"," m ")
    .replaceAll("14"," n ")
    .replaceAll("13"," ñ ")
    .replaceAll("12"," o ")
    .replaceAll("11"," p ")
    .replaceAll("10"," q ")
    .replaceAll("9"," r ")
    .replaceAll("8"," s ")
    .replaceAll("7"," t ")
    .replaceAll("6"," u ")
    .replaceAll("5"," v ")
    .replaceAll("4"," w ")
    .replaceAll("3"," x ")
    .replaceAll("2"," y ")
    .replaceAll("1"," z ")
    .replaceAll("0"," - ");
   
    document.getElementById("muñecoo").style.display ="none";
    document.getElementById("sintexto").style.display = "none";
    
    inputResultado.value = mensaje;
}

function copiar() {
  var mensajeEncriptado = inputResultado.value;
  navigator.clipboard.writeText(mensajeEncriptado);
  inputMensaje.value= "";
  inputMensaje.focus();
  alert("El mensaje ha sido copiado.");
}

function escuchar() {
  var mensajeEncriptado = inputResultado.value;
  let msg = new SpeechSynthesisUtterance();
  msg.text = mensajeEncriptado;
  msg.lang = "es-Es";
  window.speechSynthesis.speak(msg);
}

btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;

btnHablar.onclick = escuchar;