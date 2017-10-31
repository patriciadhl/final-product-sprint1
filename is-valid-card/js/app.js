var isValidCard=function(numCard){

if(numCard ===""){
  return alert('debes introducir numero de tarjeta');
}else{
var arr=[];

for(a=0; a<numCard.length;a++){
 arr.push(parseInt(numCard.charAt(a))); //Creando arreglo con los datos de entrada
}

var newArr=arr.reverse(); //Revirtiendo valores del arreglo
var sum=0;  //inicializando variable para realizar suma de los números

for(i=0;i<newArr.length;i++){  //Recorrido de arreglo

  if(i % 2 !==0){   //calculando módulo de dos para saber si la posición es par o impar
    var numEvenPos=newArr[i] * 2; //multiplicando por 2 los números en posición par
    var numString=numEvenPos.toString(); //convirtiendo a string resultado de la multipilcación

    for(j=0;j<numString.length;j++){ //recorriendo numString
     var strinInt=parseInt(numString.charAt(j)); //convirtiendo a entero para realizar la suma de los numeros obtenidos
     sum=sum+strinInt; //suma de los numero obtenidos en posición par
    }
  }else{
    sum=sum+newArr[i]; //suma de los numero obtenidos en posición par mas números en posición impar
  }
}

if (sum % 10 === 0){  //verificando si la tarjeta es válida o invalida
  return document.write('Tarjeta válida');
}else{
  return document.write('Tarjeta invalida');
}
}
}


var numCard=prompt("INGRESA EL NUMERO DE TARJETA A VALIDAR");
isValidCard(numCard);
