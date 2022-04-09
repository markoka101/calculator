const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	let tokens = input.split(' ');
	
	let mathSymbol = tokens[0];
	let num1 = Number(tokens[1]);
	let num2 = Number(tokens[2]);

	console.log("mathsymbol", mathSymbol);
	console.log("num1", num1);
	console.log("num2", num2);
	
	//check what operator user input and perform the respectice operation
	if (mathSymbol === "+") {
		console.log(num1 + num2);
	} else if (mathSymbol === "-") {
		console.log(num1 - num2);
	} else if (mathSymbol === "*") {
		console.log(num1 * num2);
	} else if (mathSymbol === "/") {
		console.log(num1 / num2);
	} else if (mathSymbol === "sqrt") {
		console.log("square root of first number:", Math.sqrt(num1));
		console.log("square root of second number:", Math.sqrt(num2));
	}
	//user put invalid operator
	else {
		console.log(mathSymbol, "is not a valid operator");
	}

	// This line closes the connection to the command line interface.
	reader.close()

});



