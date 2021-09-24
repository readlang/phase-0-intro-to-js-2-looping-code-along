// Code your solutions in this file

/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
*/

const gifts =  ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
    }
    return gifts;
}

wrapGifts(gifts);


function writeCards(arrayOfNames, eventName) {
    const newArrayOfNames = [];
    for (let counter = 0; counter < arrayOfNames.length; counter++){
        newArrayOfNames.push(`Thank you, ${arrayOfNames[counter]}, for the wonderful ${eventName} gift!`);
    }
    return newArrayOfNames;

}

//console.log(
writeCards(["Ada", "Brendan", "Ali"], "birthday");
//);


function countDown(posInt) {
    while (posInt >= 0) {
        console.log(posInt--);
    }
}

countDown(10);