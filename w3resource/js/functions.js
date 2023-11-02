/* 16.
 Write a JavaScript function to extract unique characters from a string.
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
*/

// let exampleString = "thequickbrownfoxjumpsoverthelazydog"
// let expectedOutput = "thequickbrownfxjmpsvlazydg"

// let findUniques = (text) => {
//     let result = ""
//     for (let i = 0; i < text.length; i++) {
//         if (!(result.includes(text[i]))) {
//             result += text[i]
//         }
//     }
//     return result
// }
// document.write(findUniques(exampleString))
// document.write("<br>")
// document.write(findUniques(exampleString) === expectedOutput)

/* 
17. Write a JavaScript function to get the number of occurrences of each letter in a specified string.
*/
/*
let exampleString = "thequickbrownfoxjumpsoverthelazydog"
let frequences = (text) => {
    let result = {}
    for (let i  = 0; i  < text.length; i ++) {
        if(Object.keys(result).includes(text[i])){
            result[text[i]] +=1
        } else {
            result[text[i]] = 1
        }
        
    }
    return result
}
console.log(frequences(exampleString))
*/

/* 18 
Write a function for searching JavaScript arrays with binary searches.
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
*/

// let numbers = Array(100).fill(1).map((eleman)=> Math.floor(Math.random()  *100))
// let aranan = 4;
// let binarySearch = (array) => {
// 	let sorted = array.sort((a, b) => a - b); // sort() mutable method so do not need variable.
// 	let first = 0;
// 	let last = sorted.length - 1;

// 	for (let i = 0; i < sorted.length; i++) {
// 		let guess = Math.floor((first + last) / 2);
// 		console.log(`${i + 1}.tahminim : ${sorted[guess]}`);
// 		if (aranan == sorted[guess]) {
// 			return sorted[guess];
// 		} else if (aranan < sorted[guess]) {
// 			last = guess - 1;
// 		} else {
// 			first = guess + 1;
// 		}
// 	}
// 	return "Oyle bir eleman yok.";
// };
// console.log(binarySearch(numbers));

/* 19.
Write a JavaScript function that returns array elements larger than a number.
*/

// let sampleArray = Array(10).fill(1).map((eleman,indis)=> eleman + indis)
// let target = 5
// console.log(sampleArray)

// let largerThan = (array, number) => array.filter((eleman)=> eleman > number)
// console.log(largerThan(sampleArray, target))

/* 20.
Write a JavaScript function that generates a string ID (specified length) of random characters.
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/
/* 
let sampleCharacterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let target = 12;

let stringGenerar = (text,number) => {
    let result = ""
    for (let i = 0; i < number; i++) {
        result += text[Math.floor(Math.random()*text.length]
    }
    return result
}
console.log(stringGenerar(sampleCharacterList, target))
*/

/* 21.
Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
Sample array : [1, 2, 3] and subset length is 2
Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
*/

// let sampleArray = [1, 2, 3];
// let subSets = (array, number) => {
// 	let result = [];
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = i + 1; j < array.length; j++) {
// 			result.push([array[i], array[j]]);
// 		}
// 	}
// 	return result;
// };
// console.log(subSets(sampleArray, 2));

/* 22.
Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
Sample arguments : 'w3resource.com', 'o'
Expected output : 2
*/

// let sampleArgumets = 'w3resource.com';
// let targetLetter = "o"

// let amount = (text, letter) => {
//     let count = 0;
//     for (let i = 0; i < text.length; i++) {
//         if(text[i] == letter){
//             count++
//         }
        
//     }
//     return `${sampleArgumets} stringinde ${targetLetter} harfi tami tamina ${count} adet bulunmaktadir.`
// }
// console.log(amount(sampleArgumets,targetLetter))

/* 23.
Write a JavaScript function to find the first not repeated character.
Sample arguments : 'abacddbec'
Expected output : 'e'
*/
/*
let sampleArguments = 'abacddbect'
let unique = (text) => text.split("").find((eleman)=> text.indexOf(eleman) == text.lastIndexOf(eleman))
console.log(unique(sampleArguments))
*/

/* 24.
Write a JavaScript function to apply the Bubble Sort algorithm.
Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/
// stayed here
