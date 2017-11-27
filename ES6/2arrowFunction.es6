
const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

// use map
// put () if you want to return a value
const win = winners.map((winner, i) => ({name: winner, race, place: i + 1}));
console.log(win);

// Use filters
const ages = [23,62,45,234,2,62,234,62,34];
const old = ages.filter(age => age >= 60);
console.log(old);


const names = ['wes', 'kait', 'lux'];

const fullNames = names.map(function(name) {
return `${name} bos`;
});

console.log(fullNames);

const fullNames2 = names.map((name) => {
return `${name} bos`;
});
console.log(fullNames2);

const fullNames3 = names.map(name => {
return `${name} bos`;
});
console.log(fullNames3);

const fullNames4 = names.map(name => `${name} bos`);
console.log(fullNames4);

const fullNames5 = names.map(() => `cool bos`);
console.log(fullNames5);

const fullNames6 = names.map(() => (`cool bos brackets`));
console.log(fullNames6);

const sayMyName = (name) => {
console.log(`Hello ${name}!`)
}

sayMyName('Wes');

// Arrow function with default parameters
function calculateBill(total, tax = 0.13, tip = 0.15) {
    return total + (total * tax) + (total * tip);
}

const totalBill = calculateBill(100, undefined, 0.25);
console.log(totalBill);


var calculateBill1 = (total, tax = 0.13, tip = 0.15) => {
    return total + (total * tax) + (total * tip);
};

const totalBill1 = calculateBill1(100, undefined, 0.25);
console.log(totalBill1);


// what if you want to do operations
var add1 = (num) => (num+1);
console.log(add1(21));


// When 2 use arrow functions and when not to use arrow functions depend on the use of this
// Arrow function decided the value of this not from the location of the the call. IE not 
//based on the object which is calling the function but from the location of  

// no binding of this

// An arrow function expression has a shorter syntax than a function expression and does 
// not have its own this, arguments, super, or new.target. These function expressions are 
// best suited for non-method functions, and they cannot be used as constructors.


var a = () => {console.log(this);}
b= {c:1};
a();  

//The ES6 arrow function syntax uses “lexical scoping” to figure out what the value of “this” 
//should be. Lexical scoping is fancy way of saying it uses “this” from the surrounding code…
// the code that contains the code in question.