//1. Re-write the following if statements to use the ternary operator
//can be done in 1 line, if you merge the two if's
const age = 41;
const email = "jofh@kea.dk";

const isEven = age % 2 === 0 ? true : false;
const role = email === "jofh@kea.dk" ? (age > 40 ? "admin" : "visitor") : "visitor";
console.log(role);
// let isEven;
// if (age % 2 === 0) {
//   isEven = true;
// } else {
//   isEven = false;
// }

// let role = "visitor";
// if (email === "jofh@kea.dk") {
//   if (age > 40) {
//     role = "admin";
//   }
// }

// ------------------------------------------------------------------- //

//2. Re-write the following to arrow functions
// function setTitle(title) {
//   document.title = title;
// }

const setTitle = (title) => (document.title = title);
console.log(setTitle);

// function isEvenTwo(number) {
//   if (number % 2 === 0) {
//     return true;
//   }
//   return false;
// }

let number = 11;
const isEvenTwo = (number) => (number % 2 === 0 ? true : false);

console.log(isEvenTwo(number));

// function getRandBetween1and10() {
//   return Math.floor(Math.random() * 10) + 1;
// }

const getRandBetween1and10 = () => Math.floor(Math.random() * 10) + 1;
console.log(getRandBetween1and10());

// ------------------------------------------------------------------- //

//3. Re-write the following to arrow functions
const movies = [
  {
    name: "Hard Boiled",
    genre: "Hong Kong Action",
  },
  {
    name: "LOTR",
    genre: "Fantasy",
  },
];
// function showMovie(movie) {
//   console.log(`The movie ${movie.name} is a typical ${movie.genre} movie`);
// }

movies.forEach((showMovie) => {
  console.log(`The movie ${showMovie.name} is a typical ${showMovie.genre} movie`);
});

// ------------------------------------------------------------------- //

//4. Re-write the following to use map. Can you do implicit returns?
const searchengines = [
  { target: "https://google.com", name: "Google" },
  { target: "https://bing.com", name: "Bing" },
  { target: "https://yahoo.com", name: "Yahoo" },
];
let links = [];
searchengines.map((link) => {
  links.push(`<a href="${link.target}">${link.name}</a>`);
});
console.log(links);

// ------------------------------------------------------------------- //

//5. Follow the instructions
/* start by making a "bad" copy of this array 
by writing something like const myBadCopy = names;
then modify either array by changing one name
then console log both, what happened
*/

/* Then create a copy using the ... spread operator
modify either array and console log them, what happens now?
*/
const names = ["Jonas", "Dannie", "Peter", "Klaus"];

const myGoodCopy = [...names];

console.log(names);
console.log(myGoodCopy);

// ------------------------------------------------------------------- //
