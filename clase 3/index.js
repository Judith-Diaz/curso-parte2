
const prompt = require("prompt-sync")({ sigint: true });
/*  tarea propuesta
 -->  REALIZAR LA TABLA DE MULTIPLICAR DADO UN VALOR  ingresado por el ususario
ejemplo 
     8 X 1 = 8
     8 X 2 = 1
     8 X 10 = 80 
*/


let numdelaTabla = prompt("cual es la tabla que decea representar, ingrese el nmumero: ");

for(let i=0 ;i<=10 ; i++ ){

    console.log(numdelaTabla +  " X "  + i + " = " + (numdelaTabla * i))
}
console.log("********************************************************")

/*-->  REALIZAR LA TABLA DE DIVIDIR DADO UN VALOR POR EL  que el usuario ingrese
ejemplo 
 8 / 8 = 1
 16 / 8 = 2
 24 / 8 = 3
 80 / 8 = 10 */

 let numdelaTablaDividir = prompt("cual es la tabla de divicion que decea representar, ingrese el numero: ");
for( let i= 1; i<=10; i++){
    console.log((numdelaTablaDividir*i) , " / " , numdelaTablaDividir ," = ",((numdelaTablaDividir*i)/(numdelaTablaDividir))); //concateno como la coma
}
