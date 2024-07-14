// //bucles 
// //1
// let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

// console.log(`Tabla de multiplicar del ${numero}:`);
// for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }

// //2 
// let sumaNumeros = 0
// while (true) {
//     let numero = parseInt(prompt("ingresa un numero (0 para terminar):"));
//     if (numero === 0) {
        
//         break;
//     }
//     sumaNumeros += numero;
// }
// alert("la suma acomulada es: " + sumaNumeros);




// //3 Generar un número secreto entre 1 y 100
// let numeroSecreto = 10

// let intentos = 0;

// while (true) {
//     let numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 100):"));
   
//     intentos++;

//     if (numeroIngresado < numeroSecreto) {
//         alert("El número es muy bajo. Intenta nuevamente.");
//     } else if (numeroIngresado > numeroSecreto) {
//         alert("El número es muy alto. Intenta nuevamente.");
//     } else {
//         alert("¡Felicitaciones! Adivinaste el número en " + intentos + " intentos.");
//         break;
//     }
// }

// //4
// function esPrimo(numero) {
//     if (numero <= 1) {
//         return false;
//     }

//     for (let primo = 2; primo <= numero / 2; primo++) {
//         if (numero % primo === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// let numeroIngresado = parseInt(prompt("Ingresa un número para verificar si es primo:"));

// if (esPrimo(numeroIngresado)) {
//     alert("el " + numeroIngresado  + " es primo.");
// } else {
//     alert( "el " + numeroIngresado + " no es primo.");
// }

// //5
// function mostrarDivisores(numero) {
//     let divisores = ""; 

//     for (let div = 1; div <= numero; div++) {
//         if (numero % div === 0) {
//             if (divisores !== "") {
//                 divisores += ", "; 
//             }
//             divisores += div; 
//         }
//     }

//     return divisores; 
// }
// let numeroIngresado = parseInt(prompt("Ingresa un número para mostrar sus divisores:"));
// let resultado = mostrarDivisores(numeroIngresado);
// alert("Divisores de " + numeroIngresado + ": " + resultado);

// //6
// let array = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

// for (let numero = 0; numero < array.length; numero++) {
// console.log("Elemento " + (numero + 1) + ": " + array[numero]);
// }


// //7
// let array = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

// for (let numero = 0; numero < array.length; numero++) {
//     let por2 = array[numero] * 2
// console.log("Elemento " + (array [numero]) + ": " + por2);
// }

// //8
// let familia = [
//     {
//         nombre: "Juan",
//         edad: 35,
//         ciudad: "Colombia",
//         relacion: "Padre"
//     },
//     {
//         nombre: "Maria",
//         edad: 32,
//         ciudad: "Colombia",
//         relacion: "Madre"
//     },
//     {
//         nombre: "Pedro",
//         edad: 10,
//         ciudad: "Colombia",
//         relacion: "Hijo"
//     },
//     {
//         nombre: "Ana",
//         edad: 7,
//         ciudad: "Colombia",
//         relacion: "Hija"
//     },
//     {
//         nombre: "Carlos",
//         edad: 60,
//         ciudad: "Colombia",
//         relacion: "Abuelo"
//     }
// ];
// familia.forEach(function(persona) {
//     console.log("Hola, soy " + persona.nombre + ", tengo " + persona.edad + " años y soy " + persona.relacion + ". Vivo en " + persona.ciudad + ".");
// });

// //9
// let array = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

// for (let numero = 0; numero < array.length; numero++) {
//     if (array[numero] % 2 !== 0) {
//         console.log("numeros impares: " + array[numero]);
//     }
// }

// //10
// let sumaPares = 0;
// let sumaImpares = 0;
// let numerosPares = [];
// let numerosImpares = [];

// while (true) {
//     let numero = parseInt(prompt("Ingrese un número (0 para finalizar):"));
    
//     if (numero === 0) {
//         break; 
//     }
    
//     if (numero % 2 === 0) {
//         sumaPares += numero; 
//         numerosPares.push(numero); 
//     } else {
//         sumaImpares += numero; 
//         numerosImpares.push(numero); 
//     }
// }

// console.log("Números pares ingresados: " + numerosPares.join(", "));
// console.log("La suma de los números pares es: " + sumaPares);
// console.log("Números impares ingresados: " + numerosImpares.join(", "));
// console.log("La suma de los números impares es: " + sumaImpares);

// //11
// let numeros = [5, 12, 8, 20, 3, 15, 7, 25, 14, 2];
// let numeroMasGrande = numeros[0];

// for (let numero = 1; numero < numeros.length; numero++) {
//     if (numeros[numero] > numeroMasGrande) {
//         numeroMasGrande = numeros[numero];
//     }
// }
// console.log("El número más grande es: " + numeroMasGrande);

// //12
// let numeros = [5, 12, 8, 20, 3, 15, 7, 25, 14, 2];
// let numeroMasChico = numeros[0];

// for (let numero = 1; numero < numeros.length; numero++) {
//     if (numeros[numero] < numeroMasChico) {
//         numeroMasChico = numeros[numero];
//     }
// }
// console.log("El número más chico es: " + numeroMasChico);

// //13
// let jugador1 = prompt("Ingrese el nombre del Jugador 1:");
// let jugador2 = prompt("Ingrese el nombre del Jugador 2:");

// function determinarGanador(jugada1, jugada2) {
//     if (jugada1 === jugada2) {
//         return "Empate";
//     } else if (
//         (jugada1 === "piedra" && jugada2 === "tijeras") ||
//         (jugada1 === "papel" && jugada1 === "piedra") ||
//         (jugada1 === "tijeras" && jugada2 === "papel")
//     ) {
//         return jugador1;
//     } else {
//         return jugador2;
//     }
// }

// while (true) {
//     let jugada1 = prompt(jugador1 + ", ingrese su jugada (piedra, papel o tijeras):").toLowerCase();
//     let jugada2 = prompt(jugador2 + ", ingrese su jugada (piedra, papel o tijeras):").toLowerCase();

//     let resultado = determinarGanador(jugada1, jugada2);

//     if (resultado === "Empate") {
//         alert("Es un empate, sigan jugando!");
//     } else {
//         alert("El ganador es: " + resultado);
//         break; 
//     }
// }

// //14
// let nunLados = 5;

// for (let fila = 1; fila <= nunLados; fila++) {
//     let asteriscos = '';
//     for (let contador = 0; contador < fila; contador++) {
//         asteriscos += '*';
//     }
//     console.log(asteriscos);
// }

// //15
// let nunLados = 5;

// for (let fila = nunLados; fila >=1;  fila--) {
//     let asteriscos = '';
//     for (let contador = 0; contador < fila; contador++) {
//         asteriscos += '*';
//     }
//     console.log(asteriscos);
// }

// //16
// let numerosDesordenados = [5, 2, 9, 1, 7, 3, 8, 4, 6, 10];
// let longitud = numerosDesordenados.length;

// for (let paso = 0; paso < longitud - 1; paso++) {
//     for (let posicion = 0; posicion < longitud - 1 - paso; posicion++) {
//         if (numerosDesordenados[posicion] > numerosDesordenados[posicion + 1]) {
//             let temp = numerosDesordenados[posicion];
//             numerosDesordenados[posicion] = numerosDesordenados[posicion + 1];
//             numerosDesordenados[posicion + 1] = temp;
//         }
//     }
// }
// console.log("Array ordenado:");
// for (let indice = 0; indice < longitud; indice++) {
//     console.log(numerosDesordenados[indice]);
// }

