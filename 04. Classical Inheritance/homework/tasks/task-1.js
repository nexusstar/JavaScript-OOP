/* Task Description */
/* 
	Create a function constructor for Person. Each Person must have:
	*	properties `firstname`, `lastname` and `age`
		*	firstname and lastname must always be strings between 3 and 20 characters, containing only Latin letters
		*	age must always be a number in the range 0 150
			*	the setter of age can receive a convertible-to-number value
		*	if any of the above is not met, throw Error 		
	*	property `fullname`
		*	the getter returns a string in the format 'FIRST_NAME LAST_NAME'
		*	the setter receives a string is the format 'FIRST_NAME LAST_NAME'
			*	it must parse it and set `firstname` and `lastname`
	*	method `introduce()` that returns a string in the format 'Hello! My name is FULL_NAME and I am AGE-years-old'
	*	all methods and properties must be attached to the prototype of the Person
	*	all methods and property setters must return this, if they are not supposed to return other value
		*	enables method-chaining
*/
function solve() {
	var Person = (function () {
		
		function isString(obj){
			return (typeof obj === 'string');
		}
		
		function isName(name){
			var strTest = /^[a-z]{3,20}$/gi;			
			return strTest.test(name);
		}
		
		function Person(firstname, lastname, age) {
			this.firstname = firstname;
			this.lastname = lastname;
			this.age = age;			
		}
		
		Object.defineProperty(Person.prototype, "firstname", {
			get: function(){
					return this._firstname;
			},
			set: function(name){
				if(!name || !isString(name) || !isName(name)){
					throw "Error: ilegal first name provided";
				}
				this._firstname = name;
			}
		});
				
		Object.defineProperty(Person.prototype, "lastname",{
			get: function(){
				return this._lastname;
			},
			set: function(name){
				if(!name || !isString(name) || !isName(name)){
					throw "Error: ilegal last name provided";
						}
				this._lastname = name; 
			}
		});
				
		Object.defineProperty(Person.prototype, "age",{
			get: function(){
				return this._age;
			},
			set: function(num){
				if(!num || isNaN(num) || num < 0 || num > 150){
					throw "Error ilegal age provided"
				}
				this._age = num*1; //convert to 'number'
			}
		});
				
		Object.defineProperty(Person.prototype, "fullname",{
			get: function(){
				return this._firstname + ' ' + this._lastname; 
			},
			set: function(name){
				var names = name.split(' ');
				this.firstname = names[0];
				this.lastname = names[1];
			}
		});

		Person.prototype.introduce = function(){
					return 'Hello! My name is '+ this.fullname +  ' and I am '+ this.age + '-years-old';
		}
			
		return Person;
	} ());
	return Person;
}
module.exports = solve;