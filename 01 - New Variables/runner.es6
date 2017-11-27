{
  const name = 'wes';
  console.log(name);
}

// let is block scope
for(let i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function() {
    console.log('The number is ' + i);
  },1000);
}

for(var i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function() {
    console.log('The number is ' + i);
  },1000);
}

const person = {
  name: 'Wes',
  age: 28
}

// how to freeze an object 
const wes = Object.freeze(person);

function abc(){
  console.log(a); 
  var a = 20; 
  // console.log(b); 
  // let b = 20;
  // console.log(b); 
  // const b = 20;
}


var age = 100;
if(age > 12) {
  const dogYears = age * 7;
  console.log(`You are ${dogYears} dog years old!`);
}

function abc123(){
  const a = 123;
  console.log(a);
}

abc123();
abc123();