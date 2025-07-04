// !JavaScript Array Iterations
// ?JavaScript Array forEach()

const Info = ['jonayed', 'monir', 'shahed', 'sujon'];

let text = '';
Info.forEach(myFunction);
function myFunction(value, number, array) {
  text += value + '\n'
//   text += number+'\n'
//   text += array+'\n'
}
console.log(text);
