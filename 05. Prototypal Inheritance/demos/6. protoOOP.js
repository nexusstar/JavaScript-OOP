//classical OOP example

var Animal = (function (){
  function Animal(name, age){
    this.name = name;
    this.age = age;
  }

  Animal.prototype.toString = function (){
    return this.name + ' ' + this.age;
  };

  Animal.prototype.eat = function(){
    return true;
  };

  return Animal;
}());

var Cat = (function(parent){
  function Cat(name, age, sleep){
    parent.call(this, name, age);
    this.sleep = sleep;
  }

  Cat.prototype = parent.prototype;

  Cat.prototype.toString = function(){
    return parent.call(this) + ' ' + this.sleep;
  };

  return Cat;
}(Animal));

// var newCat = new Cat('goshko', 10);
// console.log(newCat.eat());

// Prototypical inheritance
var bear = {
  toString: function() {
    return 'this is a bear';
  }
};

var panda = {
  name: 'Goshko',
};

/* jshint ignore:start */

panda.__proto__= bear; //works only in FF and Chrome

/* jshint ignore:end */

var teddyBear = Object.getPrototypeOf(bear);

var cat = {
  name: 'Tom',
  toString: function(){
    return ' this is a Cat';
  }
};

var tiger = Object.create(cat);
tiger.name = 'Sheitan';
//
// console.log(tiger.toString());
// console.log(tiger.name);

//Object.create shim
if(Object.crete === 'undefined'){
  Object.crete = function(obj){
    function Constructor(){}
    Constructor.prototype = obj;
    return new Constructor();
  };
}

var car = {
  toString: function(){
    return this.name + ' car object';
  },
  name: 'McQueen'
};

var sportCar = Object.defineProperties(car, {
  name:{
    value: 'SportCar'
  }
});

// console.log(sportCar.toString());


var person = (function(){
  var person = {
    init: function(name, age){
      this.name = name;
      this.age = age;
      //need to return what is set;
      return this;
    },
    get name(){
      return this._name;
    },
    set name(value){
      this._name = value;
    },
    get age(){
      return this._age;
    },
    set age(value){
      this._age = value;
    },
    toString: function(){
      return this.name + ' ' + this.age;
    }
  };

  return person;
}());

var gosho = Object.create(person.init('Gosho', 5));

// console.log(gosho.toString());

//Working example but inheritance does not works
var student = (function(parent){
  var student = {
    init: function(name, age, group ){
      Object.create(parent).init.call(this, name, age);
      this.group = group;

      return this;
    },
    toString: function(){
      return parent.toString.call(this);
    }
  };

  return student;
}(person));

var goshoStudent = Object.create(student.init('Gosho Student', 5, 'JS, Python'));
// console.log(goshoStudent.toString());


var alien = ( function(){
  var alien = {
    init: function(name, planet){
      this.name = name;
      this.planet = planet;

      return this;
    },
    get name(){
      return this._name;
    },
    set name(value){
      if(value.length <= 3){
        throw new Error ('Name must be longer than 3 characters!');
      }
      this._name = value;
    },
    toString: function(){
      return this.name + ' from ' + this.planet;
    }
  };

  return alien;
}());

var martian = (function(parent){

  var martian = Object.create(parent);
  martian.init = function(name, planet, legs){
    parent.init.call(this, name, planet);
    this.legs = legs;

    return this;
  };
  martian.toString = function(){
    var baseResult = parent.toString.call(this);

    return baseResult +  ' with ' + this.legs + ' legs';
  };
  return martian;
}(alien));

var greenMan = Object.create(martian.init('Green Man', 'Mars', 7));

console.log(greenMan.toString());
