const header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-exercise-4.3'))

var vehicles = ['rollerblades', "skateboard", "scooter", "bicycle", "jetpack"];

console.log("-- DISPLAYING ARRAY ITEMS --");
for(var x = 0;x < vehicles.length; x++ ){
     console.log(vehicles[x])
}

function getValue(arr, input){
    for(var x = 0;x < arr.length; x++ ){
        if(input === arr[x] ){
        console.log("\n--- Selected Value ---\n", input)
        }
    }
}
getValue(vehicles, "skateboard");
getValue(vehicles, "bicycle");