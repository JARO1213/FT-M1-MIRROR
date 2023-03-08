'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) 
   en cualquiera de sus variantes, según se indique por parámetro
    ("post-order", "pre-order", o "in-order"). 
    Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.size = function(){
   var totalSize = 1;
   if(this.left){
      totalSize += this.left.size();
   }
   if(this.right){
      totalSize += this.right.size();
   }
   return totalSize
}
BinarySearchTree.prototype.insert = function(valor){
   if (valor < this.value){
      if (!this.left){
         this.left = new BinarySearchTree(valor);
         return valor
         }else{
            this.left.insert(valor)
            }
         }else{
      if(!this.right){
         this.right = new BinarySearchTree(valor);
         return valor;
      }else{
         this.right.insert(valor);
      }
   }   
}
BinarySearchTree.prototype.contains = function(contValue){
   if (contValue === this.value) 
       return true
    if(contValue < this.value)
      if(!this.left){
        return false;
      }else{ 
      return  this.left.contains(contValue)
    }else {            
       if(!this.right){
        return false;
        }else{
      return  this.right.contains(contValue)
    }
  }   
}
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
   switch (order){
      case 'post-order':
        this.left && this.left.depthFirstForEach(cb,order);
        this.right && this.right.depthFirstForEach(cb,order);
         cb(this.value)
      break;
      case 'pre-order' : // N -I- D
      cb(this.value)
      this.left && this.left.depthFirstForEach(cb,order);
      this.right && this.right.depthFirstForEach(cb,order);
       break
      default: //I N D
      this.left && this.left.depthFirstForEach(cb,order);
      cb(this.value)
      this.right && this.right.depthFirstForEach(cb,order);
      break;
   }

}
BinarySearchTree.prototype.breadthFirstForEach = function(cb, pendientes){
   if(!pendientes){
   var pendientes = [];
}
   cb(this.value)

    this.left && pendientes.push(this.left)
    this.right && pendientes.push(this.right)
  if(pendientes.length > 0){
   pendientes.shift().breadthFirstForEach(cb, pendientes)
  }
}



// var miArbol = new BinarySearchTree(10);
// miArbol.insert(7);
// miArbol.insert(8);
// miArbol.insert(6);
// miArbol.insert(14);
// miArbol.size()


// console.log(miArbol.insert(7))
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
