/**
 * 1- MOSTRAR EL PROMEDIO DE LAS EDADES
 * 2-FILTARRA POR NOMBRE  O EPELLIDO UN VALOR INGRTESADO POR 
 * EL USUARIO DONDE COINCIDA CON LA LETRA O PALABRA
 */

const prompt = require("prompt-sync")({sinint:true})

let VectorDatoPersona=[];
const ObjetoDatosPersonas=(PrimerNOmbre,Apellido,Edad,Status, Insertar=true)=>{
    let Persona ={
PrimerNOmbre,
Apellido,
Edad,
Status

    }
    if(Insertar==true){
VectorDatoPersona.push(Persona);

}
VectorDatoPersona.sort((a,b)=>{
    return a.Edad -b.Edad;
})
}

ObjetoDatosPersonas("judirh","Diaz",33,1);
ObjetoDatosPersonas("julian","Diaz",36,1);
ObjetoDatosPersonas("jesica","Diaz",37,1);
ObjetoDatosPersonas("vanesa","Heredia",43,1);
ObjetoDatosPersonas("nelly","Candia",70,1);
ObjetoDatosPersonas("Sergio","Heredia",45,1);
ObjetoDatosPersonas("Braian ","Basez",44,1);

ObjetoDatosPersonas("Julian","dellArciprete",35,1);
ObjetoDatosPersonas("Silvia","Sosa",87,1);
ObjetoDatosPersonas("Raul","Gauna",76,1);
ObjetoDatosPersonas("Gabriel","Ledesma",50,1);
ObjetoDatosPersonas("Karina","Ledesma",53,1);
ObjetoDatosPersonas("Anabella","Carrique",46,1);
ObjetoDatosPersonas("Gisela","Gosas",46,1);
ObjetoDatosPersonas("Mariana","Santucho",69,1);
ObjetoDatosPersonas("Milagros","Mastrulli",25,1);
ObjetoDatosPersonas("Evelina","Chaves",34,1);
console.table(VectorDatoPersona);
/**
 * PUNTO 1:
 * * 1- MOSTRAR EL PROMEDIO DE LAS EDADES

 */
let suma=0;
VectorDatoPersona.forEach((persona,posicion)=>{

    suma= suma+ persona.Edad;
   
})
console.log("Punto 1")
console.log("LA cantidad total de personas son :" ,VectorDatoPersona.length);
let promedio= suma/VectorDatoPersona.length;

console.log("LA suma de todas las edades es : " +suma);
 console.log("El promedio es de las EDADES es  : " +promedio);
 /**
  *  * 2-FILTARRA POR NOMBRE  O EPELLIDO UN VALOR INGRTESADO POR 
 * EL USUARIO DONDE COINCIDA CON LA LETRA O PALABRA
  */

 let Buscador= prompt("Ingresa alguna palabra que decea buscar la coincidencia: ");
 let VectorBuscador= VectorDatoPersona.filter((persona)=>{

return (persona.PrimerNOmbre==Buscador || persona.Apellido==Buscador);


 });
 console.log("Punto 2 , sin usar un buen buscador");
 console.table(VectorBuscador);


 console.log("Punto 2, con un buscador eficiente ");

 let BUSCADORpro=prompt("Ingrese algun apalabra de que que decea buscar la coincidencia : ");

 let DaltosFIlterPerona=VectorDatoPersona.filter((elemento)=>{

    BUSCADORpro=BUSCADORpro.toLocaleLowerCase();
    let  primernombre=elemento.PrimerNOmbre.toLocaleLowerCase();
    let apellido=elemento.Apellido.toLocaleLowerCase();
 //   return (primernombre.includes(BUSCADORpro)|| apellido.includes(BUSCADORpro));
    return (primernombre.startsWith(BUSCADORpro)|| apellido.startsWith(BUSCADORpro));
 })
 
 console.table(DaltosFIlterPerona);