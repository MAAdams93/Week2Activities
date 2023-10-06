//Part 1 Activity 1 (Base goadl completed. Strecth goal incomplete)
console.log(`   |   |   `);
console.log(`   |   |   `);
console.log(`   |   |   `);
console.log(`-----------`);
console.log(`   |   |   `);
console.log(`   |   |   `);
console.log(`   |   |   `);
console.log(`-----------`);
console.log(`   |   |   `);
console.log(`   |   |   `);
console.log(`   |   |   `);

//Part 2 Activity 1
let name = 'Mark';
let age = '30';
let favouriteColour = 'black';

console.log("Hello, my name is " + name + ", I am " + age + " years old, and my favourite colour is " + favouriteColour +".");

name = 'Vulpe';
age = '31';
favouriteColour = 'red';

console.log(`People call me ${name}. I am ${age} years old. Everywhere I go turns my favourite colour: ${favouriteColour}.`);

//Part 2 Activity 2
let breakfast = 'cereal';
let lunch = 'pastry';
let tea = 'pizza';

console.log(`Today I ate ${breakfast} for breakfast, then a ${lunch} for lunch, and a ${tea} for tea.`);

breakfast = 'toast';
lunch = 'sandwich';
tea = 'pasta';

console.log(`Tomorrow I will have ${breakfast} for breakfast, a ${lunch} for lunch, and some ${tea} for tea.`);

//Part 2 Activity 3
const date1 = new Date('2023-10-02');
const date2 = new Date('2024-05-10');

let differenceInTime = date2-date1; 
let differenceInDays = differenceInTime/(1000 * 3600 * 24);

console.log(`The total number of days until my brithday is ${differenceInDays}`);

//Part 2 Activity 4
var space1 = 'X';
var space2 = 'O';
var space3;
var space4 = 'X';
var space5 = 'x';
var space6;
var space7 = 'O';
var space8;
var space9;

console.log(`   |   |   `);
console.log(` ${space1} | ${space2} |   `);
console.log(`   |   |   `);
console.log(`-----------`);
console.log(`   |   |   `);
console.log(` ${space4} | ${space5} |   `);
console.log(`   |   |   `);
console.log(`-----------`);
console.log(`   |   |   `);
console.log(` ${space7} |   |   `);
console.log(`   |   |   `);

//Part 3 Activity 1
let ageTwo = 18;
let country = "US"

if (ageTwo >= "17" && country == "UK") {
    console.log("Yes, I can serve you.")
} else {
    console.log("No, I can't serve you.")
}

//Part 3 Activity 2
var ingredient = "bacon";

switch(ingredient) {
    case "pepperoni":
    case "mushroom":
    case "bacon":
        console.log(`I don't like ${ingredient} on pizza.`);
        break;
    case "peppers":
    case "onions":
    case "prawns":
        console.log(`I don't mind ${ingredient} on pizza.`);
        break;
    case "chicken":
        console.log(`I like ${ingredient} on pizza.`)
}

//Part 3 Activity 3
var password = "Hello";


if (password.length >= 8) {
    console.log("Password is good")
} else {
    console.log("Password is bad")
}

//Part 3 Activity 4
var num = 15;

if (num %3 == 0 && num %5 == 0) {
    console.log("fizz buzz")
} if (num %3 == 0 && num %5 != 0) {
    console.log("fizz")
} if (num %5 == 0 && num %3 != 0) {
    console.log("buzz")
} else[
    console.log(num)
]

//Part 3 Activity 5
var num = "1001";

function isPalindrome(num) {
    var j = num.length-1
    for(var i=0; i<num.length/2; i++){
        if(num[i]!=num[j]){
            return false;
        } else {
            return true;
        }
        j--;
    }
}

console.log(isPalindrome(num));

//Part 3 Activity 6
var time = 19;
var placeOfWork = "at work.";
var townOfHome = "at home.";
var currentLocation = "";

if  (time >= 9 && time <=17) {
   currentLocation = (placeOfWork);
} else if (time <= 8 || time >= 18) {
    currentLocation = (townOfHome);
}

console.log(`The time is ${time}. I am ${currentLocation}`)

//Part 3 Activity 7
let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let vowels = ["a", "e", "i", "o", "o"];

let arr = string.split("").reverse();
let indexOfLastVowelInReverse = arr.findIndex(e => vowels.includes(e))

if(indexOfLastVowelInReverse != -1) {
  let index = string.length-1-indexOfLastVowelInReverse
  console.log(`Last vowel found at index ${index}: ${string[index]}`)
}

//Part 3 Activity 8
var word = "eyes";

function isPalindrome(word) {
    var j = word.length-1
    for(var i=0; i<word.length/2; i++){
        if(word[i]!=word[j]){
            return false;
        } else {
            return true;
        }
        j--;
    }
}

console.log(isPalindrome(word));

//Part 3 Activity 9
var num1 = 4;
var num2 = 8;

const number = (num1 + num2);

if(number %2 == 0){
    console.log("Number is even")
}

else{
    console.log("Number is odd")
}
//Part 4 Activity 1
let favouriteFilms = [
    "Spider-Man: Into The Spider-Verse", 
    "Beauty and the Beast", 
    "Batman: Mask of the Phantasm", 
    "Toy Story 2"
];
console.log(favouriteFilms);

favouriteFilms.push("Hot Fuzz");
favouriteFilms.push("Die Hard");
console.log(favouriteFilms);

favouriteFilms.pop();
console.log(favouriteFilms);

for (let i = 0; i < favouriteFilms.length; i++) {
    console.log(favouriteFilms[i]);
}

let x = 0;
while (x < favouriteFilms.length) {
    console.log(favouriteFilms[x]);
    x++;
}

//Part 4 Activity 2
var min = 1;
var max = 50;
function getRandomArbitrary(random) {
    return Math.random() * (max - min) + min;
  }
  
for (let i = 0; i < 6; i++) {
    console.log(getRandomArbitrary());
}

//Part 4 Activity 3
function countdown() {
    for (let countdown = 9; countdown >= 1; countdown--) {
        console.log (countdown);
    }
}

countdown();

//Part 4 Activity 4
let films = [
    "Die Hard",
    "Deadpool",
    "Ghostbusters",
    "The Fifth Element"
];

for (let i = 0; i < films.length; i++) {
    console.log(films[i]);
};

if (films[2] != "Ghostbusters"){
    console.log("Somebody get me the Ghostbusters!")
} else {
    console.log("We're the one, we're the only...Ghostbusters!")
}

//Part 4 Activity 5
var min = 1;
var max = 30;
function getRandomArbitrary(random) {
    return Math.random() * (max - min) + min;
  }
  
  console.log(getRandomArbitrary());
  console.log(getRandomArbitrary());
  console.log(getRandomArbitrary());

//Part 4 Activity 6


//Part 4 Activity 7


//Part 5 Activity 1


//Part 5 Activity 2 (INCOMPLETE)
let orderCount = 0;

const takeOrder = (topping, orderCount) => {
    console.log(`Pizza with ${topping}. You have ordered ${orderCount} pizzas.`);
    orderCount++;
}

takeOrder("pineapple");

//Part 5 Activity 3 (INCOMPLETE)
let accnum = "50449921";

const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from ${accnum}`);
}

cashWithdrawal(300, accnum)

//Part 6 Activity 1
const person = {
    personName: "Mark",
    age: 30,
    favouriteFilms: ["Spider-Man: Into The Spider-Verse", "Beauty and the Beast", "Batman: Mask of the Phantasm", "Toy Story 2"]
}

console.log(person['personName']);

const sayHi = () => {
    console.log(`Hi, my name is ${person.personName}.`);
}

for (let i = 0; i < person.favouriteFilms.length; i++) {
        console.log(person.favouriteFilms[i]);
    }

sayHi();

//Part 6 Activity 2
const pet = {
    petName:"Lily",
    typeOfPet:"Dog",
    petAge:"5",
    colour:"White"
};

const petEating = () => {
    console.log(`${pet.petName} is eating.`)
}

const petDrinking = () => {
    console.log(`${pet.petName} is drinking.`)
}

petEating();
petDrinking();

//Part 6 Activity 3 (INCOMPLETE)
const coffeeShop = {
    branch: "",
    drinksWithPrices: "",
    foodWithPrices: ""
}

const drinksOrdered = () => (
    console.log()
)

const foodOrdered = () => {
    console.log()
}