const habitaciones = [
    { hab: 1, img: "habitacion-simple.jpg", Habitacion: "simple", Personas: "2", Precio: 10000 },
    { hab: 2, img: "habitacion-familiar.jpg", Habitacion: "familiar", Personas: "4", Precio: 16000 },
    { hab: 3, img: "habitacion-suite-familiar.jpg", Habitacion: "suite familiar", Personas: "6", Precio: 25000 },
    { hab: 4, img: "habitacion-suite.jpg", Habitacion: "suite especial", Personas: "2", Precio: 25000 },
];

const dias = [1,2,3,4,5,6,7,8]


const inputs = document.querySelectorAll("input");
const inputSearch = inputs[0];
const inputCompra = inputs[0]
const selectDias = document.querySelector("#selectDias");

const habitacionesReserva = document.getElementById("habitacionesReserva");
const btnSearch = document.getElementById("btnSearch");
const btnCompra = document.getElementById("btnCompra")

const reservarHabitacion = [];



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


function cantidadDias (){
    for (const nums of dias) {
        const option = document.createElement("option");
        option.value = nums;
        option.innerText = nums;
        selectDias.append(option);
    }}
    cantidadDias()

function buscarPorEnter () {
    inputSearch.addEventListener("keyup", (e) => {
        if (e.key == "Enter") {
        const encontrado = buscarHabitacion(habitaciones, inputSearch.value);
        return encontrado
        }
    });   
}

function buscarPorBoton (){
    btnSearch.addEventListener("click", (e) => {
        const encontrado1 = buscarHabitacion(habitaciones, inputSearch.value);
        return encontrado1
        });
}


buscarPorEnter()
buscarPorBoton()

function buscarHabitacion(arr, filtro) {
    const encontrado = arr.find((el) => {
    return el.Habitacion.includes(filtro);
    });
    return encontrado;
}

const recuperoUsuario = JSON.parse(localStorage.getItem("obj"));
console.log(recuperoUsuario);

localStorage.setItem(buscarPorEnter());





/*
function calcularPrecio (dias,habitacion){
return dias.reduce((acc, el)=>{
    return acc = acc + el.Precio 
},habitacion) 
}


console.log(calcularPrecio(cantidadDias,buscarPorBoton));
//console.log(habitaciones,precio);
//console.log(calcularPrecio(calcularDias(),habi));












//CALCULAR ESTADIA

/*

function calcularEstadia(ingreso,egreso) {
    let fechaIngreso =  inputIngreso
    let fechaEgreso = inputEgreso
    if (fechaEgreso < fechaIngreso) {
        return Error
    }
    const milisegundoPorDia = 864000
    let cantidadDias = (fechaEgreso - fechaIngreso)/milisegundoPorDia
    return cantidadDias
}

fechaIngreso =inputIngreso.value
fechaEgreso = inputEgreso.value;
const fecha = calcularEstadia(fechaIngreso,fechaEgreso);
console.log(fecha);

/*let fechaIngreso = inputIngreso.addEventListener("click", (e) => {
    const fecha =   new Date==inputIngreso.value;
    console.log(fecha);
    })
console.log(fechaIngreso);
let fechaEgreso = new Date (inputEgreso)
console.log(fechaEgreso);

//console.log(calcularEstadia(fechaIngreso,fechaEgreso));

btnOk.addEventListener("click", (e) => {
    const fecha = calcularEstadia(btnOk.value);
    console.log(fecha);
    });




/*
inputIngreso.addEventListener("click", (e) => {
    const fechaIngreso1 = calcularEstadia (fechaIngreso,inputIngreso.value);
    console.log(fechaIngreso1);
    });*/


    
