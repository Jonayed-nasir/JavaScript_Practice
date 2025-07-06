// !JavaScript Errors

// try {
//   let result = x + 5;
//   console.log(result);
// } catch (errors) {
//   console.log('error caught:', errors.message);
// }

// console.log('hello nasir');

// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Can't divide by 0");
//   }
//   return a / b;
// }

// try {
//   let result = divide(10, 6);
//   console.log(result);
// } catch (err) {
//   console.log('Math Error', err.message);
// }

// let jsonString = '{ name: "Jonayed" }'; // ❌ invalid JSON

// try {
//   let data = JSON.parse(jsonString);
//   console.log(data);
// } catch (error) {
//   console.log("Invalid JSON Format:", error.message);
// }

// try {
//   let res = 10 / 0;
//   throw new Error('just testing!');
// } catch (err) {
//   console.log('error:', err.message);
// } finally {
//   console.log('this runs no matter what!');
// }

// try {
//   let c = e();
//   console.log(c);
// } catch (err){
//     console.log(err.message)
// } finally {
//   console.log('hello nasir');
// }

// let d = 'hello world!'
// console.log(d)


// function convertToNumber(str) {
//   // যদি str সংখ্যা না হয়, তাহলে error দাও
//   if (isNaN(str)) {
//     throw new Error("Must be a number!");
//   }
//   return Number(str);
// }

// try {
//   console.log(convertToNumber("abc"));
// } catch (e) {
//   console.log("Conversion Error:", e.message);
// }
