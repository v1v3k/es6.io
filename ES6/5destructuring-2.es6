const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];
const [captain, assistant, ...players] = team;
console.log(captain, assistant, ...players);
console.log(...players);
console.log(players);