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
