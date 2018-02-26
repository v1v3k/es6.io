
  var first = 'snickers';
  var last = 'bos';
  var age = 2;
  var breed = 'King Charles Cav';
  var dog = {
    firstName: first,
    last,
    age,
    breed,
    pals: ['Hugo', 'Sunny']
  };
  console.log(dog);

  var modal = {
    create(selector) {

    },
    open(content) {

    },
    close(goodbye) {

    }
  }


  var key = 'pocketColor';
  var value = '#ffc600';
  var value2 = '#ffc690';
  var tShirt = {
    [key]: value,
    [`${key}Opposite`]: (value2)
  };

  var keys = ['size', 'color', 'weight'];
  var values = ['medium', 'red', 100];

  var shirt = {
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
  }
  console.log(shirt);