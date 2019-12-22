/*
============================================
; Title: Discussion 4.1
; Author: Izabella Kornelis
; Date: 11 December 2019
; Description: A broken JavaScript program using an array with at least two (2) errors.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
//const header = require('../kornelis-header.js')

// Call the console.log() function and output a well-formatted header
//console.log(header.display("Izabella", "Kornelis", "Assignment 3.1"));
// new line
console.log('\n')

// start program

// variable declaration
var name= ["Kornelis", "Izabella", "Patricia"];

// function
function add(){
  var a = name[0].length; // length of Kornelis
  var b = name[1].length; // length of Izabella
  var c = name[2].length; // length of Patricia
  var amountOfChara = a + b + c; // total characters in first + middle + last names
  return amountOfChara;
}

// output
console.log("My name is " ,name[0] ,name[1] ,name[2] + " I have " + add() + " letters in my name."); // My name is Izabella Patricia Kornelis, I have 24 letters in my name.

// end program