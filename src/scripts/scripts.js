"use strict";

let numberButtons = document.getElementsByClassName("number"); //array of all number buttons
let expression = document.getElementById("math-expression"); //div which contains the expression
let mathOperations = document.getElementsByClassName("math-operands"); // + - * /
let equal = document.getElementById("equal-button"); // equal button
let clear = document.getElementById("clear-button"); // AC button
let parantheses = document.getElementsByClassName("parantheses"); // parantheses

let operator = "";
let num1 = 0;
let num2 = 0;
let result;
let decimalResult;

function innerContentHandler() {
	expression.textContent = "";
	let temp = "";
	temp += num1;
	operator !== "" ? (temp += operator) : undefined;
	if (operator !== "" && num2 > 0) {
		temp += num2;
	}
	if (operator !== "" && num2 > 0 && result) {
		temp = result;
		num1 = result;
		operator = "";
		num2 = 0;
		result = undefined;
	}

	expression.textContent = temp;
}

function fillNums(num) {
	if (operator == "") {
		num1 = num1 * 10 + +num;
		innerContentHandler();
	}
	if (operator != "") {
		num2 = num2 * 10 + +num;
		innerContentHandler();
	}
}

function getOperator(targetOperator) {
	operator = targetOperator;
	innerContentHandler();
}

function showResult() {
	if (operator == "+") {
		result = num1 + num2;
	} else if (operator == "-") {
		result = num1 - num2;
	} else if (operator == "*") {
		result = num1 * num2;
	} else if (operator == "/") {
		result = num1 / num2;
	}

	if (result % 1 !== 0) {
		result = result.toFixed(2);
	}

	innerContentHandler();
}

function clearCalculator() {
	num1 = 0;
	num2 = 0;
	operator = "";
	innerContentHandler();
}

innerContentHandler();

for (let i = 0; i < numberButtons.length; i++) {
	numberButtons[i].addEventListener("click", (event) => {
		if (operator == "") {
			num1 = num1 * 10 + +event.target.textContent;
			innerContentHandler();
		}

		if (operator != "") {
			num2 = num2 * 10 + +event.target.textContent;
			innerContentHandler();
		}
	});
}

for (let i = 0; i < mathOperations.length; i++) {
	mathOperations[i].addEventListener("click", (event) => {
		operator = event.target.textContent;
		innerContentHandler();
	});
}

equal.addEventListener("click", showResult);

clear.addEventListener("click", () => {
	clearCalculator();
});

window.addEventListener("keypress", (event) => {
	if (
		event.key == "0" ||
		event.key == "1" ||
		event.key == "2" ||
		event.key == "3" ||
		event.key == "4" ||
		event.key == "5" ||
		event.key == "6" ||
		event.key == "7" ||
		event.key == "8" ||
		event.key == "9"
	) {
		fillNums(event.key);
	}

	if (
		event.key == "/" ||
		event.key == "*" ||
		event.key == "-" ||
		event.key == "+"
	) {
		getOperator(event.key);
	}

	if (event.key == "Enter") {
		showResult();
	}

	if (event.key == ".") {
		clearCalculator();
	}
});

//////////////////////////////////////////////////////////////////
// the code below is for working without functions

// for (let i = 0; i < numberButtons.length; i++) {
// 	numberButtons[i].addEventListener("click", (event) => {
// 		if (
// 			expression.textContent == "0" ||
// 			expression.textContent == result ||
// 			expression.textContent == decimalResult
// 		) {
// 			expression.textContent = "";
// 			expression.textContent += numberButtons[i].textContent;
// 		} else {
// 			expression.textContent += numberButtons[i].textContent;
// 		}
// 	});
// }

// for (let i = 0; i < mathOperations.length; i++) {
// 	mathOperations[i].addEventListener("click", (event) => {
// 		let last = expression.textContent.slice(-1);
// 		last == "*"
// 			? console.log("er")
// 			: last == "-"
// 			? console.log("err")
// 			: last == "/"
// 			? console.log("errr")
// 			: last == "+"
// 			? console.log("errrr")
// 			: (expression.textContent += mathOperations[i].textContent);
// 	});
// }

// equal.addEventListener("click", (event) => {
// 	result = eval(expression.textContent);
// 	decimalResult = result.toFixed(2);
// 	expression.textContent = result % 1 == 0 ? result : decimalResult;
// });

// parantheses[0].addEventListener("click", (event) => {
// 	let last = expression.textContent.slice(-1);
// 	if (expression.textContent == "0") {
// 		expression.textContent = "";
// 		expression.textContent += parantheses[0].textContent;
// 	} else if (
// 		last == "/" ||
// 		last == "*" ||
// 		last == "-" ||
// 		last == "+" ||
// 		last == "(" ||
// 		last == ")"
// 	) {
// 		expression.textContent += parantheses[0].textContent;
// 	}
// });

// parantheses[1].addEventListener("click", (event) => {
// 	let last = expression.textContent.slice(-1);
// 	if (typeof +last == "number" && expression.textContent != "0") {
// 		expression.textContent += parantheses[1].textContent;
// 		// } else if (last == "/" || last == "*" || last == "-" || last == "+") {
// 		// expression.textContent += parantheses[1].textContent;
// 	}
// });
