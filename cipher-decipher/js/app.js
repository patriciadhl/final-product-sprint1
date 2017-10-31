var cipher=function(string){
  if(string ===""){
    return alert('Debes introducir un mensaje');
  }else{

var key=33;
var textCipher="";

for(i=0;i<string.length;i++){
  var codeAscii=string.charCodeAt(i);  //obteniendo el código ASCII de la letra
  var newCode= ((codeAscii-65+key)%26)+65; //aplicando formula de cifrado cesar
  var result=String.fromCharCode(newCode); //obteniendo la letra correspondiente al código
  textCipher=textCipher+result; // construyendo mensaje añadiendo una a una las letras
}
return document.write('Texto cifrado : '+ textCipher); //Retornando el texto cifrado
}
}

var decipher=function(string){
  if(string ===""){
    return alert('Debes introducir un mensaje');
  }else{
var key=33;
var textDecipher="";

for(i=0;i<string.length;i++){
  var codeAscii=string.charCodeAt(i); //obteniendo el código ASCII de la letra
  var newCode= ((codeAscii+65-key)%26)+65; //aplicando formula de cifrado cesar
  var result=String.fromCharCode(newCode); //obteniendo la letra correspondiente al código
  textDecipher=textDecipher+result; // construyendo mensaje añadiendo una a una las letras
}

}
return document.write('  Texto descifrado : '+ textDecipher); //retornando el texto descifrado
}


var string=prompt("INGRESA TEXTO A CIFRAR");
console.log(cipher(string));


var string=prompt("INGRESA TEXTO A DESCIFRAR");
console.log(decipher(string));
