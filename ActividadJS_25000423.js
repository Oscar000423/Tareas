//noprotect
var day = "";
var month = "";
var valid_response = false;

do{
  month = prompt("Ingrese tu mes de nacimiento en numeros (1-12): ");
  switch (month){
    case month > 0 && month < 13:
      month = parseInt(month);  // Convertir el input del usuario a número entero
      valid_response = true;
      break;
    default:
      alert("La option (" + month + ") no es valida");
      valid_response = false;
  }
}while(valid_response === false)
  
do{
  day = prompt("Ingrese tu dia de nacimiento en numeros: ");
  switch (day){
    case day > 0 && day < 31:
      day = parseInt(day);  // Convertir el input del usuario a número entero
      valid_response = true;
      break;
    default:
      alert("La option (" + day + ") no es valida");
      valid_response = false;
  }
}while(valid_response === false)
  
  switch(month){
    case 1: // Enero
      if(day < 21){
        alert("Naciste el " + day + "/" + month + " y tu signo es Capricornio");
      } else if (day >= 21 && day <= 31){
        alert("Naciste el " + day + "/" + month + " y tu signo es Acuario");
      } else {
        alert("Ese mes no tiene tal día (" + day + ")");
      }
      break;
  
    case 2: // Febrero
      if(day < 20){
        alert("Naciste el " + day + "/" + month + " y tu signo es Acuario");
      } else if (day >= 20 && day <= 29){ // Considerando años bisiestos
        alert("Naciste el " + day + "/" + month + " y tu signo es Piscis");
      } else {
        alert("Ese mes no tiene tal día (" + day + ")");
      }
      break;
  
    case 3: // Marzo
      if(day < 21){
        alert("Naciste el " + day + "/" + month + " y tu signo es Piscis");
      } else if (day >= 21 && day <= 31){
        alert("Naciste el " + day + "/" + month + " y tu signo es Aries");
      } else {
        alert("Ese mes no tiene tal día (" + day + ")");
      }
      break;
  
    case 4: // Abril
      if(day < 21){
        alert("Naciste el " + day + "/" + month + " y tu signo es Aries");
      } else if (day >= 21 && day <= 30){
        alert("Naciste el " + day + "/" + month + " y tu signo es Tauro");
      } else {
        alert("Ese mes no tiene tal día (" + day + ")");
      }
      break;
  
    case 5: // Mayo
      if(day < 21){
        alert("Naciste el " + day + "/" + month + " y tu signo es Tauro");
      } else if (day >= 21 && day <= 31){
        alert("Naciste el " + day + "/" + month + " y tu signo es Géminis");
      } else {
        alert("Ese mes no tiene tal día (" + day + ")");
      }
      break;
  
    case 6: // Junio
      if(day < 21){
        alert("Naciste el " + day + "/" + month + " y tu signo es Géminis");
      } else if (day >= 21 && day <= 30){
        alert("Naciste el " + day + "/" + month + " y tu signo es Cáncer");
      } else {
        alert("Ese mes no tiene tal día (" + day + ")");
      }
      break;
  
    case 7: // Julio
      if(day < 23){
        alert("Naciste el " + day + "/" + month + " y tu signo es Cáncer");
      } else if (day >= 23 && day <= 31){
        alert("Naciste el " + day + "/" + month + " y tu signo es Leo");
      } else {
        alert("Ese mes no tiene tal día (" + day + ")");
      }
      break;
  
    case 8: // Agosto
      if(day < 23){
        alert("Naciste el " + day + "/" + month + " y tu signo es Leo");
      } else if (day >= 23 && day <= 31){
        alert("Naciste el " + day + "/" + month + " y tu signo es Virgo");
      } else {
        alert("Ese mes no tiene tal día (" + day + ")");
      }
      break;
  
    case 9: // Septiembre
      if(day < 23){
        alert("Naciste el " + day + "/" + month + " y tu signo es Virgo");
      } else if (day >= 23 && day <= 30){
        alert("Naciste el " + day + "/" + month + " y tu signo es Libra");
      } else {
        alert("Ese mes no tiene tal día (" + day + ")");
      }
      break;
  
    case 10: // Octubre
      if(day < 23){
        alert("Naciste el " + day + "/" + month + " y tu signo es Libra");
      } else if (day >= 23 && day <= 31){
        alert("Naciste el " + day + "/" + month + " y tu signo es Escorpio");
      } else {
        alert("Ese mes no tiene tal día (" + day + ")");
      }
      break;
  
    case 11: // Noviembre
      if(day < 22){
        alert("Naciste el " + day + "/" + month + " y tu signo es Escorpio");
      } else if (day >= 22 && day <= 30){
        alert("Naciste el " + day + "/" + month + " y tu signo es Sagitario");
      } else {
        alert("Ese mes no tiene tal día (" + day + ")");
      }
      break;
  
    case 12: // Diciembre
      if(day < 22){
        alert("Naciste el " + day + "/" + month + " y tu signo es Sagitario");
      } else if (day >= 22 && day <= 31){
        alert("Naciste el " + day + "/" + month + " y tu signo es Capricornio");
      } else {
        alert("Ese mes no tiene tal día (" + day + ")");
      }
      break;
  
    default:
      alert("El mes ingresado no es válido.");
  }