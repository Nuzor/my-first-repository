// let date = new Date();
// let min = date.getMinutes().toString();
// let hour = date.getHours().toString();
// let time = hour + '.' + min;
// console.log(time);

// let date = new Date();
// let hour = date.getHours()

// if(hour > 0.00 && hour <= 11.59){
//     document.write('Good morning Alumona')
// }
// else if(hour > 11.59 && hour <= 15.30){
//     document.write('Good afternoon Alumona')
// }
// else if(hour > 15.30 && hour <= 20.00){
//     document.write('Good evening Alumona')
// }
// else if(hour > 20.00 && hour <= 0.00){
//     document.write('Good Night Alumona')
// }

// const person = {
//     first_name:'Alumona',
//     age: 60,
//     class: 'PhD',
//     dob: 2012,
//     current_year: 2022,
//     current_age: function(){
//         return `this man is aged ${this.current_year - this.dob}`
//     },
//     description: function(){
//         return `${this.first_name} is a man aged ${this.age} and he is in ${this.class}`;
//     }
// }

// document.write(person.current_age());

// document.write(person.description());

// document.write(person.first_name + person.age + person.class);

// function calcAge(s, x){
//     document.write(`My age is ${s} and my name is ${x}`);
// }
// calcAge(19);

// const myfirstfunction = (s, x) => {
//     document.write(`My age is ${s} and my name is ${x}`);
// }

// function first(f, e){
//     document.write(`oranges are ${f} and apples are ${e} my fruits are ${f+e}`);
// }
// first(4, 5)

// arrow function
// const first = (f, e) => {
//     document.write(f+e);
// }
// first(4, 5)

// const first = (f, e) => {
//     return f+e;
// }
// document.write(first(4,5))
// OR
// const first = (f, e) => f+e;
// document.write(first(4,5))

const news = (x, l) => x+l;
document.write(news(1000000, 3500000))

const students = ["john", "sarah", "joy"];
document.write('<br>',students[0])

const studentInfo = [
    {
        name: "john",
        hobby: "drawing"
    }
   ,{
        name: "sarah",
        hobby: "singing"
    }
    ,{
        name: "joy",
        hobby: "dancing"
    }
]

document.write('<br>', studentInfo[2].hobby)

let sentence='';
for(let i = 10; i <= 100; i+=10){
    sentence+= `<br> there are ${i} in class today <br>`;
}
document.write(sentence);

// break and continue
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    document.write("The number is " + i + "<br>");
  }

  for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    document.write("The number is " + i + "<br>");
  }

  const staffInfo = [
    {
        name: "john",
        active: true,
        salary: 50000
    }
   ,{
        name: "sarah",
        active: true,
        salary: 60000
    }
    ,{
        name: "joy",
        active: false,
        salary: 50000
    }
    ,{
        name: "mary",
        active: true,
        salary: 70000
    }
    ,{
        name: "elsa",
        active: false,
        salary: 60000
    }
]
for(let arrIndex of staffInfo){
    if (arrIndex.active === false){continue}
    document.write(`<br> prepare salary for ${arrIndex.name} to be paid ${arrIndex.salary}`,'<br>');
}

// Length of the string
let fnames = "mik, nik, bol, min, nut, bil, gud, sef";
document.write(fnames.length, '<br>')

// slice
let text = "Apple, Banana, Kiwi";
document.write (text.slice(7,14), '<br>')

// replacing string content
let dust = 'Mr Daniel is a facilitator at the ICT Hub';
let newdust1 = dust.replace ('Daniel', 'John');
let newdust2 = newdust1.replace('facilitator', 'trainee');
document.write(newdust2)

// javascript string includes
var sentences = 'mr john is here'
document.write('<br>', sentences.includes('johns'))

// // converting number to string
// let ages = 1000
// console.log(typeof ages.toString())

// // converting string to number
// let agess = '1000'
// console.log(typeof number(agess))

// // converting string to number
// let agesss = '1000abc'
// console.log(parseInt(agesss))

// CONVERTING AN ARRAY TO STRING
const people = ['dave', 'dan', 'eli'];
console.log(people.toString())

// seperating with a delimeter using join
const peoplee = ['dave', 'dan', 'eli'];
console.log(peoplee.join('|'))

// Using the pop method removes the last element in that array
const peoplle = ['dave', 'dan', 'eli'];
// peoplle.pop
console.log(peoplle.pop())

// using the push method adds an additional entity to an array
const peope = ['dave', 'dan', 'eli'];
peope.push('nat')
console.log(peope)

// using the shift method removes the first entity of an array
const pepe = ['dave', 'dan', 'eli'];
pepe.shift()
console.log(pepe)

// concatenating arrays
const ppe = ['dave', 'dan', 'eli'];
ppe.push('nat')
const kids = ['sal', 'wey', 'bel']
const haha = people.concat(kids, students)
console.log(haha)

// Using splice method this adds entities to the array. the first number rep the position where it will be added and the second number rep the number of entities to be removed
const fruits = ['apple', 'orange', 'lemon']
fruits.splice(1, 0, 'kiwi', 'mango')
console.log(fruits)

// Using slice method this removes an entity from the array. the number in the bracket rep the number of entities to be removed
const fruit = ['apple', 'orange', 'lemon']
const citrus = fruit.slice(1)
console.log(citrus)

// Sorting numbers in ascending order
const result = [1,2,50,55,20,100,120]
console.log(result.sort(
    function(a,b){
        return a - b;
    }
))

// The forEach() method calls a function (a callback function) once for each array element. here, the display is the call back function
const reslt = [1,2,50,55,20,100,120,53,77,209]
const display = (value, index, array) =>
console.log(`this is an element ${index} : ${value}`);
result.forEach(
    display
    )

console.log(`.....................`)

// Ex of writing a callbackfn in a forEach   
    result.forEach(
        function(value, index){
            console.log(`this is an element ${index} : ${value}`);
        }
        )

// convert the above to an arrow function
result.forEach(
    (value, index) => console.log(`this is element ${index} : ${value}`)
)

// convert the above to an arrow function
result.forEach(

    (value, index) => {
        if(value%2 == 0)return console.log(`this ${value} is even`)
        console.log(`this ${value} is odd`)
    }
)

// javascript array map The map() method creates a new array by performing a function on each array element.
const result2 = result.map(myFunction);
function myFunction(value, index, array) {
  return value * 2;}
  console.log(result2)

// javascript array filter
const nameOfNoiseMakers = ['far', 'kal', 'loh', 'pij']
const consistentNameOfNoiseMakers = nameOfNoiseMakers.filter(
    (value, index, array) => {
        if(value =='kal') return `Take ${value} back home`;
    }
)
document.write('<br>', consistentNameOfNoiseMakers)


const over18 = result.filter(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
document.write('<br>', over18)


// class Car {
//     constructor(name, year, tyre,colour,fire_estinguisher) {
//       this.name = name;
//       this.year = year;
//       this.tyre = tyre;
//       this.colour = colour;
//       this.fire_estiguisher = fire_estinguisher;
//     }
//     age_of_car(){
//         let currentYearDate = new Date();
//         let currentYear = currentYearDate.getFullYear;
//         return currentYear - this.year;
//     }        
//   }
//     const myCar = new Car("Ford", 2014, true, 'red', false);
//   console.log("My car is a ${myCar.age_of_car()}")

class Car {
    constructor(name, year, tyre,colour,fire_estinguisher) {
      this.name = name;
      this.year = year;
      this.tyre = tyre;
      this.colour = colour;
      this.fire_estiguisher = fire_estinguisher;
    }
    age_of_car(modelYear){
        
        return modelYear - this.year;
    }        
  }
    let modelYear = 2022;
    const myCar = new Car("Ford", 2014, 4, 'red', false);
    document.write(`my car is a ${myCar.age_of_car(modelYear)}`)
//   console.log("My car is a ${myCar.age_of_car()}")



// Javascript class method
// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
  
//     }
//     age() {
//       let date = new Date();
//       return date.getFullYear() - this.year;
//     }
//   }
  
//   let myCar = new Car("Ford", 2014);
//   console.log("My car is " + myCar.age() + " years old.");


// class inheritance
class Driver extends Car {
    constructor(name, year, tyre, colour, fire_estinguisher, driver_name, quality){
        super(name, year, tyre, colour, fire_estinguisher)
        this.driver_name = driver_name;
        this.quality = quality;
    }
    try_this_out(){
        return `<br> ${this.driver_name} is the driver of this ${this.age_of_car(2022)} old car <br>`
    }
}
const exampleCar = new Driver('Ford', 2014, 4, 'red', false, 'Thomas', 'very good');
document.write(exampleCar.try_this_out())


class fuel extends Driver {
    constructor(name, year, tyre, colour, fire_estinguisher, driver_name, quality, type, size){
        super(name, year, tyre, colour, fire_estinguisher,driver_name,quality)
        this.type = type;
        this.size = size;
    }
    movement(){
        return `<br> ${this.driver_name} is the driver of this ${this.age_of_car(2022)} year old car that uses ${this.type} with a ${this.size} fuel tank`
    }
}
const exfuel = new fuel('Ford', 2014, 4, 'red', false, 'Thomas', 'very good', 'petrol', '20litres');
document.write(exfuel.movement())






// class Fuel extends Driver {
//     constructor(name, year, tyre, colour, fire_estinguisher, driver_name, quality, fuel_type, tank_size){
//         super(name, year, tyre, colour, fire_estinguisher, driver_name, quality)
//         this.fuel_type = fuel_type;
//         this.tank_size = tank_size;
//     }
//     movement(){
//         return `<br> The ${this.name} uses ${this.fuel_type} and has a ${tank_size} tank`
//     }
// }
// const exFuel = new Fuel('Ford', 2014, 4, 'red', false, 'Thomas', 'very good', 'petrol', '20litres');
// document.write(exFuel.movement())
