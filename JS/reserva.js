let habitaciones = [];

const API_URL = "./DB/db.json";

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    habitaciones = data; // Actualizar el valor de la variable habitaciones
    crearTarjeta(habitaciones);
};

getData(API_URL);

const inputsDate = document.querySelectorAll('input[type="date"]');
const btnCalcular = document.querySelector("#calcular");

const habitacionesReserva = document.getElementById("habitacionesReserva");

const DateTime = luxon.DateTime;

function crearTarjeta() {
    for (const habitacion of habitaciones) {
        const cardHabitacion =
            `
            <div class="cardHabitacion">
                <img src="../imagenes/${habitacion.img}" alt="" class="imagenHabitacion">
                <h2>Habitacion: ${habitacion.Habitacion}</h2>
                <div class="cardTexto">
                    <h2>Cant.Personas: ${habitacion.Personas}</h2>
                    <h2>Precio: $${habitacion.Precio}</h2>
                </div>
                <input type="button" value="Agregar" id="agregar">
            </div>
        `;
        habitacionesReserva.innerHTML += cardHabitacion;
    }
}


//RESERVA HABITACION
const btnAgregar = document.querySelectorAll('input[type="button"]');
const btnAgregar0 = btnAgregar[0]
const btnAgregar1 = btnAgregar[1]
const btnAgregar2 = btnAgregar[2]
const btnAgregar3 = btnAgregar[3]
function obtenerPrecio(habitacion) {
    return habitaciones[habitacion].Precio
}

function precioHabitacion() {
    const costoHabitacion = 0;
    const precio = obtenerPrecio(costoHabitacion)
    return precio;
}

function precioHabitacion1() {
    const costoHabitacion = 1;
    const precio = obtenerPrecio(costoHabitacion)
    return precio;
}

function precioHabitacion2() {
    const costoHabitacion = 2;
    const precio = obtenerPrecio(costoHabitacion)
    return precio;
}

function precioHabitacion3() {
    const costoHabitacion = 3;
    const precio = obtenerPrecio(costoHabitacion)
    return precio;
}


//RESERVA FECHA

const fIngreso = DateTime.now().toFormat("yyyy-MM-dd")
const fEgreso = DateTime.now().plus({ months: 1 }).toFormat("yyyy-MM-dd");

function calcularDias(ingreso, egreso) {
    let total = egreso.diff(ingreso);
    return total.as("days");
}


inputsDate.forEach((date) => {
    date.setAttribute("min", fIngreso);
    date.setAttribute("max", fEgreso);
});



btnAgregar0.addEventListener("click", () => {
    const precioPorHabitacion = precioHabitacion(btnAgregar0)
    btnCalcular.addEventListener("click", () => {
        const checkIn = DateTime.fromISO(inputsDate[0].value);
        const checkOut = DateTime.fromISO(inputsDate[1].value);
        const estadia = calcularDias(checkIn, checkOut);
        const precioTotal = estadia * precioPorHabitacion;
        if (checkOut > checkIn) {
            Swal.fire({
                title: "Resultado",
                text: `Tu estadía de ${estadia} días tiene un precio total de $${precioTotal}`,
                icon: "info",
                iconColor: "#00ff00",
                showCancelButton: true,
                confirmButtonText: "Confirmar",
                cancelButtonText: "Cancelar",
                position: "top-center",
                backdrop: "#445566aa",
                footer: "Se te enviara un mail para continuar con el pago"
            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "La fecha solicitada es inexistente",
            });
        }
    })
});


btnAgregar1.addEventListener("click", () => {
    const precioPorHabitacion = precioHabitacion1(btnAgregar)

    btnCalcular.addEventListener("click", () => {
        const checkIn = DateTime.fromISO(inputsDate[0].value);
        const checkOut = DateTime.fromISO(inputsDate[1].value);
        const estadia = calcularDias(checkIn, checkOut);
        const precioTotal = estadia * precioPorHabitacion;
        if (checkOut > checkIn) {
            Swal.fire({
                title: "Resultado",
                text: `Tu estadía de ${estadia} días tiene un precio total de $${precioTotal}`,
                icon: "info",
                iconColor: "#00ff00",
                showCancelButton: true,
                confirmButtonText: "Confirmar",
                cancelButtonText: "Cancelar",
                position: "top-center",
                backdrop: "#445566aa",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "La fecha solicitada es inexistente",
            });
        }
    })
});


btnAgregar2.addEventListener("click", () => {
    const precioPorHabitacion = precioHabitacion2(btnAgregar2)
    btnCalcular.addEventListener("click", () => {
        const checkIn = DateTime.fromISO(inputsDate[0].value);
        const checkOut = DateTime.fromISO(inputsDate[1].value);
        const estadia = calcularDias(checkIn, checkOut);
        const precioTotal = estadia * precioPorHabitacion;
        if (checkOut > checkIn) {
            Swal.fire({
                title: "Resultado",
                text: `Tu estadía de ${estadia} días tiene un precio total de $${precioTotal}`,
                icon: "info",
                iconColor: "#00ff00",
                showCancelButton: true,
                confirmButtonText: "Confirmar",
                cancelButtonText: "Cancelar",
                position: "top-center",
                backdrop: "#445566aa",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "La fecha solicitada es inexistente",
            });
        }
    })
});

btnAgregar3.addEventListener("click", () => {
    const precioPorHabitacion = precioHabitacion3(btnAgregar3)
    btnCalcular.addEventListener("click", () => {
        const checkIn = DateTime.fromISO(inputsDate[0].value);
        const checkOut = DateTime.fromISO(inputsDate[1].value);
        const estadia = calcularDias(checkIn, checkOut);
        const precioTotal = estadia * precioPorHabitacion;
        if (checkOut > checkIn) {
            Swal.fire({
                title: "Resultado",
                text: `Tu estadía de ${estadia} días tiene un precio total de $${precioTotal}`,
                icon: "info",
                iconColor: "#00ff00",
                showCancelButton: true,
                confirmButtonText: "Confirmar",
                cancelButtonText: "Cancelar",
                position: "top-center",
                backdrop: "#445566aa",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "La fecha solicitada es inexistente",
            });
        }
    })
});