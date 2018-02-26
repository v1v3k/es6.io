// spread introduction
var featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
var specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

var pizzas = [...featured, 'veg', ...specialty];
var fridayPizzas = [...pizzas];
console.log(pizzas);
console.log(fridayPizzas);

// spreading into a function
var inventors = ['Einstein', 'Newton', 'Galileo'];
var newInventors = ['Musk', 'Jobs'];
inventors.push(...newInventors);
console.log(inventors);

var name = ['Wes', 'Bos'];

function sayHi(first, last) {
  alert(`Hey there ${first} ${last}`);
}
sayHi(...name);

// more spread love
var deepDish = {
    pizzaName: 'Deep Dish',
    size: 'Medium',
    ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
};

var shoppingList = ['Milk', 'Flour', ...deepDish.ingredients];
// console.log(shoppingList);

var comments = [
    { id: 209384, text: 'I love your dog!' },
    { id: 523423, text: 'Cuuute! 🐐' },
    { id: 632429, text: 'You are so dumb' },
    { id: 192834, text: 'Nice work on this wes!' },
];
var id = 632429;
var commentIndex = comments.findIndex(comment => comment.id === id);
// removing a comment
var newComments = [...comments.slice(0,commentIndex), ...comments.slice(commentIndex + 1)];
console.log(newComments);


// rest introduction
var runner = ['Wes Bos', 123, 5.5, 5, 3, 6, 35];
var [name, id, ...runs] = runner;
console.log(name, id, runs);

var team = ['Wes', 'Kait', 'Lux', 'Sheena', 'Kelly'];
var [captain, assistant, ...players] = team;
console.log(captain, assistant, players)
