const habitaciones = [
    { hab: 1, img: "habitacion-simple.jpg", Habitacion: "Simple", Personas: "2", Precio: 10000 },
    { hab: 2, img: "habitacion-familiar.jpg", Habitacion: "Familiar", Personas: "4", Precio: 16000 },
    { hab: 3, img: "habitacion-suite-familiar.jpg", Habitacion: "Suite Familiar", Personas: "6", Precio: 25000 },
    { hab: 4, img: "habitacion-suite.jpg", Habitacion: "Suite Especial", Personas: "2", Precio: 25000 },
];

const habitacionesReserva = document.getElementById("habitacionesReserva")

for (const habitacion of habitaciones) {
    const cardHabitacion =
        `<div class="cardHabitacion">
                    <img src="../imagenes/${habitacion.img}" alt="" class="imagenHabitacion">
                    <h2>Habitacion: ${habitacion.Habitacion}</h2>
                <div>
                    <h2>Cant.Personas: ${habitacion.Personas}</h2>
                    <h2>Precio: $${habitacion.Precio}</h2>
                </div>
        </div>`;
    habitacionesReserva.innerHTML += cardHabitacion
}



const selectReservacion = document.querySelector("select#selectHabitacion")
for (const habitacion of habitaciones) {
    const option = document.createElement("option");
    option.value = habitacion;
    option.innerText = habitacion;
    selectReservacion.append(option)
}