//* ----------------------------------------------  1. ---------------------------------------------- */
//* Soru: Verilen bir dizi içindeki tek sayıları bulup yeni bir diziye ekleyin.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const oddNumbers = []
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 !== 0){
//             oddNumbers.push(numbers[i])
//         }
//     }
//     console.log(oddNumbers)

//* ------------------------------------------------ 2. ----------------------------------------------- */
//*Soru: Bir dizi içindeki sayıları büyükten küçüğe sıralamak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?
// let numbers1 = [8, 4, 6, 2, 9, 5, 7];
// console.log(numbers1.sort((a,b) => b - a))

//* ------------------------------------------------ 3. ----------------------------------------------- */
//*Soru: Bir dizi içindeki metin öğelerini birleştirerek tek bir metin oluşturmak için hangi dizi yöntemini ve diziyi nasıl kullanırsınız?
// let words = ["Merhaba", "dünya", "bu", "bir", "örnektir"];
// let joinedWords = words.join(" ")
// console.log(joinedWords)

//* ------------------------------------------------ 4. ----------------------------------------------- */
//*Soru: Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.
// let sentence = "JavaScript harika bir dil";
// let reversedSentence = sentence.split(" ").reverse().join(" ")
// console.log(reversedSentence)

//* ------------------------------------------------ 5. ----------------------------------------------- */
//*Soru: Bir metinde "u" harfini içeren kaç kelime olduğunu bulmak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?
// let text = "There are many shorthand techniques in JavaScript that can shorten the code length, reduce redundancy, and improve the readability and maintainability of the code. This article will introduce 20 JS abbreviation techniques to improve efficiency, helping you say goodbye to the shit mountain and write elegant code easily!";
// const Utext = []
// for (let i = 0; i < text.length; i++) {
//     if(text[i] === "u"){
//         Utext.push(text[i])
//     }
// }
// console.log(Utext.length)

//* ------------------------------------------------ 6. ----------------------------------------------- */
//*Soru: İki dizi içindeki ortak elemanları bulup yeni bir dizi oluşturun?
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];
// const intersectionArr = []

// for (let i of arr1) {
//     for(let j of arr2){
//         if(i===j){
//             intersectionArr.push(i)
//         }
//     }
// }
// console.log(intersectionArr)

// for (let i of arr1) {
//     if (arr2.includes(i)) {
//         intersectionArr.push(i);
//     }
// }

// console.log(intersectionArr);

//* ------------------------------------------------ 7. ----------------------------------------------- */
//*Bir isim listesindeki isimlerden ilk 10 ve son 10 ismi çıkartarak yeni bir sıralı liste oluşturun.
// let isimListesi = ["Ali", "Ayşe", "Mehmet", "Fatma", "Hasan", "Zeynep", "Emre", "Selin", "Mustafa", "Elif", "Baran", "Gamze", "Eren", "Dilara", "Burak", "Pınar", "İsmail", "Sibel", "Murat", "Gülşah", "Ahmet", "Hatice", "Kemal", "Sevgi", "Yusuf", "Aslı", "Can", "Zehra", "Onur", "Ebru", "Serkan", "Nazlı", "Cemal", "Gonca", "Ercan", "Esra", "Hakan", "Nur"];
// for (let i = 0; i < 10; i++) {
//    isimListesi.shift()
// }
// for (let i = 0; i < 10; i++) {
//    isimListesi.pop()
// }
// console.log(isimListesi)
// console.log(isimListesi.length)
