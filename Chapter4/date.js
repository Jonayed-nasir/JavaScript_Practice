// !JavaScript Date Objects

// ?The new Date() Constructor
let date = new Date();
// console.log(date);

// ?The new Date() Constructor
let getFullYer = date.getFullYear();
// console.log(getFullYer);

// ?The getMonth() Method
let getMonth = date.getMonth();
// console.log(getMonth)

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const myDate = new Date();
let month = months[myDate.getMonth()];
// console.log(month)

// ?The getDate() Method
let getDate = date.getDate();
// console.log(getDate)

// ?The getHours() Method
let getHours = date.getHours();
// console.log(getHours)

// ?The getMinutes() Method
let getMinutes = date.getMinutes();
// console.log(getMinutes)

// ?The getSeconds() Method
let getSeconds = date.getSeconds();
// console.log(getSeconds)

// ?The getMilliseconds() Method
let getMilliseconds = date.getMilliseconds();
// console.log(getMilliseconds)

//? The getDay() Method
let getDay = date.getDay();
// console.log(getDay);

// Examples
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let day = days[date.getDay()];
// console.log(day)

// ?The getTime() Method
let getTime = date.getTime();
// console.log(getTime);

// ?The Date.now() Method
let now = Date.now();

// console.log(now);

//? The getTimezoneOffset() Method
let getTimezoneOffset = date.getTimezoneOffset();
// console.log(getTimezoneOffset)g
