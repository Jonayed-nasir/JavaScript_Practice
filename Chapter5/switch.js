// !JavaScript switch Case

let date = new Date();
let day = date.getDay();

switch (day) {
  case 0:
    console.log('Sunday');
    break;
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  default:
    console.log('Invalid day');
}

let d = 3;

switch (d) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  default:
    console.log('Invalid day');
    break;
}

//

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.every(myfunction);
function myfunction(value, index, array) {
  return value >= 1;
}

console.log(newArr);
