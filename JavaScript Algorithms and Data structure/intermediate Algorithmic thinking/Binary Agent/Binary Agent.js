/* Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.*/
const binaryAgent = (str) => {
	let arr = str.split(" ");
	//* array to store decimal charCodes
	let newArr = [];
	let charCode = 0;

	for (var i = 0; i < arr.length; i++) {
		let split = arr[i].split("").reverse();
		for (var j = arr[i].length-1; j >= 0; j--) {
			charCode += (split[j]*(2**j));
		}
		newArr.push(charCode);
		charCode = 0;
	}

	for (i = 0; i < newArr.length; i++) {
		newArr[i] = String.fromCharCode(newArr[i]);
	}

	console.log(newArr.join(""));
	return newArr.join("");
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") //should return the string Aren't bonfires fun!?

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") //should return the string I love FreeCodeCamp!