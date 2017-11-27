var a = 10;
var b = 20;

console.log(a);
console.log(b);
[a,b] = [b,a];
console.log(a);
console.log(b);



function calculateBill(total, tax = 0.13, tip = 0.15) {
    return total + (total * tax) + (total * tip);
}

const totalBill = calculateBill(100, undefined, 0.25);
console.log(totalBill);