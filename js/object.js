export { carro, crearInput }
let carro = {
    encendido: false,
    llantas: 4,
    puertas: 5,
    marca: "Toyota",
    colores: ["Azul", "Rojo", "Gris"],
    fabricante: {
        telefono: "5521221200",
        nombre: "Henry",
        direccion: "Ferrocarriles 27"
    },
    arrancar: () => {
        if (carro.encendido) {
            console.log("el vehiculo estaba encendido");
        } else {
            console.log("encendiendo el motor");
            carro.encendido = true;
        }
    },
    apagar: function () {
        if (carro.encendido === false) {
            console.log("el vehiculo estaba apagado");
        } else {
            console.log("aágando el motor");
            carro.encendido = false;
        }
    }
};
console.log(carro);

let fab = carro.fabricante;

console.log(fab.direccion);
fab = "ABC Ferrocariles";
console.log(fab);

//Mediante Objetos
const crearInput = () => {
    $("<input>", {
        type: "text",
        class: "form-control",
        placeholder: "Ingrese su Nombre",
        id: "inputObject"
    })
    .appendTo('.container')// se añade al elemento container
    .on("keypress", (e) => {//se agrega una funcion
        console.log(e.keyCode);
    });

    //Añadiendo estilos css mediante objetos compuesto puede ser css("","")
    $("#inputObject").css({
        position: "relative",
        top: "200px"
    });
}