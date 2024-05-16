const name = "shizashazi"
const value = 60
// console.log(name + value + " chanda"); this is old one 

console.log(`my name is ${name} and the value is ${value}`);

const newGame = new String('shazii-shazi-chnda')

// console.log(newGame[3]);

// console.log(newGame.__proto__);


// console.log(newGame.toUpperCase());
// console.log(newGame.charAt(4));
// console.log(newGame.indexOf('s'));
// console.log(newGame.substring(0, 3));


const anotherName = newGame.slice(0, -4)
console.log(anotherName);

let trim  = "    shazi    "
console.log(trim);
console.log(trim.trim());

const url = "https://shazii.com/shazii%20shiza"
console.log(url.replace(('%20'), ('-')));
console.log(url.includes('shiza'));



console.log(newGame.split('-'))

const figure = "good nice"
// let index = 3
console.log(figure.endsWith('nice'));
 
