//for loop
let favDrinks = [
    "Coke",
    "Fanta",
    "Red Bull",
    "Tonic"
];

for(let i = 0; i < favDrinks.length; i++) {
    console.log(favDrinks[i]);
}

//for loop with if statement
let multiplesTwo = [];

for(let i = 0; i < 20; i++){
    if (i % 2 == 0) {
        multiplesTwo.push(i);
    }
}

console.log(`Numbers divisible by 2 between 1 and 20 are ${multiplesTwo}.`);

//while loop
let age = 15;

while(age < 18) {
    console.log("You're a child!");
    age++;
}

console.log("You're an adult!");

//draw a card
let cards = ["Diamonds", "Spades", "Clubs", "Hearts"];
let currentCard = "Clubs";

while (currentCard !="Spades") {
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard)



let offer = "";
let time = 1200;

const coffeeShop = {
    name: "WhiteSheep",
    capacity: 100,
    hasSpecialOffers: true,
    drinks: ["Latte", "Mocha", "Hot Chocolate", "Water"],
    breakfastOffer: "Free croissants with a coffee!",
    lunchOffer: "Free drink with a sandwich!",
    noOffer: "There are currently no special offers."
};

if (time < 1100) {
    offer = coffeeShop.breakfastOffer;
} else if (time < 1500) {
    offer = coffeeShop.lunchOffer;
} else {
    offer = coffeeShop.noOffer;
}

console.log(offer);

let day = "Saturday";
let alarm = "You have selected an invalid day";
day = day.toLowerCase();
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let alarmClock = {
    weekdayAlarm: "BEEP BEEP BEEP",
    weekendAlarm: "No alarm needed"
};

if (day == "Saturday" || day == "Sunday") {
    alarmClock = alarmClock.weekendAlarm;
} else {
    alarmClock = alarmClock.weekdayAlarm;
}

for (let i = 0; i < days.length; i++) {
    if (day == days[i]) {
        if (day == "saturday" || day == "sunday") {
            alarm = alarmClock.weekendAlarm;
        } else {
            alarm = alarmClock.weekdayAlarm;        }
    }
}

console.log(alarm)

