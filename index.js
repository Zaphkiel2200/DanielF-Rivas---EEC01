const _ = require('lodash');

const numeros = [1, 2, 3, 4, 5];
const numerosInvertidos = _.reverse(numeros);
console.log(numerosInvertidos); 

const valores = [0, "Hola", false, 42, "", null, "Mundo", undefined, NaN, true];
const valoresFiltrados = _.compact(valores);
console.log(valoresFiltrados); 