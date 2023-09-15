// //* bind function
// function greet(...args) {
//     console.log(args)
//   console.log(`welcome ${this.name} ${this.lastname}`);
//     // function formal(title){
//     //     console.log(`welcome ${title} ${name}`)
//     // }
// }
// const person = {
//   name: "zarp",
//   lastname: "zorp",
// //   greet:greet
// };
//// const gree=greet.bind(person,1,2,3,4,5)
// // gree()
// // person.greet()

//~ prototype
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.greet = function () {
//   console.log(`welcome ${this.name}`);
// };
// const person1 = new Person("zarp");
// person1.greet();

// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.makesound = function () {
//   console.log("some sound");
// };
// function Dog(name) {
//   Animal.call(this, name);
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.bark = function () {
//   console.log(`${this.name} hop hop!`);
// };
// const darchin = new Dog("darchin");
// darchin.bark();
// darchin.makesound();

//& call
// const car = {
//   model: "x22",
//   brand: "bmw",
// };
// const zarp = function (...args) {
//     console.log(args)
//   console.log(`${this.model} is a very good ${this.brand}`);
// };
// zarp.call(car,1,2,3,4,5);

//^ apply : just like call

// const car = {
//   model: "x22",
//   brand: "bmw",
// };
// const zarp = function (...args) {
//   console.log(args);
//   console.log(`${this.model} is a very good ${this.brand}`);
// };
// zarp.apply(car, [1, 2, 3, 4, 5]);

// console.log(Math.max.apply(null, [1, 2, 3, 4, 5, 6]));
// console.log(Math.min.apply(null, [1, 2, 3, 4, 5, 6]));

// function sum(...args) {
//   return args.reduce((total, current) => total + current, 0);
// }
// console.log(sum(1, 2, 3, 4, 5, 6));

