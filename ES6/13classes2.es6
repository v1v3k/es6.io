
  class Dog {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
    }
    bark() {
      console.log(`Bark Bark! My name is ${this.name}`)
    }
    cuddle() {
      console.log(`I love you owner!`);
    }
    static info() {
      console.log('A dog is better than a cat by 10 times');
    }
    get description() {
      return `${this.name} is a ${this.breed} type of dog`;
    }
    set nicknames(value) {
      this.nick = value.trim();
    }
    get nicknames() {
      return this.nick.toUpperCase();
    }
  }

  var snickers = new Dog('Snickers', 'King Charles');
  var sunny = new Dog('Sunny', 'Golden Doodle');
  sunny.nicknames = 'Asdsdfvb    ';
  console.log(sunny.nicknames);
