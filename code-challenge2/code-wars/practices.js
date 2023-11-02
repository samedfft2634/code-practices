// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// let input = "This website is for losers LOL!";

// let vowels = ["a", "e", "i", "ı", "o", "ö", "u", "ü"];
//! way 1
// function removeVowels(text) {
//     let newArr = text.split("")
//     let lastArr = []
//     for (let i = 0; i < newArr.length; i++) {
//         if(vowels.indexOf(newArr[i].toLowerCase()) === -1){
//             lastArr.push(newArr[i])
//         }

//     }
//     return lastArr.join("")
// }
// console.log(removeVowels(input))

//! way 2
// const replace = (text) => { return text.replace(/[aeıioöuü]/gi, "")}
// console.log(replace(input))

//! way 3
// const filterText = (text) => {
//    let result =  text.split("").filter(i=> !(vowels.includes(i.toLowerCase()))).join("")
//    return result
// }
// console.log(filterText(input))

//! way 4
// let output = input.split("").reduce((x, y) => {
// 	if (!(vowels.includes(y.toLowerCase()))) {
// 		x = [...x, y];
// 	}
//     return x;
// },[]).join("")

// console.log(output)

//! way 5
// let findVovelLetter=()=>{
//     return input.split("").map((harf)=>{
//       if(vowels.includes(harf)){
//       return "";

//       }else{
//         return harf;
//       }

//     }).join("")

//   }

//   console.log(findVovelLetter());

//! way 6
// let input = "This website is for losers LOL!";
// let vowels = ["a", "e", "i", "ı", "o", "ö", "u", "ü"];

// let findConsonants = () => input.split("").map(a => vowels.includes(a.toLowerCase()) ? "" : a).join("");
// console.log(findConsonants(input));

// teamwork question
//! 1. High Priced Product Categories
// You are given an array of objects representing a collection of products, each with a name, price, and
// category. Your task is to use map, filter, and reduce to calculate the average price of products in each
// category, and then return an array of objects containing only the categories that have an average price
// above 50.
// Sample input :
// const products = [
// 	{ name: "Product 1", price: 20, category: "Electronics" },
// 	{ name: "Product 2", price: 30, category: "Clothes" },
// 	{ name: "Product 3", price: 40, category: "Electronics" },
// 	{ name: "Product 4", price: 50, category: "Clothes" },
// 	{ name: "Product 5", price: 60, category: "Clothes" },
// 	{ name: "Product 6", price: 70, category: "Electronics" },
// 	{ name: "Product 7", price: 80, category: "Clothes" },
// 	{ name: "Product 8", price: 300, category: "Electronics" },
// ];

// // Expected outcome :
// [
// 	{ category: "Clothes", average: 55 },
// 	{ category: "Electronics", average: 55 },
// ];

// const averageItems = (arr) => {
//     let elc = arr.filter((product => product.category === "Electronics")).reduce((acc,sum)=>acc+sum.price,0)/ arr.filter((a => a.category === "Electronics")).length
//     let cloth = arr.filter((product => product.category === "Clothes")).reduce((acc,product)=> acc+product.price,0) /arr.filter((product => product.category === "Clothes")).length
//     return [{category: "Clothes", average: cloth},{category: "Electronics", average: elc}]
// }
// console.log(averageItems(products))




//! 2. HR VS IT Department
// Task : You are given an array of objects representing a collection of employees, each with a name, salary,
// and department. Your task is to use map, filter, and reduce to calculate the average salary for each
// department and then return an array of objects containing only the departments that have an average
// salary above 65000.
// Sample input :
// const employees = [
// 	{ name: "John", salary: 50000, department: "IT" },
// 	{ name: "Jane", salary: 60000, department: "HR" },
// 	{ name: "Bob", salary: 55000, department: "IT" },
// 	{ name: "Sophie", salary: 75000, department: "HR" },
// 	{ name: "Mike", salary: 65000, department: "IT" },
// 	{ name: "Emily", salary: 80000, department: "HR" },
// 	{ name: "David", salary: 70000, department: "IT" },
// ];
// Expected outcome :
// [
//     { department: 'HR', average: 71666 }
//     ]
