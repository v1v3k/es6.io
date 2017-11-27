var a = [1,2,3,4,5,6];
var reducer  = (accumilator, currentValue) => (accumilator+currentValue);
console.log(a.reduce(reducer)); 
initialValue = 200
console.log(a.reduce(reducer,initialValue)); 
