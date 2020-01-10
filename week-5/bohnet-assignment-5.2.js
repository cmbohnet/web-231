/*
============================================

; Title: Assignment 5.2
; Author: Professor Krasso
; Date: 8 January 2020
; Modified By: Bohnet Christine
; Description: Built-in Functions
============================================

*/ 

const header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-5.2'))

// array of favorite food types
var food = ["pizza", "tacos", "spaghetti", "lobster", "gyro"];

// output
food.forEach((foodtype) => {
  console.log(foodtype)
})
