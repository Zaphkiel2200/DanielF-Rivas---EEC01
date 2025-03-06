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

  const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const unicos = _.uniq(numerosRepetidos);
console.log(unicos);

const n = 3;
const elementos = ["a", "b", "c", "d", "e", "f", "g", "h"];
const grupos = _.chunk(elementos, n);
console.log(grupos);

const persona = { nombre: "Carlos", apellido: "Pérez", edad: 28 };
const nuevoObjeto = _.mapKeys(persona, (value, key) => key.toUpperCase());
console.log(nuevoObjeto);

const anidado = [1, [2, [3, [4, 5]]], 6];
const plano = _.flattenDeep(anidado);
console.log(plano);

const lista1 = [1, 2, 3, 4, 5];
const lista2 = [3, 4, 5, 6, 7];
const lista3 = [5, 6, 7, 8, 9];
const interseccion = _.intersection(lista1, lista2, lista3);
console.log(interseccion);

const clave = "curso";
const estudiantes = [
  { nombre: "Mario", curso: "Matemáticas" },
  { nombre: "Lucía", curso: "Historia" },
  { nombre: "Juan", curso: "Matemáticas" },
  { nombre: "Elena", curso: "Historia" }
];
const agrupados = _.groupBy(estudiantes, clave);
console.log(agrupados);
