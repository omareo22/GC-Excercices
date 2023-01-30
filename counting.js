for (let i = 1; i <= 10; i++){
    console.log (i)
}

for (let i = 10; i >=1; i--){
    console.log (i)
}

let i = 1; 
// while 10 is greater than i, console logging 
// this is a function that executes the code inside the brackets until th condition is met, in this
// case as long as 10 is greater than i, console log i and add 1 to i 
while (i <= 10){
    console.log('while loop up ' + i); 
    i++;
} 

let q=10;
while (q >= 1){
    console.log('while loop count down ' + q); 
    q--;
} 

// does the thing one time and then hits the conditions
let w = 1

do {
    console.log(w);
    w++
}
while (w<=10);

let r = 10
do {
    console.log(r);
    r--
}
while (r>=1);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (const element of numbers){
    console.log ('loop '+ element)
}

//check the string length if 10 
// if not ten then subtract length and added those spaces 
//challenge

let example = 'potato'

// check if less than 10, then add is a with for loop
if (example.length < 10) {
    for (i = 0; example.length < 10; i++) {
        example = ' ' + example;
        console.log(example);
        console.log(example.length);
    } 
}