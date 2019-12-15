const header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'week-3-assignment-3.4'))

var someVar = 3;

for (var x = 0; x < 11; x++){
  var localVar = Math.floor((Math.random() * 10) + 1)
  //console.log("local var - x", localVar, x)
  if( localVar === someVar ){
    console.log( logMatch(localVar, someVar));      
  }else{
    console.log(logMismatch(localVar, someVar));
  }
}

function match(first,second){
    match.first = first;
    match.second = second;
    return (match.first === match.second) ? true : false;
}

function logMismatch(first,second){
    match.first = first;
    match.second = second;
    return `${match.first} === ${match.second} is ${(match.first === match.second) ? true : false}`    
}

function logMatch(first,second){
    match.first = first;
    match.second = second;
    return `${match.first} === ${match.second} is ${(match.first === match.second) ? true : false}`    
}