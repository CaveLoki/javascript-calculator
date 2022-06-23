// function to perform simple arithmetic operations

// take the operator input
const operator = prompt('Please enter an operator to perform  a calculation: \n\n" + " :  Addition.\n " - " :   Subtraction.\n " * " :   Multiplication.\n " / " :   Division.');

// take the operand input
const number1 = parseInt(prompt('Enter first number: '));
const number2 = parseInt(prompt('Enter second number: '));

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2; 
}
else if ( operator == '/' ) {
    result = number1 / number2;
}
else {
    alert('Please enter a valid operator');
}




    
  
    // else (operator != '+' || operator != '-' || operator != '*' || operator != '/')
    //     alert('Please enter a valid operator');
    // return result;


//Displaying the result
displayCalculations = 'The Result of ' + number1 + operator + number2 + ' is ' + result;
// console.log(displayCalculations);
alert(displayCalculations);

