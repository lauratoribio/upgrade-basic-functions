// Implemente la función denominada sumNumbers que toma un array de números como argumento 
// y devuelve la suma de todos los números de la matriz.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(param) {
    
 let suma = 0

 for (let i = 0; i < param.length; i++) {
     suma += param[i];   
 }
 console.log(suma)
}

sumNumbers(numbers)