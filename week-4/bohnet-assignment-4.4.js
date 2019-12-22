const header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-4.4'))

var states = ['Texas', "Louisiana", "Missouri", "North Dakota", "Washington"];

//display original array
console.log("--- ORIGINAL ARRAY --");
for(var x = 0;x < states.length; x++ ){
     console.log(states[x])
}
//display sorted array
console.log("\n--- SORTED ARRAY ---");
states.sort();
for(var x = 0;x < states.length; x++ ){
   console.log(states[x])
}
 
function getState(elem, selected) {

    return elem === selected;
    
    }

//getState(states, "Texas");
console.log("\n", states.filter( function (elem) { return getState(elem, "Texas") } )[0] );