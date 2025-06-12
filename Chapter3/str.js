//! JavaScript String Methods
// Basic String Methods

//? The length Property
let text = 'HIJONYD';
// console.log(text.length);
// console.log(text.length);

// ?The charAt() Method
let text1 = 'HELLO JONAYED';
// console.log(text1.charAt(10));
// console.log(text1.charAt(6));

// ?The charCodeAt() Method
let text2 = 'Hi NASIR ISLAM';
// console.log(text2.charCodeAt(7));
// console.log(text2.charCodeAt(9));

// ?The at() Method
const name3 = 'NewPart YouTubel';
let letter = name3.at(5);
// let letter = name3.at(8);
// let letter1 = name3[1];
// console.log(letter);

// ?The slice() Method
let text4 = 'THIS IS MY NAME IS JONAYED NASIR ';
let part = text4.slice(19, 32);
let text5 = text4.slice(1, 7);
let text6 = text4.substring(1, 7);
// let part = text4.slice(7, 14);
// console.log(part);
// console.log(text4.slice(19, 32));
// console.log(text4.substring(19, 32));
// console.log(text5);
// console.log(text6);

//? String toUpperCase():
let text7 = 'Convert string to upper case';
let up = text7.toUpperCase();
// console.log(up);
// console.log(text7.toUpperCase());

//  ?String toLowerCase()
let text8 = 'HELLO WORLD!';
let lo = text8.toLowerCase();
// console.log(lo);
// console.log(text8.toLowerCase());

// ?The concat() Method
let text9 = 'Hello';
let text10 = 'World!';
let text12 = 'bangladhesh';
let con = text9.concat(' ', text10, ', ', text12);
// let text11 = text9.concat(' ', text10, ' ', text12);
// console.log(con);
// console.log(text11);

// ?The trim() Method
let text13 = '       jonayed nasri                       ';
// console.log(text13.trim());
// console.log(text13);
// console.log(text13.trim());

// ?The trimStart() Method
let text14 = '               JONAYED             ';
// console.log(text14.trimStart());

// ?The trimEnd() Method
let text15 = '    Nasir                  ';
// console.log(text15.trimEnd());

// ?The padStart() Method
let text16 = '9';
text16 = text16.padStart(3, '*');
// console.log(text16);

// ? The padEnd() Method
let text17 = '2';
text17 = text17.padEnd(3, '0');
// console.log(text17);

// ?The repeat() Method
let text18 = 'JONAYED,';
let result = text18.repeat(40);
// console.log(result);

//? The replace() Method
let text19 = 'Jobayer, Nasir';
let replac = text19.replace('a', 'b');
// console.log(replac);
// console.log(text19.replace('Jobayer', 'JONAYED'));

// ?The replaceAll() Method
let text20 = 'i love its cat ';
text20 = text20.replaceAll('i', 'b');
// console.log(text20);

// ?The split().Method
let text21 =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eaque incidunt doloremque, ullam autem';
const myArr = text21.split(' ');
// console.log(myArr.length);
// console.log(myArr);

// ?The indexOf() Method
let text22 =
  'Please locate where "locate" occur! Jonayed nasir, Jonayed Bagdadi';
text22 = text22.indexOf('where');
// console.log(text22);
// console.log(text22);

// ?The lastIndexOf() Method
let text23 =
  'please locate where locate occurs! Jonayed nasir, Jonayed Bagdadif';
text23 = text23.lastIndexOf('where');
// console.log(text23);

// ?The search() Method
let text24 = 'The search() method returns the position';
text24 = text24.search('search');
// console.log(text24);

//?The match() Method
let text25 = 'Jonayed nasir is a bigeinar web devloper web web';
text25 = text25.match('web');
// console.log(text25);

// ?The matchAll() Method
// let text26 = 'Jonayed nasir is a bigeinar web devloper web web';
// const resu = text26.matchAll(/web/g);
// console.log(resu);

let text26 = 'Jonayed nasir is a bigeinar web devloper web web';
const resu = text26.matchAll(/web/g); // ✅ এটি RegExp

for (const match of resu) {
  // console.log(match);
}
