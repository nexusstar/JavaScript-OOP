var animal = (function() {
  var animal = {
    init: function(name, age) {
      this.name = name;
      this.age = age;

      return this;
    },
    get name() {
      return this._name;
    },
    set name(value) {
      if (value.lenght < 3) {
        throw new Error("Name must be at least 3 characters");
      }
      this._name = value;
    },
    toString: function() {
      return this.name + ' ' + this.age;
    }
  };
  return animal;
}());

var panda = (function(parent) {
  var panda = Object.create(parent);

  panda.init = function(name, age, sleep) {
    parent.init.call(this, name, age);
    this.sleep = sleep;
    return this;
  };

  panda.toString = function() {
    var baseResult = parent.toString.call(this);
    return baseResult + ' ' + this.sleep;
  };

  return panda;
}(animal));


var animalTwo = Object.create(animal).init('gosho', 3);
var animalOne = Object.create(animal);
var pandaOne = Object.create(panda).init('panda Pesho', 3, true);
animalOne.name = 'pesho';
animalOne.age = 5;
console.log(animalOne.toString());
console.log(animalTwo.toString());
console.log(pandaOne.toString());
