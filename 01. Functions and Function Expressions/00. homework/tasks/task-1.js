/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function sum(array) {
	
	//check for errors
	if(array === undefined){
		throw 'Error, parameter is not passed or not an array!';
	} else if( !array.length ){
		return null;
	} else{
		if(!array.every(function(item){
			return !isNaN(item);
		})){
			throw 'Error, array item: can\'t be converted to number';
		}	
	}
	
	//sum items
    return array.reduce(function(previous, current) {
        return previous += current*1;
    }, 0);
	
}

module.exports = sum;