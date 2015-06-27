var Animal = (function() {
  function Animal(name, age) {
    this.name = name;
    this.age = age;
  }

  Animal.prototype.toString = function() {
    return this.name + ' ' + this.age;
  };

  return Animal;
}());

var Cat = (function(parent) {
  function Cat(name, age, sleep) {
    parent.call(this, name, age);
    this.sleep = sleep;
  }

  Cat.prototype = parent.prototype;
  Cat.prototype.toString = function() {
    var baseResult = parent.prototype.toString.call(this);
    return baseResult + ' ' + sleep;
  };

}(Animal));

var someCat = new Cat('pesho', 5, true);
console.log(someCat);
