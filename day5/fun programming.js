function main(a){
    console.log((a));
    console.log(a());
}
main(function(){
    return "i am cbf1"
})
main(function(){
    return "i am cbf2"
})

function operation(task){
    console.log(task)
    console.log(task(10,10));
}
operation(function(a,b){
    return a+b;
})
operation(function(a,b){
    return a-b;
})
operation(function(a,b){
    return a*b;
})
operation(function(a,b){
    return a/b;
})

function operation1(task) {
    let result = task();
    console.log(`The result is: ${result}`);
}

operation1(function () {
    let num1 = Number(prompt("Enter the value of a for addition:"));
    let num2 = Number(prompt("Enter the value of b for addition:"));
    return num1 + num2;
});

operation1(function () {
    let num1 = Number(prompt("Enter the value of a for subtraction:"));
    let num2 = Number(prompt("Enter the value of b for subtraction:"));
    return num1 - num2;
});

operation1(function () {
    let num1 = Number(prompt("Enter the value of a for multiplication:"));
    let num2 = Number(prompt("Enter the value of b for multiplication:"));
    return num1 * num2;
});

operation1(function () {
    let num1 = Number(prompt("Enter the value of a for division:"));
    let num2 = Number(prompt("Enter the value of b for division:"));
    return num1 / num2;
});

let main1 = (task) => {
    console.log(task(10,10));
}
main1((a,b) => {
    return a+b
})
main1((a,b) => {
    return a-b
})
