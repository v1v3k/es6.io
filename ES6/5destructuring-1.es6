
  var person = {
    first: 'Wes',
    last: 'Bos',
    country: 'Canada',
    city: 'Hamilton',
    twitter: '@wesbos'
  };

  var { first, last, twitter } = person;

  console.log({ first, last, twitter });

  var wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
      social: {
        twitter: 'https://twitter.com/wesbos',
        facebook: 'https://facebook.com/wesbos.developer',
      },
      web: {
        blog: 'https://wesbos.com'
      }
    }
  };

var { twitter: tweet, facebook: fb } = wes.links.social;
console.log({ twitter: tweet, facebook: fb })
console.log(tweet);
console.log(fb);
//console.log(facebook);  < - will give error

var settings = { width: 300, color: 'black' }  // height, fontSize
var { width = 100, height = 100, color = 'blue', fontSize = 25} = settings;
console.log(width);
console.log(height);
console.log(color);
console.log(fontSize);

// destructuring using [] operators
let inRing = 'Hulk Hogan';
let onSide = 'The Rock';
console.log(inRing, onSide);
[inRing, onSide] = [onSide, inRing];
console.log(inRing, onSide);


var details = ['Wes Bos', 123, 'wesbos.com'];
var [name, id, website] = details;
console.log(name, id, website);

var data = 'Basketball,Sports,90210,23,wes,bos,cool';
var [itemName, category, sku, inventory] = data.split(',');
console.log(itemName, category, sku, inventory);
var team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];
var [captain, assistant, ...players] = team;
console.log(captain, assistant, ...players);
console.log(...players);
console.log(players);



function tipCalc({ total = 100, tip = 0.15, tax = 0.13 } = {}) {
  console.log(total);
  console.log(tip);
  console.log(tax);
  return total + (tip * total) + (tax * total);
}

var bill = tipCalc({ tip: 0.20, total: 200 });
console.log(bill);
