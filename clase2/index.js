
const prompt = require("prompt-sync")({ sigint: true  })

// -->  el usiario debe ingresar e numero CALCULAR EL NUMERO MAYOR, Y MENOR DE TRES VARIABLES  IF - ELSE ? : 


let numUno = prompt("Ingrese un numero: ");
let numDos = prompt("Ingrese un numero: ");
let numTres= prompt("Ingrese un numero: ");
let mayor="";
let menor="";

if((numUno==numDos)&&(numDos==numTres)){
console.log("todos los numeros son iguales")
}else{ if(numUno> numDos){
    mayor=numUno;   
    menor=numDos;
}else {
    mayor=numDos;
    menor=numUno;
}
 if((mayor> numTres)&&(menor<numTres)){
    mayor=mayor;
    menor=menor;
   
}else if(mayor<numTres){
     mayor=numTres;
}else if(menor>numTres){
    menor= numTres;
}
 console.log("el mayor es :", mayor)
 console.log("el menor es :", menor)

}
console.log("**************************************************************")

    

// -->  CALCULAR SI UN NUMERO ES PAR O IMPAR
let numero = prompt("Ingrese un numero para ver si es par o impar: ");
if(numero%2==0){
    console.log(numero, " : Es numero par")
}else
console.log(numero, " : El mumero es Impar")
console.log("**************************************************************")


// DADO DOS VARIBALES REALIZAR LAS OPERACIONES BASICAS (+,-,*,/), MEDIANTE CASOS DE USOS 



let varUno = prompt("Ingrese el primero numero: ");
let varDos = prompt("Ingrese el segundo numero: ");
varUno = parseInt(varUno);//parceo porque si no me lo toma como un strem, u adcemas la suma lo ponia ocmo una concatenacion
varDos = parseInt(varDos);

let resultado;
let Operacion = prompt("Ingrese la operacion que decea realizar   1_suma   2_resta  3_multiplicacion  4_divicion");
if ((Operacion==4)&& (varDos==0)){
    console.log("No se puede dividir por 0")
}else{
switch(Operacion){
case '1':
resultado = parseInt(varUno + varDos);
break;
case '2':
resultado =varUno - varDos;
break;
case '3':
resultado =varUno * varDos;
break;
case '4':
resultado =varUno / varDos;
break;

}
//console.log(typeof resultado) lo agrage solo para ver proqeu no me dava el resultado
console.log("El resultado de la operacion  es : ",parseInt(resultado))
}
console.log("**************************************************************")