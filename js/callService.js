import {l_datos,dataRealModulo,sleep} from "./data.js"; 

export const callService=()=>{
    //console.log('l_datosCallService'+JSON.stringify(l_datos));
    console.log('saludar callService');
    console.log('localStorage::::'+localStorage.getItem("titulo"));
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: 'https://98ddda54-ba08-4780-b1cc-cfebf3d6d00f.mock.pstmn.io/apiDespacho',
            contentType: 'application/json',
            dataType: 'json',
            //data: JSON.stringify(paramsLogin),
            beforeSend: () => {
                console.log('EjecutandoBEforeSend::::');
                $('#datos').html('<center> <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></center>');
            },
            statusCode: {
                200: (data, textStatus, jqXHR) => {
                    console.log('statusCode200::::' + JSON.stringify(jqXHR.status));
                },
                202: (data, textStatus, jqXHR)=>{
                    setTimeout(()=> {
                        callService()
                        .then((data) => {
                            resolve(data);
                        }).catch((error) => {
                            reject(error);
                        })
                    }, 5000)
                }
            }
        })
        .done((data, textStatus, jqXHR) => {
            dataRealModulo(data);
            console.log('l_datosDoneCallService:::' + JSON.stringify(l_datos));
            /* console.log('l_globalDataRecieved:::' + JSON.stringify(l_globalDataRecieved));
            console.log('dataAntes:::' + data);
            console.log('textStatus:::' + textStatus);
            console.log('jqXHR:::' + jqXHR);
            console.log('jqXHR:::' + JSON.stringify(jqXHR)); */
            sleep(2000) //Solo se usa para ver el spinner más tiempo en el ejemplo
            console.log('dataDespuesCallService:::' + JSON.stringify(data));
            /* console.log('readyState:::' + jqXHR.readyState);
            console.log('responseText:::' + jqXHR.responseText); */
            /* console.log('getAllResponseHeaders:::' + JSON.stringify(jqXHR.getAllResponseHeaders())); */
            /* console.log('statusText:::' + jqXHR.statusText);
            console.log('status:::' + jqXHR.status);
            console.log('getResponseHeader:::' + jqXHR.getResponseHeader('x-srv-trace')); */
            resolve(data);
        })
        .fail((jqXHR, textStatus, errorThrown) => {
            console.error("Fail::::"+ jqXHR);
            reject(error);
        })
        .always((data, textStatus, errorThrown) => {
            console.info("Ocultar Spinner::::");
            $('#datos').html("");
    })
    })
}