const prompt = require("prompt-sync")({sinint:true});

let DatoPersona=[];

const DatosDePerona=(PrimerNombre,SegundoNombre,edad,status,insercion=true)=>{
    //ese  insertar=true, es como que siempre es verdadero , ecepto que digan que sea falso
let Persona={
    PrimerNombre,
    SegundoNombre,
    edad,
    status
}
    if(insercion == true){
        DatoPersona.push(Persona);

    }
    else{
        DatoPersona.unshift(Persona);
    }
 
}


DatosDePerona("Judith","Judith",20,1);
DatosDePerona("Braian","Baez",30,1);
DatosDePerona("Jesica","Diaz",34,1);
DatosDePerona("Vanesa","Diaz",39,1,false);//aca pongo false, ose cambio mi condicion
console.table(DatosDePerona);
console.log(DatosDePerona);
console.log("==================");
console.log(DatoPersona);
console.table(DatoPersona);
console.log("==================");


for(let i=0; i<=3 ;i++){
    console.log("========insercion al objeto==========");

   let PrimerNombre= prompt("ingrese primer nombre = ");
   let SegundoNombre= prompt("ingrese segundo nombre = ");
    let edad= prompt("ingrese edad = ");
  let status = prompt("ingrese status = ");
  DatosDePerona(PrimerNombre,SegundoNombre,edad,status);//hago el lalmado a la funcion para que me pase todos estos parametros
}
console.log(DatoPersona);
console.table(DatoPersona);
//un poco de ayuda en clase