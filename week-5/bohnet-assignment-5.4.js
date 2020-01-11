/*
============================================

; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 8 January 2020
; Modified By: Bohnet Christine
; Description: Filtering and reducing complex data structures
============================================

*/ 

const header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-5.4'))

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
  console.log('--  COMPOSER BY RATING --')
  
  /*
  function getComposerRating(item) {
    var composerRating = [item.lastName,item.rating];
    return composerRating;
  }
  
  
    let ratingsList = composerList.map(getComposerRating);
    ratingsList.forEach((item) => {
        console.log("Rating: ", item.n);
        console.log("Composer: ", item);
    })
  */    
  
  // return a new list of objects with only the lastName field

  let lastNames = composerList.map((composer) => {
    return composer.lastName
  })

  let ratings = composerList.map((composer) => {
    return composer.rating
  })
 
  // output
  console.log('--  COMPOSER BY RATING --')
  
  lastNames.forEach((lastName) => {
    console.log("Composer: " + lastName)
  
  })
  
  ratings.forEach((rating) => {
    console.log("Rating: " + rating)
    
  })