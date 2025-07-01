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
