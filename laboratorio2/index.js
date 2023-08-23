
const prompt = require("prompt-sync")({ sigint: true  })

const persona0={
    firstName:"Judith",
    lastName:"Carolina",
    birthday:33,
    status:true,
};
const persona1={
    firstName:"julian",
    lastName:"Francisco",
    birthday:70,
    status:true,
};
const persona2={
    firstName:"Braian",
    lastName:"Manuel",
    birthday:33,
    status:true,
};
const persona3={
    firstName:"Daiana",
    lastName:"Belen",
    birthday:33,
    status:true,
};
const persona4={
    firstName:"Jesica",
    lastName:"Paola",
    birthday:36,
    status:true,
};
let  ArrayObjeto = [];
 console.log(ArrayObjeto.length);
 console.log(ArrayObjeto);


 ArrayObjeto.unshift(persona0,persona1, persona2,persona3,persona4);
 console.log(ArrayObjeto.length);
 console.log("======= como es mi vector con adentro los objetos=========");
 console.log(ArrayObjeto);
 console.log("=========veo que tiene la posicion V[0]=======");
 console.log(ArrayObjeto[0]);
 console.log("=========veo que tiene la posicion V[1]=======");
 console.log(ArrayObjeto[1]);
 console.log("=========veo que tiene la posicion V[2]=======");
 console.log(ArrayObjeto[2]);
 console.log("=========veo que tiene la posicion V[3]=======");
 console.log(ArrayObjeto[3]);
 console.log("=========veo que tiene la posicion V[4]=======");
 console.log(ArrayObjeto[4]);
