// !JavaScript Array Iterations
// ?JavaScript Array forEach()

const Info = ['jonayed', 'monir', 'shahed', 'sujon'];

let text = '';
Info.forEach(myFunction);
function myFunction(value, number, array) {
  text += value + '\n';
  //   text += number+'\n'
  //   text += array+'\n'
}
// console.log(text);

//? Javascritp Array map()

// let numbers = [1, 2, 3, 4, 5];
// let txt = '';
// let doubled = numbers.map(function (value, index, array) {
//   return value * 2;
// });

// console.log(numbers);
// console.log(doubled);

// let result = numbers.map((value) => value * 3);
// console.log(result);

//! 🧑‍💻 বাস্তব উদাহরণ

// let names = ['jonayed', 'nasir', 'tefheema'];

// let upperNames = names.map(function (name, index) {
//   return name.toUpperCase();
// });

// console.log(upperNames);

// let numbers2 = [3, 6, 9];

// let output = numbers2.map(function (value) {
//   if (value % 2 == 0) {
//     return value + ' is even';
//   } else if (value % 2 == 1) {
//     return value + ' is odd ';
//   }
// });

// console.log(output);

//? JvaScript Array flatMap()
// !✅ উদাহরণ 1: map() দিয়ে nested array হয়

// let arr = [1, 2, 3];

// let result = arr.map((x) => [x * 2]);
// console.log(result);

// let arr = [1, 2, 3];

// let result = arr.flatMap((x) => [x * 2]);
// console.log(result);

// ! ✅ উদাহরণ 2: একটি স্ট্রিং array কে split করা

// let lines = ['Hello world', 'JvaScript is fun'];

// let words = lines.flatMap((line) => line.split(' '));
// console.log(words);

// let lins = [
//   'I love JvaScript',
//   'flatMap is powerful',
//   'Practice makes perfect',
// ];

// let words = lins.flatMap((line) => line.split(' '));
// console.log(words);

// let users = [
//   { name: 'jonayed', tags: ['js', 'html'] },
//   { name: 'tefheema', tags: ['css', 'tailwind'] },
//   { name: 'nasir', tags: ['react', 'node'] },
// ];

// let output = users.flatMap(function (value) {
//   return value.tags;
// });

// console.log(output);

// let students = [
//   { name: 'A', subjects: ['math', 'english'] },
//   { name: 'B', subjects: ['science'] },
//   { name: 'C', subjects: ['history', 'geography', 'bangla'] },
// ];

// let output = students.flatMap(function (value) {
//   return value.subjects;
// });

// console.log(output);

// ?JavaScript Array filter()

// let numbers = [1, 2, 3, 4, 5, 6];

// let even = numbers.filter(function (n) {
//   return n % 2 === 0;
// });
// console.log(even); // [2, 4, 6]

// let people = [
//   { name: 'jonayed', age: 18 },
//   { name: 'jtefhema', age: 10 },
//   { name: 'nasir', age: 25 },
// ];

// let adults = people.filter((p) => p.age >= 18);
// // console.log(adults);

// let adultsNames = people.filter((p) => p.age >= 18).map((p) => p.name);
// console.log(adultsNames);

// let products = [
//   { name: 'Laptop', price: 800 },
//   { name: 'Mouse', price: 20 },
//   { name: 'Keyboard', price: 40 },
//   { name: 'Phone', price: 500 },
// ];

// let output = products.filter((p) => p.price < 100).map((p) => p.name);
// console.log(output);

// let products = [
//   { name: 'Laptop', price: 800 },
//   { name: 'Mouse', price: 20 },
//   { name: 'Keyboard', price: 40 },
//   { name: 'Phone', price: 500 },
// ];

// let output = products.filter((p) => p.price < 100);
// console.log(output);
