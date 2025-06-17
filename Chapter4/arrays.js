//! JavaScript Arrays

const mixed = ['jonayed', 'nasir', 34, true, false, null, undefined];

mixed[0] = 'jonayed hosain';
mixed[7] = 'newPart';
mixed.push('youTube');
mixed.unshift('01326277782');
// removeElement  end
mixed.pop();
mixed.pop();
mixed.pop();
mixed.pop();
// removeElement  start;
mixed.shift();
mixed.shift();
//
// console.log(Array.isArray(mixed));
// console.log(mixed);
// console.log(mixed.indexOf(true));
// console.log(mixed.length);
// console.log(mixed.length);
// console.log(mixed[3]);

// ?The toString() Method
const array1 = ['apple', 'banana', 'orange', 'grape', 'kiwi', 43];
let myList = array1.toString();
// console.log(myList);
// console.log(array1);
// console.log(array1.toString());

// ?The at() Method
const array2 = ['apple', 'banana', 'orange', 'grape', 'kiwi', 43];
// console.log(array2.at(1));
// let myFruit = array2.at(2);
// console.log(myFruit);

// console.log(array2.at(1));
// console.log(array2.at(-1));
// console.log(array1.at(-2))
// console.log(array1[-1])

// ?The join() method
const nameNum = ['jonayed', 75489, 'nasir', 'newPart'];
// console.log(nameNum.join(' * '));
// let myName = nameNum.join(', ');
// console.log(myName)

// ?The pop() method
const array3 = ['apple', 'banana', 'orange', 'grape', 'kiwi', 43];
// let lastElement = array3.pop()
// array3.pop()
// console.log(array3);
array3.pop();

// ?The push() method
const array4 = ['apple', 'banana', 'orange', 'grape', 'kiwi', 43];
// array4.push('75489');
// console.log(array4);
let lastElement = array4.push('haja');

// ?The shift() method
const array5 = ['apple', 'banana', 'orange', 'grape', 'kiwi', 43];
array5.shift();
let del = array5.shift();
// console.log(array5);

// ?The unShift() method
const array6 = ['apple', 'banana', 'orange', 'grape', 'kiwi', 43];
// array6.unshift('jonayed');
let unshif = array6.unshift('mango');
// console.log(array6);

// ?The delete() method
const array7 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

delete array7[0];
delete array7[1];
// console.log(array7)

//? The concat() method
const array8 = [1, 2, 3, 4, 5, 6];
const array9 = [7, 8, 9, 10];
const array10 = [11, 12, 13, 14, 15];

let joyen = array8.concat(array9, array10);
// console.log(joyen);
