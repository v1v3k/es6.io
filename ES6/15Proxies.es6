var person = { name: 'Wes', age: 100 };
var personProxy = new Proxy(person, {
  get(target, name) {
    // console.log('someone is asking for ', target, name);
    return target[name].toUpperCase();
  },
  set(target, name, value) {
    if(typeof value === 'string') {
      target[name] = value.trim().toUpperCase() + '✂️';
    }
  }
});

personProxy.name = 'Wesley  ';
console.log(personProxy.name);