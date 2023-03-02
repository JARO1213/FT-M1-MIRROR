'use strict';

function BinarioADecimal(num) {
let base = num.split('')
let exponent = [];
let output = [];
for(let i = base.length-1; i >=0; i --){
exponent.push(Math.pow(2,i));
}
for(let i = 0; i < base.length; i ++){
   output.push(exponent[i]* base[i])
}
let total = output.reduce((a,b) => a + b, 0);
console.log(total);
return total
}
function DecimalABinario(num) {
   let output =[];
     let i = num
   while(i >= 1){
   output.push(Math.floor(i%2))
   i = (Math.floor(i)/2)
     }
   let total = output.reverse('')
   let end = total.join('')
   console.log(end)
   return end
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
