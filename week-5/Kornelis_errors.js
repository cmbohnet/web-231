/*
============================================
; Title: Discussion 5.1
; Author: Chris Bohnet
; Date: 08 January 2020
; Description: A broken JavaScript program using a keyed collection array with at least two (2) errors.
;===========================================
*/


// start program

// variable declaration
let animals = new Map ();
animals.set('cat','Cheaka');
animals.set('dog','Billy');
animals.set('fish','Matrix');

//function to display name of pets
for (let value of animals.values()){
  console.log ('I have a pet named ' + value + '.') // Should display  " I have a pet named Cheaka." " I have a pet named Billy." " I have a pet named Matrix."
}

// clear animals and adds new pet
animals.clear();
animals.set('fish','Glitch');

//function to display name of pets
for (let value of animals.values()){
   

  console.log ('I had a pet named ' + value + '.') // Should display  " I had a pet named Glitch."
}

//end program