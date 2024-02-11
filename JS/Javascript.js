//PRE


let nombre = "Ezequiel Arroyo";
let clave = 181222;
let dinero = "$100.000";
let dinero2 = 100000;

alert("bienvenido "+ nombre)

for( let i=1; i<=3; i++){
    let inserteClave = prompt("Ingrese su clave por favor (181222)");
    if(inserteClave==clave){
        alert("Clave correcta");
        let ingreso = prompt("Seleccione una opcion \n 1-Saldo \n 2-Retirar dinero ");
        switch (ingreso){
            case "1":
                alert("Saldo " + dinero);
                break;
            case "2":
                let retirar = prompt ("seleccionar monto \n 1-5.000 \n 2-10.000 \n 3-Seleccionar monto");
                switch(retirar){
                    case "1":
                        alert("Saldo $95.000");
                        break;
                    case "2":
                        alert("Saldo $90.000");
                        break;
                    case "3":
                        let retiro = prompt ("ingrese monto a retirar");
                        function restar(num1, num2){
                            return num1 - num2;
                        }
                        let retiro2 = restar (dinero2, retiro);
                        if(retiro >= 40000){
                            alert("Excediste el monto diario permitido")
                        }else{
                            alert("Saldo $" + retiro2);
                        }
                        break;
                    default:
                        alert("La opcion ingresada es incorrecta")
                }
                break;
            default:
                alert("La opcion ingresada es incorrecta")
        }
        break;
    }
    else{
        alert("Clave incorrecta")}
} 


