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


//Udemy - Video 22
