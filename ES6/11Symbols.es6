var wes = Symbol('Wes');
var person = Symbol('Wes');
console.log(wes);
console.log(person);

var classRoom = {
  [Symbol('Mark')] : { grade: 50, gender: 'male' },
  [Symbol('olivia')]: { grade: 80, gender: 'female' },
  [Symbol('olivia')]: { grade: 80, gender: 'female' },
};
console.log(classRoom);

console.log('***');
for (var person in classRoom) {
  console.log(clasRoom[person]);
}
console.log('***');
var syms = Object.getOwnPropertySymbols(classRoom);
console.log(syms);
var data = syms.map(sym => classRoom[sym]);
console.log(data);