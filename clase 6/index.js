let VectorDatoPersona=[];
const ObjetoDatosPersonas=(PrimerNOmbre,Apellido,Edad,Estatus, DNI)=>{
    let Persona ={
PrimerNOmbre,
Apellido,
Edad,
Estatus,
DNI

    }
   
VectorDatoPersona.push(Persona);

}

const BotonAgregarPersona= ()=>{

    let DNI = document.getElementById("DNI").value;
    let PrimerNOmbre = document.getElementById("PrimerNOmbre").value;
    let Apellido = document.querySelector("#Apellido").value;
    let Edad = document.getElementById("Edad").value;
    let Estatus = document.getElementById("Estatus").value;
ObjetoDatosPersonas( PrimerNOmbre,Apellido,Edad,Estatus,DNI );

//console.table(VectorDatoPersona);
document.getElementById("Persona").reset();
document.getElementById("DNI").focus();
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'REgidtro exitosos',
    showConfirmButton: false,
    timer: 1500
  })
listaDatosPersonas(VectorDatoPersona);
//console.table(VectorDatoPersona);
}

const listaDatosPersonas= (arrayDatoPersona)=>{
    let lista= '' ;
    if(arrayDatoPersona.length > 0){
    arrayDatoPersona.forEach((Persona,posicion)=> {
        let Estatus=retornodelEstatus(Persona.Estatus);
        lista += `<tr>
                            <td>${Persona.DNI}</td>
                            <td>${Persona.PrimerNOmbre} ${Persona.Apellido}</td>
                            <td>${Persona.Edad}</td>
                            <td>${Estatus}</td>
                            <td><button type="button" class="btn btn-danger" onclick="BorrarUnaPersonaLista(${posicion})">ELiminar</button></td>
                        </tr>`;
      
    });
}
else{
    lista = `<tr>
    <td class="text-center" colspan="4"> No se encuentran coincidencia</td>
</tr>`;
}
    document.getElementById("listaPersona").innerHTML = lista;

}

const retornodelEstatus=(Estatus)=>{
    switch (Estatus) {
        case "1": return "Activo";
            break;
        case "2": return "Inactivo";
            break;
         case "3": return "En espera";
      
    }

}

const busquedaenTabla= ()=>{
let Buscar= document.getElementById("Buscar").value;
Buscar = Buscar.trim().toLowerCase();
console.log(Buscar);
let FiltroVector=ressultadodeBusqueda(Buscar);
listaDatosPersonas(FiltroVector);
}
const ressultadodeBusqueda=(Buscar)=>{
    return VectorDatoPersona.filter((Persona)=>{
        return Persona.PrimerNOmbre.toLowerCase().includes(Buscar)||Persona.Apellido.toLowerCase().includes(Buscar);
    })


}
const BorrarUnaPersonaLista=(posicion)=>{
    console.log(posicion),
    Swal.fire({
       
        title: 'Estas SEguro?',
        text: "SE elimina LA ELECCION!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI, borrar!'
      }).then((result) => {
        if (result.isConfirmed) {
            VectorDatoPersona.splice(posicion,1);
            listaDatosPersonas(VectorDatoPersona);
          Swal.fire(
            'DEliminado!',
            'el ARchivo fue eliminado.',
            'success'
          )
        }
      })
}