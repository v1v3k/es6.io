var ages = [32, 15, 19, 12];

// // 👵👨 is there at least one adult in the group?
// var adultPresent = ages.some(age => age >= 18);
// console.log(adultPresent);

// // 🍻 is everyone old enough to drink?
// var allOldEnough = ages.every(age => age >= 19);
// console.log(allOldEnough);

// // Use filters
// var ages = [23,62,45,234,2,62,234,62,34];
// var old = ages.filter(age => age >= 60);
// console.log(old);

// // use map
// var race = '100m Dash';
// var winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];
// // put () if you want to return a value
// var win = winners.map((winner, i) => ({name: winner, race, place: i + 1}));
// console.log(win);


function sumAll() {
    // converts arrayish like methods into arrays
    const nums = Array.from(arguments);
    console.log(nums);
    return nums.reduce((prev, next) => prev + next, 0);
}

console.log(sumAll(2, 34, 23, 234, 234, 234234, 234234, 2342));

// converts values into arrays
var age = Array.of(12,4,23,62,34);
console.log(ages);

