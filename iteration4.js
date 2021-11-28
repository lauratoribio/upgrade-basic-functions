//Calcular un promedio es una tarea extremadamente común

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {

    let suma = 0

    for (let i = 0; i < param.length; i++) {
        suma += param[i]   
    }
    console.log(suma)

    let promedio = suma / param.length
    console.log(promedio)
}

average(numbers)