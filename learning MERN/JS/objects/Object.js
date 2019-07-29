let obj = {}

let obj2 = new Object()

obj2.name = 'JS';

console.log(obj2); 

var person = {
    name:'Bottle',
    color:'Blue'
}

var person2 = {};
    Object.assign(person,person2);
    console.log(person2);


let o1 = {
    name:'ashu',
}

let o2 = {
    name :'JS',
    age: 23
}

Object.assign(o1,o2);
console.log(o1);

let bottle1 = {
    color : 'blue'
}

let bottle2 = {
    color:'blue'
}


let bottle3 = bottle1

console.log(bottle1 === bottle2);

console.log(bottle1 === bottle3);


var person = {

    name : "Anusha",
    gender : "Female",
    age : 25,
    hobbies : ['Learning new things' , 'music'],

    bestfriend:{
        name : 'Roopa',
        gender : 'Female'
    }
}


let keys = Object.keys(person);
console.log(keys);

// for in loop

for(var prop in person) {

    if(person.hasOwnProperty(prop)) {
        console.log(prop);
        console.log(person[prop]);
    }
}

// parseFloat();

var flt = 13.34

console.log(parseFloat(flt));

console.log(parseInt(flt));

// isFinite

console.log(isFinite(1e309));

// isNaN();

console.log(isNaN('45ad'));