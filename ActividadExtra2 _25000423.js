//noprotect
var play_again = true;

while (play_again){
  
  var random_number = Math.floor(Math.random() * 9) + 1;  // Genera un número entre 1 y 9
  var user_number = prompt("Ingrese un numero del 3 al 6:");
  var user_response = "";
  var result = "";
  var valid_response = false;
  
  user_number = parseInt(user_number);  // Convertir el input del usuario a número entero
  if (user_number >= 3 && user_number <= 6) {
    console.log("Número ingresado: " + user_number);
  do {
    user_response = prompt("Crees que tu numero es: \nMayor\nMenor\nIgual");
    console.log("Crees que tu numero es: \nMayor\nMenor\nIgual");
    user_response = user_response.toLowerCase();
    switch (user_response){
      case "mayor":
      case "menor":
      case "igual":
        console.log("Entonces crees que tu numero es " + user_response + " pues...");
        valid_response = true;
        break;
      default:
        console.log("La option (" + user_response + ") no es valida");
        valid_response = false
    }
  }while(valid_response === false)
  
    switch (user_number){
      case user_number > random_number:
        result = "mayor";
        break;
      case user_number < random_number:
        result = "menor";
        break;
      case user_number == random_number:
        result = "igual";
        break;
    }
  if (user_response == result){
    console.log("Felicidades estas en lo correcto mi numero(" + random_number + ") es " + user_response + " a tu numero (" + user_number + ")");
  } else { 
    console.log("Lamentablemente fallaste mi numero(" + random_number + ") no es " + user_response + " a tu numero (" + user_number + ")");
  }
    
    do {
    user_response = prompt("Quieres volver a jugar? \nSi\nNo");
    console.log("Quieres volver a jugar? \nSi\nNo");
    user_response = user_response.toLowerCase();
    switch (user_response){
      case "si":
        play_again = true;
        valid_response = true;
        break;
      case "no":
        console.log("Gracias por jugar.\nMade by Oscar Castillo 25000423");
        valid_response = true;
        play_again = false;
        break;
      default:
        console.log("La option (" + user_response + ") no es valida");
        valid_response = false
    }
  }while(valid_response === false)
  } else {
    console.log("El número ingresado no está en el rango permitido (3 al 6).");
  }
}
