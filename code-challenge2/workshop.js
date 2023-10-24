//* 1 CAPITAL LETTERS: The purpose of this coding challenge is to capitalize the first letter of each word in the given long text.

const text = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.`;


// // way 1 
// const array = text.split(" ");
// console.log(array);

// const array2 = [];
// for (let i = 0; i < array.length; i++) {
// 	let splitted = array[i].split("");
// 	array2.push(splitted);
// }

// let array3;
// for (let j = 0; j < array2.length; j++) {
// 	array2[j][0] = array2[j][0].toUpperCase();
// 	array2[j] = array2[j].join("");
// 	array3 = array2.join(" ");
// }
// console.log(array3);


// way 2

const array = text.split(" ").map((a) => a[0].toUpperCase()+ a.slice(1).toLowerCase())
console.log(array)
const expectedText = array.join(" ")
console.log(expectedText)








