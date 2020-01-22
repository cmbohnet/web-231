/*
============================================

; Title: Assignment 7.2
; Author: Professor Krasso
; Date: 13 January 2020
; Modified By: Bohnet Christine
; Description: Constructor Functions
============================================

*/ 

const header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-7.2'))

//Define the employee object
function employee(id, firstName, lastName, title) {
    this.id = id,
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;

            
    };

    var employees = [new employee("1", "Thomas", "Edison", "Software Engineer"),
                new employee("2", "Benjamin", "Franklin", "Programmer"),
                new employee("3", "Nikola", "Tesla", "Project Manager"),
                new employee("4", "Charles", "Babbage", "Product Manager"),
                new employee("5", "Alexander", "Bell", "Business Analyst")
            ];
        
//Display expected output

for (let x = 0; x < employees.length; x++) {
  console.log(employees[x].id + " " + employees[x].firstName + " " + employees[x].lastName  + " " + employees[x].title );
  
}
