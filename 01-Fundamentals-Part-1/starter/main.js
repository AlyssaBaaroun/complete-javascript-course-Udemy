/*
test debut de chapitre

let js = 'amazing';

if (js === 'amazing') {
    alert('javaScript is fun');
} else {
    alert('javascript is boring');
}*/
/*
Values and Variables

- Declare variables called country, continent and population and assign their values according to your own country (population in millions).
- Log their values to the console.

let country = 'Belgium';
let continent = 'Europe';
let population = 11000000;


console.log(`my country is ${country}, it is on the continent of ${continent} and it have around ${population} people`);*/


/*
Data primitive = 7 number, string, undefined, null, boolen, bigint, symbol

- Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

- Log the types of isIsland, population, country and language to the console.


let jsIsFun = true;
console.log(jsIsFun);

let country = 'Belgium';
let continent = 'Europe';
let population = 11000000;

let isIsland = true;
let language;
console.log(`my country is ${country}, it is on the continent of ${continent} and it have around ${population} people. the Island is ${isIsland} and the language is ${language}`);
console.log(typeof language);
console.log(typeof isIsland);

*/


/*

let, const and var

   Définissez la valeur de la variable « language » en fonction de la langue parlée là où vous vivez (certains pays comptent plusieurs langues, mais choisissez-en une seule).

Réfléchissez aux variables qui devraient être des variables « const » (quelles valeurs ne changeront jamais, et lesquelles pourraient changer ?). Ensuite, définissez ces variables comme « const ».

Essayez maintenant de modifier l'une des variables ainsi définies, et observez ce qui se passe.

Traduit avec DeepL.com (version gratuite)

language = "french";
const capital = true;

language = "dutch";
capital = false;


console.log(capital + language);


 */


/*

Basic operateurs

Si votre pays était divisé en deux, et que chaque moitié comptait la moitié de la population, combien de personnes vivraient alors dans chacune d'elles ?

Augmentez la population de votre pays de 1 et affichez le résultat dans la console.

La Finlande compte 6 millions d'habitants. Votre pays compte-t-il plus d'habitants que la Finlande ?

La population moyenne d'un pays est de 33 millions d'habitants. Votre pays compte-t-il moins d'habitants que la moyenne ?

À partir des variables que vous avez créées, créez une nouvelle variable « description » contenant une chaîne de caractères au format suivant : « Le Portugal se trouve en Europe, et ses 11 millions d'habitants parlent le portugais».


let country = 1000;
console.log(country / 2);

country++;
console.log(country);

const finlandPop = 6000000;
console.log(finlandPop <= country);

const countryAverage = 33000000;
console.log(countryAverage >= country);

const description = `Le Portugal se trouve en Europe, et ses 11 millions d'habitants parlent le portugais`;
console.log(description);

*/


/*CHALLENGE #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

    Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

    Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

    Log the value of BMIMark and BMIJohn to the console.

    BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


/////test data 1/////

let massMark = 78;
let massJohn = 92 ;
//////////////////////
let heightMark = 169 ;
let heightJohn = 195 ;

let BMIMark =  massMark / (heightMark * heightMark);
let BMIJohn= massJohn / (heightJohn * heightJohn);

console.log(BMIJohn, BMIMark);

let markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);

/////test data 2/////

massMark = 95;
massJohn = 85;

heightMark = 188;
heightJohn = 176;

BMIMark =  massMark / (heightMark * heightMark);
BMIJohn= massJohn / (heightJohn * heightJohn);

console.log(BMIJohn, BMIMark);

markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);






Strings and Template Literals

Recreate the description variable from the last assignment, this time using the template literal syntax.
let country = 'Belgium';
let continent = 'Europe';
let population = 11000000;
const description = `Le ${country} se trouve en ${continent}, et ses ${population} millions d'habitants parlent le portugais`;
console.log(description);

///////////////

Taking Decisions: if / else Statements

    If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

    After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.


let population = 40;

if (population > 33) {
    const popLeft = population - 33;
    console.log(`Belgium's populations is ${popLeft} below average `)
}

/////////////////

Type Conversion and Coercion

    Predict the result of these 5 operations without executing them:

console.log('9' - '5'); // -> 4 ?
console.log('19' - '13' + '17'); // -> 1617
console.log('19' - '13' + 17); // -> 33
console.log('123' < 57); // -> NaN
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 18

*/

console.log('9' - '5'); // -> 4 ?
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> False
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

