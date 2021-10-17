// Code your solutions in this file

/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
*/


function writeCards(arrayOfNames, word) {   
    let newArr = [];
    for (const i of arrayOfNames) {
        newArr.push(`Thank you, ${i}, for the wonderful ${word} gift!`)
    }
    return newArr
}


function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }


}





























// const gifts =  ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         //debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);


// function writeCards(arrayOfNames, eventName) {
//     const newArrayOfNames = [];
//     for (let counter = 0; counter < arrayOfNames.length; counter++){
//         newArrayOfNames.push(`Thank you, ${arrayOfNames[counter]}, for the wonderful ${eventName} gift!`);
//     }
//     return newArrayOfNames;

// }

// //console.log(
// writeCards(["Ada", "Brendan", "Ali"], "birthday");
// //);


// function countDown(posInt) {
//     while (posInt >= 0) {
//         console.log(posInt--);
//     }
// }

// countDown(10);