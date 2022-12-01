const inputTextarea = document.querySelector(".input-textarea");
const outputTextarea = document.querySelector(".output-textarea");
const outputDiv = document.querySelector(".output-div");
const inputDiv = document.querySelector(".input-div");
const outputDivTextarea = document.querySelector(".output-div-textarea");

function mostrarTextArea() {
    inputDiv.style.display = "none";
    inputTextarea.style.display = "block";
}

function encrypt(string) {
    let letras = ["a", "e", "i", "o", "u"];
    // let letras = ["e","i","a","o","u"];
    let toEncrypt = ["ai", "enter", "imes", "ober", "ufat"];
    // let toEncrypt = ["enter","imes","ai","ober","ufat"];
    string = string.toLowerCase();
    let stringToEncrypt = string.split("");
    let stringNueva = "";
    for (let j = 0; j < stringToEncrypt.length; j++) {
        for (let index = 0; index < letras.length; index++) {
            if ((stringToEncrypt[j] == letras[index])) {
                stringToEncrypt[j] = toEncrypt[index];
            }
        }
    }
    return stringToEncrypt.toString().replaceAll(",","");
}

function btnEncrypt() {
    const textEncrypt = encrypt(inputTextarea.value);
    outputDiv.style.display = "none";
    outputDivTextarea.style.display = "block";
    outputTextarea.value = textEncrypt;
}

function desencrypt(stringDesencrypt) {
    let letras = ["a", "e", "i", "o", "u"];
    // let letras = ["e","i","a","o","u"];
    let toEncrypt = ["ai", "enter", "imes", "ober", "ufat"];
    // let toEncrypt = ["enter","imes","ai","ober","ufat"];
    stringDesencrypt = stringDesencrypt.toLowerCase();

    for (let index = 0; index < toEncrypt.length; index++) {
        if (stringDesencrypt.includes(toEncrypt[index])) {
            stringDesencrypt = stringDesencrypt.replaceAll(
                toEncrypt[index],
                letras[index]
            );
        }
    }
    return stringDesencrypt;
}

function btnDesencrypt() {
    const textEncrypt = desencrypt(inputTextarea.value);
    outputDiv.style.display = "none";
    outputDivTextarea.style.display = "block";
    outputTextarea.value = textEncrypt;
}


function copy(){
    let texto = document.querySelector(".output-textarea");
    texto.select();
    texto.setSelectionRange(0,99999);
    document.execCommand('copy');
}