/*
============================================
; Title: Assignment 1.5
; Author: Christine Bohnet
; Date: 30 Nov 2019
; Modified By: Christine Bohnet
; Description: This program demonstrates the
; use of types, variables and methods work in an application
;===========================================
*/

var firstName1 = "Jane";
var lastName1 = "One";
var address1 = "123 Worker Lane";
var payRate1 = 15.6759;
payRate1 = payRate1.toFixed(1);
var hireDate1 = new Date("1-6-2001");
hireDate1 = hireDate1.toLocaleDateString();

console.log("First Last: ", firstName1, lastName1);
console.log("Address: ", address1);
console.log("Pay Rate: $", payRate1);
console.log("Hire Date: ", hireDate1);

var firstName2 = "Jack";
var lastName2 = "Persontoo";
var address2 = "222 Happy Hollow";
var payRate2 = 21.955;
payRate2 = payRate2.toFixed(1);
var hireDate2 = new Date("12-01-2012");
hireDate2 = hireDate2.toLocaleDateString();

console.log("\nFirst Last: ", firstName2, lastName2);
console.log("Address: ", address2);
console.log("Pay Rate: $", payRate2);
console.log("Hire Date: ", hireDate2);

var firstName3 = "Mary";
var lastName3 = "Three";
var address3 = "3 Golden Bowl Blvd";
var payRate3 = 31.33;
payRate3 = payRate3.toFixed(1);
var hireDate3 = new Date("mar-03-1993");
hireDate3 = hireDate3.toLocaleDateString();

console.log("\nFirst Last: ", firstName3, lastName3);
console.log("Address: ", address3);
console.log("Pay Rate: $", payRate3);
console.log("Hire Date: ", hireDate3);