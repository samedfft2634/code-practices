// 2. Write a JavaScript program to print the current window contents.  window.print(); 

// 3. Write a JavaScript program to get the current date.  
// const expectedOutput = "mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy"

// let day = new Date().getDate()
// let month = new Date().getMonth() + 1
// let year = new Date().getFullYear()

// const currentDate1 = [month,day,year].join("-")
// const currentDate2 = [month,day,year].join("/")
// const currentDate3 = [day,month,year].join("-")
// const currentDate4 = [day,month,year].join("/")
// console.log(currentDate1,currentDate2,currentDate3,currentDate4)

/* 4.
 Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
*/
// const a  = 5;
// const b = 6
// const c = 7;

// const h = (a+b+c)/2
// const root = Math.sqrt(h*(h-a)*(h-b)*(h-c))
// console.log(root)

/* 5.
 Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front. 
*/
// const sample = "w3resource"

// const reversed = sample.split("").reverse().join("")
// console.log(reversed)

/* 6.
Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  
*/
// let leap = parseInt(prompt("Is it a leap year ? :"))
// if(leap % 4 == 0 && (leap % 100 != 0 || leap % 400 == 0)){
//      console.log(`${leap} is a leap year!`)
// }else {
//     console.log(`${leap} is not a  leap year!`)
// }