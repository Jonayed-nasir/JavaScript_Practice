//! For Loops

//! for loop er gthon
// for (initializer, condition, increment){
//
//}
//!

//*
// for (let i = 1; i <= 10; i++){
// console.log(`${i} : Jonayed Nasir`)
// }
//*

// for (let i = 0; i < 100; i += 3) {
//     console.log(`${i} :'Jonayed nasir'`);
// }

// step number on not` common
// for (let i = 2; i <= 100; i += 2) {
//   console.log(i);
// }

// step number 2 common
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is Event Number`);
//   }
// }

// odd number caowont
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 1) {
//     console.log(`${i} is odd number`);
//   }
// }

// sum number
// let sum = 0;
// for (let i = 0; i <= 5; i++) {
//   console.log(sum + ' + ' + i + ' = ' + (sum + i));
//   sum += i;
// }

// console.log('result = ' + sum);

//!*

// let sum = 1;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${sum} * ${i} = ${sum * i}`);
//   sum *= i;
// }

// console.log(`result = ${sum}`);

//? while Loop
// let i = 0;
// while (i < 10) {
//   console.log('hello jonayd nasir');
//   i++
// }

// let i = true;
// while (i) {
//     let rand = Math.floor(Math.random() * 10 + 1);
//     if (rand == 9) {
//         console.log('Winner Winner Chicken Dinner' + rand);
//     i = false;
//   } else {
//     console.log('You have got' + rand);
//   }
// }
// let i = 0
// while (i < 10) {
//   console.log(i + ' hello jonayd nasir');
//     i++;
// }

// ?for in loop

// const person = {
//   firstName: 'Jonayed',
//   lastName: 'nasir',
//   age: '18',
//   width: '6fit',
// };
// let text = '';
// for (let x in person) {
//   text += person[x] + '\n';
// }

// console.log(text);

// let tex = ''
// for (let x in person){
//     tex += `${x} : ${person[x]} \n`
// }
// console.log(tex)

//? The forEach() method
// const number = [2, 3, 4, 5, 6, , 7, 87];
// let txt = '';
// number.forEach(myFunction);

// function myFunction(value, index, array) {
//   return (txt += `${value} \n`);
// }

// console.log(txt)

//? for of loop
// let txt = '';
// let number = [13, 2,53, 47, 59, 65, 73, 82, 91];
// let number = ['jonayed', 'nasir', 'new part']
// for (let x of number) {
//   txt += x + '\n'
// }
// console.log(txt)
// let text = "jonayed nasir is a web deboloper"
// let txt = '';
// for (let x of text) {
//   txt += x + '\n';
// }

// console.log(txt);
