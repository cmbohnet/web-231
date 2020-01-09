/*

============================================
; Title: Assignment 5.1
; Author: Professor Krasso
; Date: 8 January 2020
; Modified By: Bohnet Christine
; Description: Discussion Advanced Arrays
============================================

*/ 

const header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-5.1'))




var sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (var [key; value] of saying) {
  console.log(key + ' goes ' + value);
}