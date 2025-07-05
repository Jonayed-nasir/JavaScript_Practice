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

let numbers = [1, 2, 3, 4, 5];
let txt = '';
let doubled = numbers.map(function (value, index, array) {
  return value * 2;
});

// console.log(numbers);
// console.log(doubled);

let result = numbers.map((value) => value * 3);
// console.log(result);

//! 🧑‍💻 বাস্তব উদাহরণ

let names = ['jonayed', 'nasir', 'tefheema'];

let upperNames = names.map(function (name, index) {
  return name.toUpperCase();
});

// console.log(upperNames);

let numbers2 = [3, 6, 9];

let output = numbers2.map(function (value) {
  if (value % 2 == 0) {
    return value + ' is even';
  } else if (value % 2 == 1) {
    return value + ' is odd ';
  }
});

// console.log(output);
