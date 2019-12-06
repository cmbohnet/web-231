const header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'week-2-exercise-2.4'))

function myName(first,last){
    myName.first = first;
    myName.last = last;
    return myName.first + " " + myName.last;
}
console.log(myName('Chris', 'Bohnet'));

function dateWriter(y,m,d){
    return new Date(y,m,d)
}
console.log(dateWriter(2019,11,5));
var y = 1999;
var m = 0;
var d = 26;
console.log(dateWriter(y,m,d));

function convertToInt(x){
    return parseInt(x);
}
console.log(convertToInt("3003"));

function convertToFloat(x){
    return parseFloat(x);
}
console.log(convertToFloat("3003.333"));
