//******************** */
// before clases


function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  Dog.prototype.bark = function() {
    console.log(`Bark Bark! My name is ${this.name}`);
  };

  Dog.prototype.cuddle = function() {
    console.log(`I love you owner!`);
  };

  var snickers = new Dog('Snickers', 'King Charles');
  var sunny = new Dog('Sunny', 'Golden Doodle');
  snickers.cuddle();
  sunny.bark();

/// After classes
class Animal {
    constructor(name) {
      this.name = name;
      this.thirst = 100;
      this.belly = [];
    }
    drink() {
      this.thirst -= 10;
      return this.thirst;
    }
    eat(food) {
      this.belly.push(food);
      return this.belly;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
    bark() {
      console.log('Bark bark I\'m a dog');
    }
}

var rhino = new Animal('Rhiney');
var snickers = new Dog('Snickers', 'King Charles');

// extending built in classes such as arrays
class MovieCollection extends Array {
    constructor(name, ...items) {
      super(...items);
      this.name = name;
    }
    add(movie) {
      this.push(movie);
    }
    topRated(limit = 10) {
      return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
    }
  }

  var movies = new MovieCollection('Wes\'s Fav Movies',
    { name: 'Bee Movie', stars: 10 },
    { name: 'Star Wars Trek', stars: 1 },
    { name: 'Virgin Suicides', stars: 7 },
    { name: 'King of the Road', stars: 8 }
  );

  movies.add({ name: 'Titanic', stars: 5 });
