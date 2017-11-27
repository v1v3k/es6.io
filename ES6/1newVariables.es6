{
    const name = 'wes';
    console.log(name);
}
// console.log(name);  // error

// let is block scope
for(let i = 0; i < 10; i++) {
console.log(i);
setTimeout(function() {
    console.log('The number is ' + i);
},1000);
}

// var scope is function scope
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
    // console.log(b);  // error
    // let b = 20;
    // console.log(b); // error
    // const b = 20;
}
abc();



function abc123(){
const a = 123;
console.log(a);
}

abc123();
abc123();
abc123();
abc123();