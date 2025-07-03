// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// let perso = new Person('jonayed', 'nasir');

// console.log(perso.firstName);
//! js function]

// function myFunction(name, name2) {
//   console.log(name, name2);
// }

// myFunction('Hello NewPart YouTube channale', 'Jonayed Nasir');
// myFunction('hi', 'hello');
// myFunction(12, 13)

// function pr(a, b, d){
//   return a + b + d;
// }

// let sum = pr(10, 20, 32);
// console.log(sum)

// function per() {
//   const person = {
//     name: 'jonayed',
//     fullName: 'Jonayed Nsir',
//   };
//   let con = '';
//   for (let i in person) {
//     con += [i] + '\n';
//   }
//   console.log(con);
// }

// per();

// ?function are First class citizen
//? storing functions in variables

// function myFunction(a, b) {
//   return a + b;
// }

// let sum = myFunction;
// console.log(sum(4, 6));
// console.log(myFunction(45, 3));

// function fun(c, d) {
//   return c * d;
// }
// let meni = fun;
// console.log(meni(42, 4));
// console.log(fun('2', '11'));

//? nestex function

// function jonayed(a) {
//   function nasir(b) {
//     function newPart(c) {
//       console.log(a, b, c);
//     }
//     newPart('Jobayer: fuondar of newPart ');
//   }
//   nasir('Jonayed: newPart compani');
// }

// jonayed('Jonayed: c.o of newPart');

//? another function

// function add(a, b) {
//   return a + b;
// }

// let sum = add;

// function average(a, b, fun) {
//   return fun(a, b) * 2;
// }

// let result = average(2, 4, sum);

// console.log(result)

// function fetchData(callback) {
//   let data = 42;
//   callback(data);
// }

// fetchData(function(result) {
//   console.log("Result:", result);
// });

// ?Javascrit anonymous function

// (function () {
//   console.log('Hello Jonayed Nasir How you do ');
// })();

// let show = function () {
//   return 'Hello Nasir';
// };

// console.log(show());

// let rifat = function (a, b) {
//   return a + b;
// };

// let sum = rifat(27, 15);
// console.log(sum)

//? pass-by-value or pass-by-reference
//? pass-by-value of primitives values

// function square(x) {
//   x = x * x;
//   return x;
// }

// let y = 10;
// let result = square(y);
// console.log(result);
// console.log(y)

let person = {
  name: 'Jonayed',
  age: 18,
};

// function increaseAge(obg) {
//   obg.age += 2;
//   obg.name = 'Nasir';
// }

// increaseAge(person);
// console.log(person.age);
// console.log(person.name);

// let person2 = {
//   name: 'John',
//   age: 25,
// };

// function increaseAge(obj) {
//   obj.age += 1;

//   // reference another object
//   obj = { name: 'Jane', age: 22 };
// }

// increaseAge(person2);

// console.log(person2);

// let product = {
//   name: 'phon',
//   prich: 1000,
// };

// function discount(obg) {
//   obg.prich -= 200;
// }
// discount(product)

// console.log(product.prich)

// let redMurk = { ...product };

// function discount(obg) {
//   obg.prich -= 100;
// }

// discount(product);

// console.log(product);
// console.log(redMurk);
// let a = 10;

// function changeValue(b) {
//     b = 20;
// }
// changeValue(a);
// console.log(a);

//? JavaScript Recursive Function

// function recurse() {
//   //...
//   recurse();
//   //...
// }

// function factorial(n) {
//   if (n === 1) return 1;
//   return n + factorial(n - 1);
// }

// console.log(factorial(5));

// 5! = 5 + 4 + 3 + 2 + 1
