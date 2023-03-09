'use strict'

const { merge } = require("@11ty/eleventy/src/TemplateData");

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array <= 1) return array;
  let pivoteI = Math.floor(Math.random()*array.length);
  let pivote = array[pivoteI]
  let right =[];
  let left = [];
  let equals = [];
  
  for (let i = 0; i < array.length; i++) {
    if(array[i] === pivote){
      equals.push(array[i]);
    }else if( array[i] < pivote){
      left.push(array[i]);
    }else if (array[i] > pivote){
      right.push(array[i]);
    }
      }
   return quickSort (left).concat(equals).concat(quickSort(right))
}



  

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;
let pivotIndex = Math.floor(array.length/2)
let pivote = array[pivotIndex];
let left = [];
let right= [];
for (let index = 0; index < array.length; index++) {
  if(index === pivotIndex){
    continue;
  }else if (array[index] < pivote){
     left.push(array[index]);
    } else {
     right.push(array[index]);
    }
 }
return mergeSort(left).concat([pivote], mergeSort(right))

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
