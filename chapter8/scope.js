//! JavaScript Scope
// *🧱 JavaScript-এ Scope এর ধরন ৩টা:
/*
 🔹 Global Scope	
 🔸 Function Scope	
 🔹 Block Scope	
*/

//? global Scope

let name = 'jonayed';

function sayName() {
  console.log(name);
}
// sayName(); // jonayed

// 🔹 যেহেতু name বাইরে ডিক্লেয়ার করা হয়েছে, এটা global, তাই যেকোনো জায়গা থেকে পাওয়া যাবে।

//? Function Scope
function greetI() {
  let message = 'Hello!';
  //   console.log(message);
}
greetI();
//  ❌❌ console.log(message) ❌❌
//🔸 message শুধুমাত্র greet() ফাংশনের ভিতরেই কাজ করে। বাইরে গেলে "undefined" হয়ে যাবে।

//? Block Scope (let, const)
{
  let age = 18;
  const name = 'tefheema';
  var city = 'dhaka';
}

// console.log(age); // ❌ Error
// console.log(name); // ❌ Error
// console.log(city); // ✅ Dhaka (var is NOT block scoped)

// 🔹 let ও const block scoped — তারা শুধু {} এর ভিতর কাজ করে।

