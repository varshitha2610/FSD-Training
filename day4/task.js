let findLargest = (a, b, c) => {
    if (a >= b && a >= c) {
      return a;
    } else if (b >= a && b >= c) {
      return b;
    } else {
      return c;
    }
  };
  
  
  let num1 = Number(prompt("Enter the first number:"));
  let num2 = Number(prompt("Enter the second number:"));
  let num3 = Number(prompt("Enter the third number:"));
  
 
  let largest = findLargest(num1, num2, num3);
  
  console.log(`The largest number is ${largest}`);
  