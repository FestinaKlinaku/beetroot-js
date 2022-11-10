/* // Detyre shtepie

1. Request a user’s name and display the response “Hello, [name]”.
2. Request a user’s year of birth, count his age, and display the result. Store the current year as a constant.
3. Request a length of a side of a square from a user and display the perimeter of the square.
4. Request a radius of a circle and display the area of such a circle.
5. Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.
6. Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant.
7. A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive.
8. A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left.
9. The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest. */

/* // 1

let firstName = prompt('First name?');
let text = `Hello, ${firstName}`;
console.log(text); */

/* // 2

let birthYear = prompt('Birth year?') * 1;
const year = 2022;
let age = year - birthYear;
console.log(age); */

/* // 3

let square = prompt('Add side length') * 1;
console.log(square * 4);  */

/* // 4

let radius = prompt('Radius of circle?') * 1;
const pi = 3.14;
console.log(pi * radius * radius); */ 

/* // 5

let distance = prompt('Distance in km between the two cities?');
let time = prompt('The time you want to cover it within?');
let velocity = distance / time;
console.log(velocity); */

/* // 6

let usd = prompt('Currency in USD?') * 1;
const e = 0.98;
let eur = usd * e;
console.log(eur); */

/* // 7

let memoryGB = prompt('Flash drive memory in GB') * 1;
let memoryMB = memoryGB * 1000;
let count = memoryMB / 820;
console.log(count); */

/* // 8

let money = prompt('Money?') * 1;
let cPrice = prompt('Price of chocolate?') * 1;
let remainder = money % cPrice
let nc = Math.floor(money / cPrice);
console.log(`Number of chocolate = ${nc}
Money left = ${remainder}`); */

/* // 9

let p = prompt('Sum of bank deposits?') * 1;
const r = 0.05;
const t = 0.166667;
let a = p * (1 + r * t);
let i = p * r * t;
console.log(`Total amount = ${a}
Interest amount = ${i}`); */