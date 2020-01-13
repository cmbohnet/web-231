/*
============================================
; Title: Discussion Board 6.1
; Author: Brendan Mulhern
; Date: 12 January 2020
; Modified By: Chris Bohnet
; Description: This program has two errors in it.
;===========================================
*/

// Intented output:
// Cat
// Dog
// Horse
// Bear
// Deer

// Defines Array
//I reformatted the array definition to remove the key value sequence since your comment implied to me that it was a simple array definition intended.
var animals = ["Cat","Dog","Horse","Bear","Deer"];

// Prints out Array
//I reformatted the way the array was being iterated by adding a function.  
animals.forEach(function(animal) {
    console.log(animal)
});