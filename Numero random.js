var random_number = Math.floor(Math.random() * 9) + 1;  // Genera un número entre 1 y 9

var user_number = prompt("Ingrese un numero del 3 al 6:");

user_number = parseInt(user_number);  // Convertir el input del usuario a número entero

if (user_number >= 3 && user_number <= 6) {
    console.log("Número ingresado: " + user_number);
    console.log("Número aleatorio: " + random_number);
} else {
    console.log("El número ingresado no está en el rango permitido (3 al 6).");
}