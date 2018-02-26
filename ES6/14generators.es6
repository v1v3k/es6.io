function* listPeople() {
    let i = 0;
    yield i;
    i++;
    yield i;
    i++;
    yield i;
  }

const people = listPeople();

console.log(people.next());//{ value: 0, done: false }
console.log(people.next());//{ value: 1, done: false }
console.log(people.next());//{ value: 2, done: false }
console.log(people.next());//{ value: undefined, done: true }




// really cool stuf
function ajax(url) {
    // check what is happening here dataGen.next is called inside the ajax funtion
    fetch(url).then(data => data.json()).then(data => dataGen.next(data))
  }

  function* steps() {
    console.log('fetching beers');
    const beers = yield ajax('http://api.react.beer/v2/search?q=hops&type=beer');
    console.log(beers);

    console.log('fetching wes');
    const wes = yield ajax('https://api.github.com/users/wesbos');
    console.log(wes);

    console.log('fetching fat joe');
    const fatJoe = yield ajax('https://api.discogs.com/artists/51988');
    console.log(fatJoe);
  }

  const dataGen = steps();
  dataGen.next(); // kick it off


  /// another form f generators
  function* lyrics() {
    yield `But don't tell my heart`;
    yield `My achy breaky heart`;
    yield `I just don't think he'd understand`;
    yield `And if you tell my heart`;
    yield `My achy breaky heart`;
    yield `He might blow up and kill this man`;
  }

  const achy = lyrics();

  for (const line of achy) {
    console.log(line);
  }