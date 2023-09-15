
/** evaluar que el usuario no eingrese inputs vacios
 * avaluar que el dni no sea repetido
 * verificar la funcion de eliminado , el la parte del filtrado
 **/
let VectorDatoPersona = [];

let BotonAgregar = document.getElementById("BotonAgregar");
let BotonAccionDeEditar = document.getElementById("BotonAccionDeEditar");

const ObjetoDatosPersonas = (PrimerNOmbre, Apellido, Edad, Estatus, DNI) => {
    let Persona = {
        PrimerNOmbre,
        Apellido,
        Edad,
        Estatus,
        DNI

    }

    VectorDatoPersona.push(Persona);

}

const BotonAgregarPersona = () => {

    let DNI = document.getElementById("DNI").value;
    let PrimerNOmbre = document.getElementById("PrimerNOmbre").value;
    let Apellido = document.querySelector("#Apellido").value;
    let Edad = document.getElementById("Edad").value;
    let Estatus = document.getElementById("Estatus").value;

    if (validarLaPlanilla(DNI) && validarLaPlanilla(PrimerNOmbre) && validarLaPlanilla(Apellido)
        && validarLaPlanilla(Edad) && validarLaPlanilla(Estatus)) {
        if (RepiteElDNI(DNI) == -1) {
            ObjetoDatosPersonas(PrimerNOmbre, Apellido, Edad, Estatus, DNI);
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
            //console.table(VectorDatoPersona);Este para ver si me esta tomando las cosas como yoquiero , me las va a mostrar en la consola
        }
        else {

            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Ese Numero de DNI ya fue registrado! VUELVA A AINTENTARLO',
                showConfirmButton: false,
                timer: 1500

            })
        }
    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Ingrese TOdo los campos requeridos',
            showConfirmButton: false,
            timer: 1500
        })

    }
}
const listaDatosPersonas = (arrayDatoPersona) => {
    let lista = '';
    if (arrayDatoPersona.length > 0) {
        arrayDatoPersona.forEach((Persona, posicion) => {
            let Estatus = retornodelEstatus(Persona.Estatus);
            lista += `<tr>
                            <td>${Persona.DNI}</td>
                            <td>${Persona.PrimerNOmbre} ${Persona.Apellido}</td>
                            <td>${Persona.Edad}</td>
                            <td>${Estatus}</td>
                            <td><button type="button" class="btn btn-primary" onclick="EditarFormualrio(${Persona.DNI})">Editar</button></td>
                            <td><button type="button" class="btn btn-danger" onclick="BorrarUnaPersonaLista(${Persona.DNI})">ELiminar</button></td>
                        </tr>`;

        });
    }
    else {
        lista = `<tr>
    <td class="text-center" colspan="4"> No se encuentran coincidencia</td>
</tr>`;
    }
    document.getElementById("listaPersona").innerHTML = lista;

}

const retornodelEstatus = (Estatus) => {
    switch (Estatus) {
        case "1": return "Activo";
            break;
        case "2": return "Inactivo";
            break;
        case "3": return "En espera";

    }

}

const busquedaenTabla = () => {
    let Buscar = document.getElementById("Buscar").value;
    Buscar = Buscar.trim().toLowerCase();
    console.log(Buscar);
    let FiltroVector = ressultadodeBusqueda(Buscar);
    listaDatosPersonas(FiltroVector);
}
const ressultadodeBusqueda = (Buscar) => {
    return VectorDatoPersona.filter((Persona) => {
        return Persona.PrimerNOmbre.toLowerCase().includes(Buscar) || Persona.Apellido.toLowerCase().includes(Buscar);
    })


}
const BorrarUnaPersonaLista = (DNI) => {
    console.log(DNI),
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
                let posicion = RepiteElDNI(DNI);
                VectorDatoPersona.splice(posicion, 1);
                busquedaenTabla();
                Swal.fire(
                    'DEliminado!',
                    'el ARchivo fue eliminado.',
                    'success'
                )
            }
        })
}
const validarLaPlanilla = (EvaluarVacio) => {
    if (EvaluarVacio.trim().length > 0) {
        console.log("avalor verdadero");
        return true;


    } else {
        console.log("valor falso");
        return false;

    }

}





const EditarFormualrio = (DNI) => {
    let posicion = RepiteElDNI(DNI);
    let Persona = VectorDatoPersona[posicion];
    console.log(Persona);


    document.getElementById("DNI").value = Persona.DNI;
    document.getElementById("PrimerNOmbre").value = Persona.PrimerNOmbre;
    document.querySelector("#Apellido").value = Persona.Apellido;
    document.getElementById("Edad").value = Persona.Edad;
    document.getElementById("Estatus").value = Persona.Estatus;
    document.getElementById("NumeroPosiconObjeto").value=posicion;
    AccionesDeLosBotones(1);//0-este representa que solo vamos a tener el boton agregar en esta ocacion

    //BotonAccionDeEditar.classList.remove('d-none');
    // BotonAgregar.classList.add('d-none');

}

const AccionesDeLosBotones = (visible) => {
    if (visible == 1) {//1 -solo para cuando sea iguala  a1, despues cualwuier otro numero, lo toma como falso
        BotonAccionDeEditar.classList.remove('d-none');
        BotonAgregar.classList.add('d-none');
    } else {
        BotonAccionDeEditar.classList.add('d-none');
        BotonAgregar.classList.remove('d-none');
        document.getElementById("Persona").reset();//3-cuando pongo cancelar , resetean todos los epacios del imput y se cansela todo operacion
    }
}


const modificacionDelVector=()=>{//4-copiamos todo nuestro campo , asi accedemos a el y generamos las modicicacioens necesarias
   let DNI = document.getElementById("DNI").value;
   let PrimerNOmbre = document.getElementById("PrimerNOmbre").value;
   let Apellido = document.querySelector("#Apellido").value;
   let Edad = document.getElementById("Edad").value;
   let Estatus = document.getElementById("Estatus").value;
let NumeroPosiconObjeto=document.getElementById("NumeroPosiconObjeto").value;

   if (validarLaPlanilla(DNI) && validarLaPlanilla(PrimerNOmbre) && validarLaPlanilla(Apellido)
       && validarLaPlanilla(Edad) && validarLaPlanilla(Estatus)) {//hasta aca esta todo igual, solo agrege en eel; 6- un index
      
        if (RepiteElDNI(DNI) == -1 || RepiteElDNI(DNI) == NumeroPosiconObjeto) {//7-con esto ya anda, digamso que si modifico y ay yn dni repetido me sale un cartel
             //para poder moficar las cosas necesito hacer esto, si no no lo toma, ademas modifica , reconoce si esta repetido el dno
             //si se modifica aparece el cartel y siq ueres cancelar cancela
            VectorDatoPersona[NumeroPosiconObjeto].PrimerNOmbre=PrimerNOmbre;
             VectorDatoPersona[NumeroPosiconObjeto].Apellido=Apellido;
             VectorDatoPersona[NumeroPosiconObjeto].DNI=DNI;
             VectorDatoPersona[NumeroPosiconObjeto].Edad=Edad;
             VectorDatoPersona[NumeroPosiconObjeto].Estatus=Estatus;


             listaDatosPersonas(VectorDatoPersona);
             AccionesDeLosBotones(2);
             Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'MODIFICACION exitosos',
                showConfirmButton: false,
                timer: 1500
            })


        } else {
            document.getElementById("DNI").focus();
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Ese Numero de DNI ya fue registrado! VUELVA A AINTENTARLO',
                showConfirmButton: false,
                timer: 1500

            })
        }

    }

    }





const RepiteElDNI = (DNI) => {
    let posicion = VectorDatoPersona.findIndex((Persona) => {
        return Persona.DNI == DNI;
    });
    return posicion;
}