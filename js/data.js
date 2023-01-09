export {dataRealModulo,l_datos,sleep}

let l_datos = {};

let dataRealModulo=(data)=> {
    //console.log('dataRealModulo::::'+JSON.stringify(data));

    l_datos = {
        code:data.code,
        description:data.description,
        infoTarea: {
            tipoTrabajo: data.infoTarea.tipotrabajo,
            escenario: data.infoTarea.escenario,
            estado: data.infoTarea.estado,
            folioPisa: data.infoTarea.foliopisa ,
            modalidad: data.infoTarea.modalidad,
            mensaje: data.infoTarea.mensaje,
            folioPlex: data.infoTarea.folioplex,
            tipoTarea: data.infoTarea.tipotarea
        }
    }
    //console.log('l_datosDataRealModulo::::'+JSON.stringify(l_datos));
}

const sleep = (milisegundos) => {
    let comienzo = new Date().getTime();
    while (true) {
        if ((new Date().getTime() - comienzo) > milisegundos)
            break;
    }
}
/* export default (nombre)=>{
    console.log(`nombre ${nombre}`);
} */

const elError=(nombre)=>{
    console.log(`Error nombre ${nombre}`);
}

export default {
    error: elError,
    retrazar: sleep
}