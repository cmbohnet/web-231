/*

Expected output:

mercury is in position 1 but Pluto is no longer a planet!

venus is in position 2 but Pluto is no longer a planet!

earth is in position 3 but Pluto is no longer a planet!

mars is in position 4 but Pluto is no longer a planet!

saturn is in position 5 but Pluto is no longer a planet!

uranus is in position 6 but Pluto is no longer a planet!

neptune is in position 7 but Pluto is no longer a planet!

*/

// Import header and write it to the console.
 

//create a new Map for planet orders

let planetOrder = new Map();

 

//Use the set method to add the planets and their positions to the Map

planetOrder.set(1,'mercury').set(2, 'venus').set(3, 'earth').set(4, 'mars').set(5, 'jupiter')

.set(5, 'saturn').set(6, 'uranus').set(7, 'neptune').set(8, 'pluto');

 

//Since pluto is no longer a planet, delete it from the set

//planetOrder.delete(pluto);
planetOrder.delete(8);
 

//Iterate through the Map and log each key/value pair to the console in the statement

//planetOrder.for((value,key) => console.log(`${value} is in position ${key} but Pluto is no longer a planet!`));
for (var [key, value] of planetOrder) {

    console.log(`${value} is in position ${key} but Pluto is no longer a planet!`);
}