/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes(start, end) {
	var result = [],
		index;
	//check for errors
	if(start === undefined || end === undefined){
		throw "Error: one of the range params is missing";
	} else if( isNaN(start) || isNaN(end)){
		throw "Error: one of the range params can't be converted to 'Number'"
	} else{
		for (index = 2; index <= end; index += 1) {
			if(isPrime(index) && index > start){
				result.push(index);
			}
		}
		
		return result;
	}
	
}

function isPrime(num){
	var index,
		end = Math.sqrt(num);
		
	for (index = 2; index <= end; index+=1) {
		if(!(num % index)){
			return false;
		}
	}
	return true;
}
module.exports = findPrimes;
