/*
============================================

; Title: Assignment 6.2
; Author: Professor Krasso
; Date: 13 January 2020
; Modified By: Bohnet Christine
; Description: Exception Handling Example
============================================

*/ 

const header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-6.2'))

var states = ['Texas', "Louisiana", "Missouri", "North Dakota", "Washington"];

//IndexOutofbounds error
try {
    callFunction("Hello World") 
} catch (error) {
    console.log("Catch clause: callFunction not defined. " );
}
finally {
    console.log("Finally clause reached...");
}

