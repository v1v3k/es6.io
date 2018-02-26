var cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

cuts.shop = 'MM MEats';

for (let i = 0; i < cuts.length; i++) {
    console.log(cuts[i]);
}

// For each you cant break or do a call back

console.log('-'.repeat(10));
cuts.forEach((cut) => {
    console.log(cut);
});

console.log('-'.repeat(10));
for (var index in cuts) {
    console.log(cuts[index]);
}

console.log('-'.repeat(10));
for (var cut of cuts) {
    // if(cut === 'Brisket') {
    //     continue;
    // }
    console.log(cut);
}

var apple = {
    color: 'Red',
    size: 'Medium',
    weight: 50,
    sugar: 10
  };

// does well for objects
for (var prop in apple) {
    var value = apple[prop];
    console.log(value, prop);
}

// does well for arrays
for (var prop of apple) {
    console.log(prop);
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// difference between of itterator and in itterator