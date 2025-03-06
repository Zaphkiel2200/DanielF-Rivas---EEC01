import _ from 'lodash';

const numeros = [1, 2, 3, 4, 5];
const numerosInvertidos = _.reverse(numeros);
console.log(numerosInvertidos); 

const valores = [0, "Hola", false, 42, "", null, "Mundo", undefined, NaN, true];
const valoresFiltrados = _.compact(valores);
console.log(valoresFiltrados); 

const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const union = _.union(array1, array2);
console.log(union); 

const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
const frecuencia = _.countBy(palabras);
console.log(frecuencia);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const diferencia = _.difference(arr1, arr2);
console.log(diferencia);

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Juan", edad: 30 }
  ];
  const ordenados = _.sortBy(personas, 'edad');
  console.log(ordenados);
