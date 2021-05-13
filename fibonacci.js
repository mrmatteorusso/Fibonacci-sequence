let n = prompt("enter number");
let array = [];
for (i = 0; i <= n; i++) { // FIXED HERE
    if (i < 2) {
        array.push(i);
    } else {
        let fib = array[i - 2] + array[i - 1];
        array.push(fib);
    }
}
console.log(array);
