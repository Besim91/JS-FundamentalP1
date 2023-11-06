//Udemy - Video 14

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let bmiMark = (massMark / (heightMark * heightMark)).toFixed(2);
let bmiJohn = (massJohn / (heightJohn * heightJohn)).toFixed(2);

console.log("John hat ein BMI von ", " " , bmiJohn);
console.log("Mark hat ein BMI von ", " " , bmiMark);

let markHigherBmi = bmiMark>bmiJohn;

if (markHigherBmi = true) {console.log("Der BMI von Mark ist höher");
}
else ("Der BMI von John ist höher");


//Udemy - Video 18

let heighestBMI = bmiMark > bmiJohn;

if (heighestBMI) {console.log(`Mark's BMI is higher then John's ${bmiMark}`);
    
} else {console.log(`John's BMI is higher then Mark's ${bmiJohn}`);
    
}

//Udemy - Video 21
// falsy values

console.log(Boolean(0));            //false
console.log(Boolean(undefined));    //false
console.log(Boolean(`Besim`));      //true
console.log(Boolean());             //false
console.log(Boolean({}));           //true


let money = 0;  //The output will be "False in the If function -> jump to the else function"
if (money) {
    console.log(`Gönn dir, du hast Geld`);
}
else {console.log(`Du hast kein Geld, such dir ein Job`);
}

let height;  //The variable "height" is UNDEFINED -> The output will be "False"
if (money) {
    console.log(`Variable is defined`);
}
else {console.log(`The variable is undefined, please define 'height'`);
}


/*Udemy - Video 24
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner 
with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score 
for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:
"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.*/

const firstScoreDolphins = 96;
const secondScoreDolphins = 108;
const thirdScoreDolphins = 89;

const firstScoreKoalas = 88;
const secondScoreKoalas = 91;
const thirdScoreKoalas = 110;

let rounds = 3;

let averageScoreDolphins = ((firstScoreDolphins + secondScoreDolphins + thirdScoreDolphins) / rounds).toFixed(2);
let averageScoreKoalas = ((firstScoreKoalas + secondScoreKoalas + thirdScoreKoalas) / rounds).toFixed(2);

console.log(`Average score Dolphins: ${averageScoreDolphins}` ,`Average score Koalas: ${averageScoreKoalas}` );

if (averageScoreKoalas > averageScoreDolphins)
{console.log(`Koalas win the trophy`)}
else if (averageScoreKoalas < averageScoreDolphins) {console.log(`Dolphins win the trophy`)}
else if (averageScoreDolphins === averageScoreKoalas){ console.log(`Both win the trophy`);}