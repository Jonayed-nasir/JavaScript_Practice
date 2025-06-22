// !JavaScript if, else, and else if

const { esbuildVersion } = require('vite');

// ?if statement

let age = 17;

if (age >= 18) {
  //   console.log('tumake kajer jnno parchec kraholo');
}

//? else statement

if (age >= 18) {
  // console.log('tumake kajer jnno parchec kraholo');
} else {
  //   console.log('tumi akhoni kajer jonno parfect na!');
}

//? else if statement

let marks = 75;

if (marks >= 80) {
  //   console.log('You got A+');
} else if (marks >= 70 && marks < 60) {
  //   console.log('You got A');
} else {
  //   console.log('You got B');
}

let age2 = 10;
let country = 'Bangladesh';

if (country === 'Bangladesh' && age2 >= 20) {
  // console.log('You are Selected');
} else {
  // console.log('you are not Selected')
}

let password = 75489;

if (password === 75489) {
  // console.log('Password is correct');
} else {
  // console.log('password in not correct');
}

let slami = 1000;
if (slami <= 800) {
  // console.log('Slami is less than or equal to 800');
} else if (slami <= 600) {
  // console.log('Slami is less than or equal to 600');
} else {
  // console.log('Slami is greater than 500');
}
