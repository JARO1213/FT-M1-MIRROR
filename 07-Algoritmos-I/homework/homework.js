'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
 
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let resultante = [1];
    while(num > 1){
    let base = 2;
    for( let i = 0; i < base; i++){
      if(num % base === 0){
        resultante.push(base)
        num = num / base;
        break
      }else{
        base ++
      }
    } 
   }
  return resultante
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
let swap = true
while(swap){
  swap = false;
for(let i = 0; i < array.length-1; i++){
  if(array[i] > array[i+1]){
    var save = array[i];
    array[i] = array[i+1]
    array[i+1] = save;
    swap = true
      }
}
}
return array
}
// console.log(bubbleSort([5, 1, 4, 2, 8])) // [1, 2, 4, 5, 8]);
                            //    i

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let ordenado = false 
    while(!ordenado){
      ordenado = true
  for(let i = 1; i < array.length; i++){
    var aux = array[i];
    for(let j = i-1; j >= 0; j--){
      console.log(j)
      if(aux < array[j]){
       array[j+1] = array[j];
       array[j] = aux;
         }
       }  
     }
  }

return array
}
// console.log(insertionSort([5, 3, 7, 8, 2])) // [1, 2, 4, 5, 8])
            
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:


for(let i = 1; i < array.length; i++){
  var num = array[i]
  for(let j = i-1; j >= 0; j--){
    if(array[i] < num){
      num = array[i];
      }
      if(array[j]> num){
        array[j+1] = array[j];
        array[j] = num;
      }
  }
  
 }
//  console.log(num);
return array
// 
}
// console.log(selectionSort([1, 5, 3, 7,4, 8, 2])) // [1, 2, 4, 5, 8])


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
