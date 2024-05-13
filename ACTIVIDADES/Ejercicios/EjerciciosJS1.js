
// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola mundo";
console.log(nuevaString);

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = Number(5);
console.log(nuevoNum);

// Crea una variable booleana:
const nuevoBool = false;
console.log(nuevoBool)

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;
console.log(nuevaResta);

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;
console.log(nuevaMultiplicacion);

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;
console.log(nuevoModulo);

let devolverString = str => (str); console.log(devolverString("Re-hola mundo")); 

let suma = (x,y) => x+y; console.log(suma(10,10));

let resta = (x,y) => x-y; console.log(resta(10,5));

let multiplicacion =(x,y) => x*y; console.log(multiplicacion(2,2));

let division =(x,y) => x/y; console.log(division(10,2));

// Devuelve "true" si "x" e "y" son iguales
// De lo contrario, devuelve "false"
// Tu código:utilizar if y else
function sonIguales(x, y) {
if (x === y) {
  return true;
} else {
  return false
}
}
console.log(sonIguales(5,5));

let sonIguales2 = (x,y) => x===y; console.log(sonIguales2(8,8));

// Devuelve "true" si las dos strings tienen la misma longitud
// De lo contrario, devuelve "false"
// Tu código:
function tienenMismaLongitud(str1, str2) {
  if (str1.length===str2.length) {
    return true;
  } else {
    return false;
  }
}

console.log(tienenMismaLongitud("Victor","Monica"));

let tienenMismaLongitud2 = (str1, str2) => str1.length===str2.length; console.log(tienenMismaLongitud2("roca", "olla"));

// Devuelve "true" si el argumento de la función "num" es menor que noventa
// De lo contrario, devuelve "false"
// Tu código:
function menosQueNoventa(num) {
 if (num<90){
  return true;
 } else {
  return false;
 }
}

console.log(menosQueNoventa(85));

let menosQueNoventa2 = num => num < 90; console.log(menosQueNoventa2(5));

// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
// De lo contrario, devuelve "false"
// Tu código:
function mayorQueCincuenta(num) {
  if (num>50) {
    return true;
  } else {
    return false;
  }
}

console.log(mayorQueCincuenta(58));

let mayorQueCincuenta2 = num => num>50; console.log(mayorQueCincuenta2(80));

// Obten el resto de la división de "x" entre "y"
// Tu código:
function obtenerResto(x, y) {
  var obtenerResto = x+y;
  return;
}

console.log(obtenerResto(21,5));

let obtenerResto2 = (x, y) => x % y; console.log(obtenerResto2(12,5));

// Devuelve "true" si "num" es par
// De lo contrario, devuelve "false"
// Tu código:
function esPar(num) {
  if(num%2===0) {
    return true;
  } else {
    return false;
  }
}

console.log(esPar(55));

const esPar2 = num => num%2===0; console.log(esPar2(4));

// Devuelve "true" si "num" es impar
// De lo contrario, devuelve "false"
// Tu código:
function esImpar(num) {
  if (num%2!==0) {
    return true;
  } else {
    return false;
  }
}
 console.log(esImpar(5));

 const esImpar2 = num => num%2!==0; console.log(esImpar2(26));

 // Devuelve el valor de "num" elevado al cuadrado
 // ojo: No es raiz cuadrada!
 // Tu código:
function elevarAlCuadrado(num) {
}

const elevarAlCuadrado2 = num => num*num; console.log(elevarAlCuadrado2(5));

// Devuelve el valor de "num" elevado al cubo
// Tu código:
const elevarAlCubo2 = num => Math.pow(num,3); console.log(elevarAlCubo2(2));

const elevar = (num, exponent) => Math.pow(num, exponent); console.log(elevar(4,3));

const redondearNumero = num => Math.round(num); console.log(redondearNumero(12.5)); 

const redondearHaciaArriba = num => Math.ceil(num); console.log(redondearHaciaArriba(10.02)); 

const numeroRandom = () => Math.random(); console.log(numeroRandom())

const numeroRandomEnetero = () => Math.round(Math.random()*10); console.log(numeroRandomEnetero());
console.log(numeroRandomEnetero());
console.log(numeroRandomEnetero());
console.log(numeroRandomEnetero());
console.log(numeroRandomEnetero());
console.log(numeroRandomEnetero());

//La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
//Si el número es positivo, devolver ---> "Es positivo"
//Si el número es negativo, devolver ---> "Es negativo"
//Si el número es 0, devuelve false
function esPositivo(numero) {

  if (numero===0) {
    return false;
  } else if (numero>0) {
    return "Es positivo";
  } else {
    return "Es negativo";
  }
}

console.log(esPositivo(2));

const esPositivo2 = numero => numero===0? false: numero>0 ? "Es positivo" : "Es negativo"; console.log(esPositivo2(2));

// Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
// Ejemplo: "hello world" pasaría a ser "hello world!"
// Tu código:
const agregarSimboloExclamacion = str => `${str}!`; console.log(agregarSimboloExclamacion("Hola polilla"));

// Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
// Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
// Tu código:
const combinarNombres = (nombre, apellido) => `Hola, ${nombre} ${apellido}`; console.log(combinarNombres("Angel","Silva"));

// Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
// "Martin" -> "Hola Martin!"
// Tu código:
const obtenerSaludo = nombre => `Hola ${nombre}`; console.log(obtenerSaludo("Martin"));

// Retornar el area de un cuadrado teniendo su altura y ancho
// Tu código:
const obtenerAreaRectangulo = (alto, ancho) => ancho*alto; console.log(obtenerAreaRectangulo(10,20));

//Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
//Escribe tu código aquí
const retornarPerimetro = lado => 4*lado; console.log(retornarPerimetro(2));

//Desarrolle una función que calcule el área de un triángulo.
//Escribe tu código aquí
const areaDelTriangulo = (base, altura) => (base*altura)/2; console.log(areaDelTriangulo(6,5.19));

//Supongamos que 1 euro equivale a 1.20 dólares. 
//Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
//Escribe tu código aquí
const deEuroAdolar = euro => `El cambio de Euro a dolar es de: ${euro*1.20}`; console.log(deEuroAdolar(100));

//Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
//Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
//que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //si ingresa una consonante muestre en pantalla dato incorrecto
//Escribe tu código aquí

function esVocal(letra) {
  if (letra.length !== 1) {
    console.log(`Dato incorrecto: "${letra}" tiene más de un carácter`);
  } else {
    letra = letra.toLowerCase();
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
      console.log(`"${letra}" es una vocal`);
    } else {
      console.log(`"${letra}" Dato incorrecto, no es una vocal`);
    }
  }
};

esVocal(`5`);

function esVocaloNo(letra) {
  letra = letra.toLowerCase();
  if (letra.length !== 1) {
    console.log(`Dato incorrecto: "${letra}" tiene más de un carácter`)
    return;
  } else if ('aeiou'.includes(letra)) {
    console.log(`"${letra}" es una vocal`);
  } else {
    console.log(`"${letra}" Dato incorrecto, no es una vocal`)
  }};

  esVocaloNo("GT")
