let fibonacci = [0, 1];
let sum = 1;
let count = 2;
function addNumberFibonacci(totalCount) {
    let n1 = fibonacci.length - 1;
    let n2 = fibonacci.length - 2;
    let n = fibonacci[n1] + fibonacci[n2];
    console.log(n + ",");
    sum += n;
    fibonacci.push(n);
    count++;
    if (count < totalCount) {
        addNumberFibonacci(totalCount);
    }
    else {
        console.log("sum -->", sum);
    }
}
addNumberFibonacci(100);
//# sourceMappingURL=main.js.map