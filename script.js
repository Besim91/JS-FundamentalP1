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

//Udemy - Video 21 open