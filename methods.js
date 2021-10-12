//String methods and properties

const fName = "Christian, Carl, Luna, Hans, Diana";

//check string length
console.log(fName.length);

//make all letters capitalized
console.log(fName.toUpperCase());

//return part of string
console.log(fName.slice(2, 6));

//Split string into array
console.log(fName.split(","));

//replace part of sring
console.log(fName.replace("Christian", "Adam"));

//Number methods

const num = 5.678;

//convert number to string
console.log(typeof num.toString());

//returnera som exponential format
console.log(num.toExponential(2));

//Array methods

const cars = ["Volvo", "BMW", "Audi", "Ford", "Renault"];

//add value to cars
cars.push("Mercedes");
console.log(cars);

//remove last value from array
cars.pop();
console.log(cars);

//reverse order of array
cars.reverse();
console.log(cars);

//sort array
cars.sort();
cars.reverse();
console.log(cars);
