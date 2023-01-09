/* import elError, { dataRealModulo, l_datos} from "./data.js"; */
/* import { l_datos as x } from "./data.js"; */
/* import funciones, { dataRealModulo, l_datos}from "./data.js"; */
import funciones, * as todo from "./data.js";
import { callService } from "./callService.js";
import { carro, crearInput} from "./object.js";
'use strict';
/* const miFuncionAnonima=(($)=> {
    
    const mensaje=()=>{
        console.log('Mensaje');
        }
    const pintarDiv=()=>{
        $('#prueba').html('<strong>Hello<strong>');
    }    
    return {
            cargar: mensaje,
            pintar:pintarDiv 
        };
})(jQuery);  */

funciones.error('Eder');
window.localStorage.setItem("titulo", "Seteando valor en Storage");
let l_globalDataRecieved = {
    "code": "000",
    "description": "SUCCESS",
    "infoTarea": {
        "tipotrabajo": "ORDENES_SF",
        "escenario": "0",
        "estado": "DESPACHADA",
        "foliopisa": "043856287",
        "modalidad": " ",
        "mensaje": "EXITO",
        "folioplex": "45505",
        "tipotarea": "AMSMPBG"
    }
}
localStorage.setItem("l_globalDataRecieved", JSON.stringify(l_globalDataRecieved));
localStorage.setItem("l_globalDataRecieved2", l_globalDataRecieved);
localStorage.removeItem("l_globalDataRecieved");
localStorage.removeItem("l_globalDataRecieved2");
console.log('localStorage::::'+localStorage.getItem("titulo"));
localStorage.clear();
$(() => {
    //1a Forma de autoinvocacion
    const mensaje = (() => {
        console.groupCollapsed('Hola!!' + JSON.stringify(l_globalDataRecieved));
    })();
    //Fin 1a Forma de autoinvocacion

    const click = $("#pulsame").on("click", () => {
        $('#prueba').html('<strong>Hello2<strong>');
        
        l_globalDataRecieved.infoTarea.mensaje = "Actualizado";
        todo.dataRealModulo(l_globalDataRecieved);
        console.log('datosTranformados::::' + JSON.stringify(todo.l_datos));
        console.log('Description::::' + todo.l_datos.infoTarea.mensaje);
        $.ajax({
            type: 'GET',
            url: 'https://98ddda54-ba08-4780-b1cc-cfebf3d6d00f.mock.pstmn.io/apiDespacho',
            dataType: 'json',
            beforeSend: () => {
                console.log('EjecutandoBeforeSend::::');
                $('#datos').html('<center> <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></center>');
            },
            success:(info)=>{
                console.log('info::::'+JSON.stringify(info));
            },
            error:(jqXHR,estado,error)=>{
                /*error: timeout,
                         error,
                         abort,
                         parsererror*/
                console.log('errorError::::'+error);
                console.log('estadoError::::'+estado);
                console.log('jqXHRError::::'+jqXHR);
            },
            complete:(jqXHR,estado)=>{
                /*estado: success,
                         notmodified,
                         timeout,
                         error,
                         abort,
                         parsererror*/
                console.log('estadoComplete::::'+estado);
                console.log('jqXHRComplete::::'+jqXHR);
            },
            statusCode: {
                200: (data, textStatus, jqXHR) => {
                    console.log('statusCode200::::' + JSON.stringify(jqXHR.status));
                },
            },
            timeout:10000
        }).done((data, textStatus, jqXHR) => {
            todo.dataRealModulo(data);
            console.log('l_datosDone:::' + JSON.stringify(todo.l_datos));
            /* console.log('l_globalDataRecieved:::' + JSON.stringify(l_globalDataRecieved));
            console.log('dataAntes:::' + data);
            console.log('textStatus:::' + textStatus);
            console.log('jqXHR:::' + jqXHR);
            console.log('jqXHRstatus:::' + jqXHR.readyState);
            console.log('jqXHR:::' + JSON.stringify(jqXHR)); */
            funciones.retrazar(2000) //Solo se usa para ver el spinner más tiempo en el ejemplo
            console.log('dataDespues:::' + JSON.stringify(data));
            //console.
        }
        ).then((data, textStatus, jqXHR)=>{ 

            }, 
            (jqXHR, textStatus, errorThrown)=>{ 

            }
        )
        .fail((jqXHR, textStatus, errorThrown) => {
                console.error("Fail::::"+ jqXHR);
            }//data|jqXHR, textStatus, jqXHR|errorThrown
        ).always((data, textStatus, errorThrown) => {
                console.info("Ocultar Spinner::::");
                $('#datos').html("");
        })
    })
    //2a Forma de autoinvocacion de funcion
    $.fn.myfunction = function () {
        console.log('Llamado Autoinvocacion');
        return this;
    };

    $('my_div').myfunction();
    //Fin 2a Forma 

    $("#btnTestajax").on("click", () => {
        callService()
        .then((data)=>{
            console.log('DataPromiseThen'+data);
        })
        .catch((error)=>{
            console.log('ErrorPromise'+ error);
        })
    })

    /* const sleep = (milisegundos) => {
        let comienzo = new Date().getTime();
        while (true) {
            if ((new Date().getTime() - comienzo) > milisegundos)
                break;
        }
    } */

   
})

$("#btnEncender").on("click", function(){
    carro.arrancar();
})

$("#btnApagar").on("click", function(){
    carro.apagar();
})

crearInput();