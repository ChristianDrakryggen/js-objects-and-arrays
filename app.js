//Objekt

const car = {
  brand: "Volvo",
  model: "XC40",
  year: 2021,
  fast: true,
  start: function () {
    alert("Wroooom!");
  },
};

document.getElementById("car").innerHTML = car.brand;

//car.start();

const person = {
  name: "Christian",
  age: 31,
  greeting: function () {
    alert("Hi, my name is " + this.name + ", I'm " + this.age + " years old");
  },
  ageNextYear: function () {
    alert(this.age + 1);
  },
};

const person2 = {
  name: "Carl",
  age: 28,
  greeting: function () {
    alert("Hi, my name is " + this.name + ", I'm " + this.age + " years old");
  },
  ageNextYear: function () {
    alert(this.age + 1);
  },
};

//person2.ageNextYear();

//Arrays

const cars = ["Volvo", "BMW", "Reanault", "Ford"];

const numbers = [3456, 6789, 86759, 23456, 9707];

//console.log(cars[3]);
//console.log(numbers[1]);

//console.log(typeof cars);

const persons = [
  {
    name: "Christian",
    age: 31,
    greeting: function () {
      alert("Hi, my name is " + this.name + ", I'm " + this.age + " years old");
    },
    ageNextYear: function () {
      alert(this.age + 1);
    },
  },
  {
    name: "Carl",
    age: 28,
    greeting: function () {
      alert("Hi, my name is " + this.name + ", I'm " + this.age + " years old");
    },
    ageNextYear: function () {
      alert(this.age + 1);
    },
  },
  {
    name: "Luna",
    age: 2,
    greeting: function () {
      alert("Hi, my name is " + this.name + ", I'm " + this.age + " years old");
    },
    ageNextYear: function () {
      alert(this.age + 1);
    },
  },
];

persons[1].greeting();
