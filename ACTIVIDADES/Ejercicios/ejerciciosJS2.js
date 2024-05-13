//function obtenerMayor(x, y) {
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
/* Metodos de MAth */
//}

const numeroMasGrande = (x, y) => Math.max(x, y);

console.log(numeroMasGrande(5, 6));


//function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"}


function mayoriaDeEdad(edad) {
  if (edad >= 18) {
    console.log("Allowed");
  } else {
    console.log("Not allowed");
  }
}

mayoriaDeEdad(18);

const mayorDeEdad = (edad) => (edad >= 18) ? "Allowed" : "Not allowed";

console.log(mayorDeEdad(33));
  
//function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.}

function conection(status) {
  if (status === 1){
    console.log("Online");
  } else if (status === 2) {
    console.log("Away");
  } else {
    console.log("Offline");
  }
}

conection(1)

const conectionUsuario = (status) => {
  const statuses = ["Offline", "Online", "Away" ]; 
  console.log(statuses[status] || "Offline");
}

conectionUsuario(2);

//function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:}

function saludo(idioma) {
  idioma = idioma.toLowerCase();
  if (idioma === 'aleman') {
    console.log("Guten Tag!");
  } else if (idioma === 'mandarin') {
    console.log("Ni Hao!");
  } else if (idioma === 'ingles') {
    console.log("Hello!");
  } else {
    console.log("Hola!");
  }
};

saludo('mandarin')

const saludar = (idioma) => {
  const saludos = {
    aleman: "Guten Tag!" ,
    mandarin: "Ni Hao!",
    ingles: "Hello!",
  };
console.log(saludos[idioma.toLowerCase()] ?? "Hola!");
};

saludar('ingles');

// const saludito = (idioma) => console.log({aleman: "Guten Tag!", mandarin: "Ni Hao!", ingles: "Hello!"}[idioma.toLowerCase()] || "Hola!");

// saludito('aleman')

//function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
//}

function colors(color) {
  color= color.toLowerCase();
  switch(color) {
    case 'blue':
      return 'This is blue';
    case 'red':
      return 'This is red';
    case 'green':
      return 'This is green';
    case 'orange':
      return 'This is orange';
    default:
      return 'Color not found'
  } 
}

colors('bl')

//function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:}

function esDiezOCinco(numero) {
  if (numero === 10 || numero === 5 ) {
    console.log(true);
  } else {
    console.log(false);
  }
}

esDiezOCinco(10)

function es10OCinco(numero) {
  return numero === 10 || numero === 5;
}

console.log(es10OCinco(8));

const esDiezo5 = (num) => num === 10 || num === 5; console.log(esDiezo5(10));

//function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
//}

function estaEnRango(numero) {
  return numero >= 20 && numero <= 50;
}

console.log(estaEnRango(50));

const okRango = (num) => num >= 20 && num <= 50;
console.log(okRango(15));

//function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:}

function esEntero(numero) {
  return Math.floor(numero) === numero;
}

console.log(esEntero(445));

const soloEntero = (num) => Math.floor(num) === num;

console.log(soloEntero(10));

//function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
//}

function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log('fizzBuzz');
  } else if (numero % 5 === 0) {
    console.log('buzz');
  } else if (numero % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(numero);
  }
}

fizzBuzz(15)

const fizzBuzz1 = (num) => num % 3 === 0 && num % 5 === 0 ? 'FizzBuzz'
  : num % 3 === 0 ? 'fizz'
  : num % 5 === 0 ? 'buzz'
  : num;

console.log(fizzBuzz1(15))


//function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
//}

function operadoresLogicos(num1, num2, num3) {
  if (num1 === 0 || num2 === 0 || num3 === 0 ) {
    return 'Error';
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return 'Hay numeros negativos';
  } else if (num1 > num2 && num1 > num3) {
    return `Número 1 "${num1}" es mayor y positivo`;
  } else if (num3 > num2 && num3 > num1) {
    return  num3 = num3 + 1,
    `Número 3 "${num3}" es mayor y positivo`;
  } else {
    return false;
  }
};
console.log(operadoresLogicos(0, 2, 1))

const opLogicos = (num1, num2, num3) => 
  num1 === 0 || num2 === 0 || num3 === 0 ? 'Error':
  num1 < 0 || num2 < 0 || num3 < 0 ? 'Hay numeros negativos':
  num1 > num2 && num1 > num3 ? `Número 1 "${num1}" es mayor y positivo`:
  num3 > num2 && num3 > num1 ? ((num3 = num3 + 1), `Número 3 "${num3}" es mayor y positivo`): false;

console.log(opLogicos(5, 2, 8));

//function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
//}

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true, `si ${numero} es primo`;
}

console.log(esPrimo(13));

const numeroPrimo = num => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true, `si ${num} es primo`;
};

console.log(numeroPrimo(13));


function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  return valor ? 'Soy verdadero' : 'Soy falso';
}

console.log(esVerdadero(false));

const esVerdad = valor => valor ? 'Soy verdadero' : 'Soy falso';

console.log(esVerdad(true));

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   

  const tabla = [];
  for (let i = 0; i <= 10; i++) {
    tabla.push(6 * i);
  }
  return tabla;
}
console.log(tablaDelSeis());

function tieneTresDigitos(numero){
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
  const longitud = numero.toString().length;
  return longitud === 3;
}

console.log(tieneTresDigitos());

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.

}

