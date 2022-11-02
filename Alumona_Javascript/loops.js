// let sentence='';
// for(let i = 10; i <= 100; i+=10){
//     sentence+= `<br> there are ${i} in class today <br>`;
// }
// document.write(sentence);

var websites = [
    'w3schools',
    'stackoverflow',
    'mdn',
    'freecodecamp',
    'udemy'
];

// for/in loop using the var example
for(let index in websites){
    console.log(index);
}

console.log('........................')
// for/of loop using the var example
for(let arrIndex of websites){
    console.log(arrIndex);
}

// while loop
let num = 0;

while (num <= 1000){
    let rem = num % 2;
    if (rem == 0){
        console.log(`${num} is an even number`)
    } else {
        console.log(`${num} is an odd number`)
    }

    num++;
}

// do while loop
let existingRef = 6;
let newRef = 0;

function generateReference(max) {
    return Math.floor(Math.random() * max) + 1;
}

do{
    newRef = generateReference(10)
    console.log(`the reference is ${newRef}`)
}while(newRef != existingRef)

console.log('our new transaction reference is: '+ newRef);

var transaction = {
    reference: newRef,
    amount: 5000,
    account_number: 1234567890,
    bank_name: 'Zenith'
}

console.log(transaction)