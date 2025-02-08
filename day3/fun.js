function performArithmeticOperation() {
    // Get input from the user
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    
    // Display operation options
    const operation = prompt(
        "Choose an operation:\n" +
        "1. Add\n" +
        "2. Subtract\n" +
        "3. Multiply\n" +
        "4. Divide\n" +
        "Enter the number of your choice:"
    );
    
    let result;
    
    // Perform the chosen operation
    switch (operation) {
        case "1":
            result = num1 + num2;
            console.log(`The result of addition is: ${result}`);
            break;
        case "2":
            result = num1 - num2;
            console.log(`The result of subtraction is: ${result}`);
            break;
        case "3":
            result = num1 * num2;
            console.log(`The result of multiplication is: ${result}`);
            break;
        case "4":
            if (num2 !== 0) {
                result = num1 / num2;
                console.log(`The result of division is: ${result}`);
            } else {
                console.log("Division by zero is not allowed.");
            }
            break;
        default:
            console.log("Invalid operation. Please refresh and try again.");
    }
}

// Call the function
performArithmeticOperation();
