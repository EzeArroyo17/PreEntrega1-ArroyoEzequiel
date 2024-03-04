
const habitaciones = [
    { hab: 1, Habitacion: "Simple", Personas: "2", Precio: 10000 },
    { hab: 2, Habitacion: "Simple plus", Personas: "3", Precio: 12000 },
    { hab: 3, Habitacion: "Familiar", Personas: "4", Precio: 16000 },
    { hab: 4, Habitacion: "Familiar Plus", Personas: "5", Precio: 18000 },
    { hab: 5, Habitacion: "Suite Familiar", Personas: "6", Precio: 25000 },
];

console.log("Bienvenidos a nuestro sistema de reserva(Todo por log)");
//CALCULAR ESTADIA

function calcularEstadia(ingreso, egreso) {
    let fechaIngreso = new Date(ingreso).getTime()
    let fechaEgreso = new Date(egreso).getTime()
    if (fechaEgreso < fechaIngreso) {
        return Error
    }
    const milisegundoPorDia = 86400000
    let cantidadDias = (fechaEgreso - fechaIngreso) / milisegundoPorDia
    return cantidadDias
}

let dias = calcularEstadia("2024/02/10", "2024/02/17")
console.log("La cantidad de dias son: " + dias + " dias");

//SELECCIONAR PARA CANTIDAD DE PERSONAS

console.log("Seleciona la cantidad de personas a hospedarse");
const buscarPorCantPersonas = function (arr, cantidad) {
    return arr.find((el) => el.Personas.includes(cantidad))
}
let buscarPersonas = buscarPorCantPersonas(habitaciones, prompt("Inidca la cantidad de personas a hospedarse"))
console.log("Estas son tus opciones de hospedaje");
console.log(buscarPersonas);


//RESERVACION DE OSPEDAJE

console.log("Esta es la habitacion que reservaste");

const reservarHabitacion = []
function reservacion(arr, habitaciones) {
    arr.push(habitaciones) 
    return arr;
}
reservacion(reservarHabitacion, buscarPersonas);
console.log(reservarHabitacion);

//PRECIO FINAL DE LA HABITACION

console.log("Lo que cuesta la habitacion es esto");

function pagoReserva(habitaciones, recargo) {
    return habitaciones.reduce((acc, el) => {
        return acc = acc + el.Precio
    }, recargo)
}

let impuestos = 5000;
let cargosAdiocionales = 2500;
let cargoFijo = (impuestos + cargosAdiocionales);
console.log(pagoReserva(reservarHabitacion, cargoFijo));
