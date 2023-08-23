const prompt = require("prompt-sync")({ sigint: true });
/*reaizar la tabla de multiplicar y dividir , 
*con un numero que ongrese el ususario*/


const TablaMultiplicar = (a)=>{
    for( let i=1; i<=10; i++){
        console.log(`${a} X ${i} = ${a*i}`)
    }

}
tablaDividir=(a)=>{
    let i=1;
    while(i<=10){
        console.log(`${a*i} / ${a} = ${(a*i)/a}`)
        i++
    }
}
let numero = prompt("ingrese el nmumero, del que quiera la tabla :");
let tabla = prompt("que tabla decea 1 -multiplicar, 2 dividir :");
switch(tabla){
    case '1':TablaMultiplicar(parseInt(numero));break
    case '2':tablaDividir(parseInt(numero));break
}

