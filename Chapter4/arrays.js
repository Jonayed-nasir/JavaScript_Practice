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
console.log(Array.isArray(mixed));
console.log(mixed);
// console.log(mixed.indexOf(true));
// console.log(mixed.length);
// console.log(mixed.length);
// console.log(mixed[3]);
