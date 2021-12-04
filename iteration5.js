//Crea una función que reciba por parámetro un array y cuando 
//es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {

  let contador = 0
    for(let i = 0; i < param.length; i++) {
        if (typeof param[i] === "number") {
          contador += param[i]
        } else {
          contador += param[i].length
        }
    }
    return contador
}

let resultado = averageWord(mixedElements)
console.log(resultado)

// si es un numero o un array