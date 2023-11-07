/* ====================================================== */
/*                      DOM PRACTICES                     */
/* ====================================================== */
/* 1.
Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.
Sample HTML file :
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS DOM paragraph style</title>
</head> 
<body>
<p id ='text'>JavaScript Exercises - w3resource</p> 
<div>
<button id="jsstyle"
onclick="js_style()">Style</button>
</div>
</body>
</html>
*/

// const btn = document.getElementById("jsstyle")
// const par  = document.getElementById("text")

// function js_style() {
//     par.style.textDecoration = "underline"
// }

//  2.
// Write a JavaScript function to get the values of First and Last names of the following form.
// Sample HTML file :
// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Return first and last name from a form - w3resource</title>
// </head><body>
// <form id="form1" onsubmit="getFormvalue()">
// First name: <input type="text" name="fname" value="David"><br>
// Last name: <input type="text" name="lname" value="Beckham"><br>
// <input type="submit" value="Submit">
// </form>
// </body>
// </html>

// function getFormvalue() {
//     const first = document.getElementById("form1").firstElementChild.value
//     const first1 = document.querySelector("input:nth-child(1)").value
//     const last = document.getElementById("form1").querySelector("input").nextElementSibling.nextElementSibling.value
//     const last1 = document.querySelectorAll("input")[1].value
//     const last2 = document.querySelector("input:nth-child(3)").value
//     console.log(first)
//     console.log(last)
//     console.log(first1)
//     console.log(last1)
//     console.log(last2)
// }

// alternative way
// const submitBtn = document.getElementById("submitBtn");

// function getFormvalue() {
//   submitBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     const inputs = form1.querySelectorAll("input");

//     inputs.forEach((input) => {
//       console.log(input.value);
//     });
//   });
// }
// getFormvalue();

/* 3 
Here is a sample HTML file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.
*/
// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// </head>
// <body>
// <p><a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="https://www.w3resource.com/">w3resource</a></p>
// <button onclick="getAttributes()">Click here to get  attributes value</button>
// </body></html>

// function getAttributes() {
//     const b = document.getElementById("w3r")
//     console.log(b.getAttribute("type"))
//     console.log(b.getAttribute("href"))
//     console.log(b.getAttribute("hreflang"))
//     console.log(b.getAttribute("rel"))
//     console.log(b.getAttribute("target"))
// }

/* 4.
Write a JavaScript function to add rows to a table.
Sample HTML file :
<!DOCTYPE html>
<html><head><meta charset=utf-8 />
<title>Insert row in a table - w3resource</title>
</head><body>
<table id="sampleTable" border="1">
<tr><td>Row1 cell1</td>
<td>Row1 cell2</td></tr>
<tr><td>Row2 cell1</td>
<td>Row2 cell2</td></tr>
</table><br>
<input type="button" onclick="insert_Row()" value="Insert row"> 
</body></html>
*/

// function insert_Row() {
//     const table = document.getElementById("sampleTable")
//     let row = document.createElement("tr")
//     table.appendChild(row)
//     let cell = document.createElement("td")
//     row.appendChild(cell)
//     cell.setAttribute("colspan","2")
//     cell.textContent = "row3"
// }

/* 5
Write a JavaScript function that accepts a row, column (to identify a particular cell) and a string to update the cell's contents.
Sample HTML file :
<!DOCTYPE html>
<html><head><meta charset=utf-8 />
<title>Change the content of a cell</title>
</head><body>
<table id="myTable" border="1">
<tr><td>Row1 cell1</td>
<td>Row1 cell2</td></tr>
<tr><td>Row2 cell1</td>
<td>Row2 cell2</td></tr>
<tr><td>Row3 cell1</td>
<td>Row3 cell2</td></tr>
</table><form>
<input type="button" onclick="changeContent()" value="Change content">
</form></body></html>
*/
// const table = document.getElementById("myTable");
// const cells = table.querySelectorAll("td");
// function changeContent() {
// 	cells.forEach((td) => {
// 		td.textContent = "Hello world";
// 	});
// }
