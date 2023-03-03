'use strict';

const { remove } = require("@11ty/eleventy/src/TemplateCache");

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural,
 su factorial (representado como n!) es el producto de n por todos los números naturales menores que él
  y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
   if (n  === 1 || n === 0){
         return 1
      }else{
       return n * nFactorial(n-1)
    }
  }


function nFibonacci(n) {
  if (n == 0 ){
    return 0
  } else if (n === 1){
    return 1
  }else{
    return nFibonacci (n - 1) + nFibonacci (n - 2)
  }
  
  
  
 
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, 
donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
this.thing =[];
 
}
Queue.prototype.enqueue = function (val){
this.thing.push(val);
return this.thing.join('')
}

Queue.prototype.dequeue = function (val){
  if (this.thing.length === 0) {
    return undefined; // queue is empty
  } else {
    
    var first = this.thing.shift(); // store first element
    return first;
  }
  }
  Queue.prototype.size = function (){
    return this.thing.length
    }

    let variable = new Queue()
    console.log(variable.enqueue('javascript'))
    console.log(variable.dequeue())


   


/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
