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
