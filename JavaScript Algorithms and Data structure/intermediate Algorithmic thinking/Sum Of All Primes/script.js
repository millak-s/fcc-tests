/*Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.*/

let sumPrimes = (num) => {
	let result = 0;

	for (let number = 2; number <= num; number++) {
		let flag = true;
		for (var j = 2; j < number; j++) {
			if (number % j === 0) {
				flag = false;
				break;
			}
		}
		if (flag === true) {
			result += number;
		}
	}
	console.log('Result =', result);
	return result;
};

sumPrimes(10); // should return a number.

sumPrimes(10); // should return 17.

sumPrimes(977); // should return 73156.