const header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-exercise-4.2'))

var fruits = ['cherry', "kiwi", "apple", "berry", "orange"];

function getFruit(input){
    for(var x = 0;x < input.length; x++ ){
        console.log(input[x])
    }
}
getFruit(fruits);