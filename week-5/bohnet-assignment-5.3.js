/*
============================================

; Title: Assignment 5.3
; Author: Professor Krasso
; Date: 8 January 2020
; Modified By: Bohnet Christine
; Description: Built-in Functions
============================================

*/ 

const header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-5.3'))

// collection of composer objects
const composerList = [
    {
      firstName: 'Ludwig',
      lastName: 'Van Beethoven',
      genre:'Classical',
      rating: 8
    },
    {
      firstName: 'Wolfgang',
      lastName: 'Mozart',
      genre:'Classical',
      rating: 7
    },
    {
      firstName: 'Johann',
      lastName: 'Bach',
      genre:'Classical',
      rating: 10
    },
    {
      firstName: 'Frederic',
      lastName: 'Chopin',
      genre:'Classical',
      rating: 9
    },
    {
      firstName: 'Antonio',
      lastName: 'Vivaldi',
      genre:'Classical',
      rating: 7
    }
  ];
  
  // output
  console.log('-- COMPOSERS --')
  composerList.forEach( (composer) => {
    console.log("Last Name: " + composer.lastName + " Genre: " + composer.genre + ' Rating: ' + composer.rating)
    
  })
  