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

// way 2
// const replace = (text) => { return text.replace(/[aeıioöuü]/gi, "")}
// console.log(replace(input))

// way 3
// const filterText = (text) => {
//    let result =  text.split("").filter(i=> !(vowels.includes(i.toLowerCase()))).join("")
//    return result
// }
// console.log(filterText(input))

// way 4
// let output = input.split("").reduce((x, y) => {
// 	if (!(vowels.includes(y.toLowerCase()))) {
// 		x = [...x, y];
// 	}
//     return x;
// },[]).join("")

// console.log(output)


// way 5
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


// way 6
let input = "This website is for losers LOL!";
let vowels = ["a", "e", "i", "ı", "o", "ö", "u", "ü"];

let findConsonants = () => input.split("").map(a => vowels.includes(a.toLowerCase()) ? "" : a).join("");
console.log(findConsonants(input));