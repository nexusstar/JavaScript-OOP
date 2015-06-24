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
			return /^[a-zA-Z]{3,20}$/.test(name);
		}
		
		function Person(firstname, lastname, age) {
				this.firstname = firstname;
				this.lastname = lastname;
				this.age = age;	
		}
		Person.protoype.firstname = {
			get firstname(){
				return this.firstname;
			},
			set firstname(name){
				if(!name || !isString(name) || isName(name)){
					throw "Error: ilegal first name provided";
				}
				this.firstname = name;
			}
		}
		
		Person.prototype.lastname = {
			
			get lastname(){
				return this._lastname;
			},
			set lastnane(name){
				if(!name || !isString(name) || isName(name)){
					throw "Error: ilegal last name provided";
				}
				this.lastname = name; 
			}
		}
		
		Person.prototype.age = {
			get age(){
				return this._age;
			},
			set age(num){
				if(!age || isNaN(age) || age < 0 || age > 150){
					throw "Error ilegal age provided"
				}
			}
		}
		
		Person.prototype.fullname ={
				get: this._firstname + ' ' + this._lastname,
				set: function(name){
					var names = name.split(' ');
					this._firstname = names[0];
					this._lastname = names[1];			
			}
		};
			
		return Person;
	} ());
	var p = new Person("firstname", "lastname", 120);
	console.log(p);
	console.log(p.fullname());
	return Person;
}
solve();
// module.exports = solve;