// main diff between a strong set and a week set is that for 
//a week set the functionalities are minimum and they do automatic garbage collection

var people = new Set();
people.add('Wes');
people.add('Snickers');
people.add('Kait');

for (var person of  people) {
  console.log(person);
}

var students = new Set(['Wes', 'Kara', 'Tony']);

var dogs = ['Snickers', 'Sunny'];
var dogSet = new Set(dogs);


// cool iterator with sets
var brunch = new Set();
// as people start coming in
brunch.add('wes');
brunch.add('Sarah');
brunch.add('Simone');
// ready to open!
var line = brunch.values();
console.log(line.next().value);
console.log(line.next().value);
brunch.add('Heather');
brunch.add('Snickers');
console.log(line.next().value);
console.log(line.next().value);
console.log(line.next().value);


// Weak set
let dog1 = { name: 'Snickers', age: 3 };
let dog2 = { name: 'sunny', age: 1 };

const weakSauce = new WeakSet([dog1, dog2]);

console.log(weakSauce);
dog1 = null;
console.log(weakSauce);
