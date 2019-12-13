const header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'week-3-exercise-3.2'))

function match(first,second){
    match.first = first;
    match.second = second;
    return (match.first === match.second) ? true : false;
}
console.log("Match?",match('Trevor', 'Trevor'));

function logMismatch(first,second){
    match.first = first;
    match.second = second;
    return `${match.first} === ${match.second} is ${(match.first === match.second) ? true : false}`    
}
console.log(logMismatch('Chris', 'Christine'));

function logMatch(first,second){
    match.first = first;
    match.second = second;
    return `${match.first} === ${match.second} is ${(match.first === match.second) ? true : false}`    
}
console.log(logMismatch('Javascript', 'Javascript'));
sixVars();

function sixVars(){
    var sixArr = [1, 2, 3, 4, 5, 6];
        var ctr = 1;
        for (num in sixArr) {
            //console.log(sixArr[num])
            for (var x = ctr; x < 7; x++) {
                if (sixArr[num] !== x) {
                    console.log(logMismatch(sixArr[num],x));
                } else {
                    console.log(logMatch(sixArr[num],x));
                }
            }
            ctr++;
        }

}    
/*
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
*/