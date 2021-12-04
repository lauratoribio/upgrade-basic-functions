//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    
    let contador = 0
    
    for (let i = 0; i < param.length; i++) {
        for (let j = i + 1; j < param.length; j++) {
            if (param[i] === param[j]) {
            contador += 1
        }
      
        }
    }
    return contador

  }

  let numRepetitions = repeatCounter(counterWords)
  console.log(numRepetitions)