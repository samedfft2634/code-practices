// arrays iterations questions (forEach, map, filter, reduce)

/* --------------------------------------------- soru 1: --------------------------------------------- */
// bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız?

// let numbers1 = [1, 2, 3, 45, 65]
// sumNum = numbers1.reduce((accu,baslangic)=> sum = accu + baslangic) / numbers1.length
// console.log(`The numbers are: ${numbers1},\nThe sum of numbers: ${numbers1.reduce((a,b)=> a+b)},\nthe average of numbers: ${sumNum} `)

// soru 2: Soru: Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.
// let numbers3 = [1, 2, 3, 4, 5];
// let square = numbers3.map((a)=> a**2)
// console.log(square)
// console.log(numbers3)

// soru 3: Soru: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek sadece çift sayıları içeren bir başka dizi oluşturun.
// let numbers4 = [1, 2, 3, 4, 5];
// let square = numbers4.map((a)=> a**2).filter((a) => a % 2 === 0 && a)
//  console.log(square)

// soru 4: Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).
// let numbers5 = [1, 2, 3, 4, 5];
// let arr = [1, 2, 3, 4];
// let arr1 = [];
// arr.forEach((element) => {arr1.unshift(element);});
// console.log(arr1);

// soru 5: Soru: Bir dizi içindeki metin öğeleri içeren bir dizi verildiğinde, her öğeyi tersine çevirerek yeni bir dizi oluşturun.
// çıktı : ["tpircSavaJ", "nohtyP", "avaJ", "++C"]
// let words = ["JavaScript", "Python", "Java", "C++"];
// let reversedWords = words.map((lang)=> lang.split("").reverse().join(''))
// console.log(reversedWords)

// soru 6: Soru: Bir dizi içindeki asal sayıları filtreleyerek  yeni bir dizi oluşturun.
let numbers6 = [1, 2, 3, 8, 21, 23, 41, 44, 53];

// let b=0 ;
//  let a=parseInt(prompt("Asal olup olmadığını öğrenmek istediğiniz sayıyı giriniz:")) ;
//  for (i=1;i<=a;i++) {
// if (a%i==0) {
// b++ } } ;
//  if( b==2) {
// console.log("Girdiğiniz sayı asaldır") }
// else {
// console.log("Girdiğiniz sayı asal değildir.") }

// soru 7: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.

let numbers7 = [1, 2, 3, 4, 5];
let num1 = numbers7
	.map((a) => a ** 2)
	.filter((a) => a % 2 === 0)
	.map((a) => a * 2)
	.reduce((a, b) => a + b);
console.log(num1);
numbers7.reduce();
