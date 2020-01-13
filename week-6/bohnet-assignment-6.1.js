/*
============================================

; Title: Assignment 6.1
; Author: Professor Krasso
; Date: 13 January 2020
; Modified By: Bohnet Christine
; Description: 2 errors
============================================

*/ 

const header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-6.1'))

//Define the ticket object with person nested object
var ticket = {id:"105",
              name:"Help Desk Support",
              dateCreated; new Date(),
              priority:"1",
            person: {id:"105",
                     fullName: "Bob",
                     lastName: "Jones",
                     jobTitle: "Programmer I"

            }
        };
        
//Display expected output
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + "(" + ticket.person.jobTitle + ").");

