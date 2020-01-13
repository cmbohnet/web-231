/*
============================================

; Title: Assignment 6.3
; Author: Professor Krasso
; Date: 13 January 2020
; Modified By: Bohnet Christine
; Description: Object literals
============================================

*/ 

const header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-6.3'))

//Define the ticket object
var ticket = {id:"101",
              name:"Help Desk Support",
              requestor:"Bob Jones"};

//Display the ticket object
console.log("Display the ticket object");
console.log(ticket);

//Display by accessing each element of ticket object
console.log("Display by accessing each element of ticket object");
console.log("{ id: " + ticket.id + ", name: " + ticket.name + ", requestor: " + ticket.requestor + "}");
