// Zad 1
const elem = document.querySelector("#elem")

function Age() {
    const age = (prompt("Podaj swój wiek:"));

    if (age >= 18) {
        console.log("Jesteś pełnoletni.");
    } else {
        console.log("Nie jesteś pełnoletni.");
    }
}

Age();

// Zad 2
function obliczenieFahrenheit(celsjusz) {
    var fahrenheit = (celsjusz * 9/5) + 32;
    console.log(celsjusz + " stopni Celsiusza to " + fahrenheit + " stopni Fahrenheita.");
}

obliczenieFahrenheit(17); 

//Zad 3
const array = [];

for (let i = 0; i <= 100; i += 3) {
    array.push(i / 2 + 1 % 2);
}
let sum = 0;

array.forEach(item => {
    sum += item;
});

let sum2 = 0;
for (let i = 0; i < array.length; i++) {
    sum2 += array[i];
}
console.log(sum);
console.log(sum2);

console.log(array.reduce((a, b) => a + b, 0));

console.log(array.filter(x => x % 2 === 0));
console.log(array.map(x => x * 3));


console.log(array.findIndex(x => x === (9 / 2 + 9 % 2)));

console.log(array.reduce((a, b) => a + b, 0) / array.length);

console.log(Math.max(...array));

console.log(array.filter(x => x <= 0).length);

//zad 4
const fibo =[0, 1];

for (let i = 2; i <= 100; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);    
}

console.log(fibo);