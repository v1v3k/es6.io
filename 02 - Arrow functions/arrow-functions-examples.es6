
const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];
// use ()
const win = winners.map((winner, i) => ({name: winner, race, place: i + 1}));
console.log(win);

const ages = [23,62,45,234,2,62,234,62,34];
const old = ages.filter(age => age >= 60);
console.log(old);

