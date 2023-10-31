//* 1 CAPITAL LETTERS: The purpose of this coding challenge is to capitalize the first letter of each word in the given long text.

// const text = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.`;


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
// 	array2[j] = array2[j].join"");(
// 	array3 = array2.join(" ");
// }
// console.log(array3);


// way 2

// const array = text.split(" ").map((a) => a[0].toUpperCase()+ a.slice(1).toLowerCase())
// console.log(array)
// const expectedText = array.join(" ")
// console.log(expectedText)



//* 2 You have an array of objects representing books, and each object has properties like "title," "author," and "rating." Your task is to create a JavaScript function that filters the books based on a specific rating threshold and then transforms the filtered books into a new array containing only the "title" and "author" properties of the selected books.


//Expected Output
[
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' }
]
const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', rating: 4.2 },
{ title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 4.6 },
{ title: '1984', author: 'George Orwell', rating: 4.0 },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.7 },
{ title: 'Pride and Prejudice', author: 'Jane Austen', rating: 4.5 },
{ title: 'Moby-Dick', author: 'Herman Melville', rating: 4.1 },
{ title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', rating: 4.8 },
{ title: 'The Hobbit', author: 'J.R.R. Tolkien', rating: 4.3 },
{ title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling',
rating: 4.7 },
{ title: 'Brave New World', author: 'Aldous Huxley', rating: 4.0 },
{ title: 'The Shining', author: 'Stephen King', rating: 4.2 },
{ title: 'The Da Vinci Code', author: 'Dan Brown', rating: 3.9 },
{ title: 'The Alchemist', author: 'Paulo Coelho', rating: 4.4 },
{ title: 'War and Peace', author: 'Leo Tolstoy', rating: 4.9 },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', rating: 4.5 },
{ title: 'The Odyssey', author: 'Homer', rating: 4.6 },
{ title: 'Frankenstein', author: 'Mary Shelley', rating: 4.2 },
{ title: 'The Hunger Games', author: 'Suzanne Collins', rating: 4.1 },
{ title: 'The Road', author: 'Cormac McCarthy', rating: 4.3 },
{ title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams',rating: 4.7 },
{ title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', rating: 4.8 },
];

const books2 = books.filter((b)=> b.rating >= 4).map((b)=>{
return {title: b.title, author: b.author}
})
console.log(books2)

//      or
const books3 = books.filter((b)=> b.rating >= 4).map((b)=>({title: b.title, author: b.author}))
console.log(books3)



