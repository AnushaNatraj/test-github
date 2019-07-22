var obj = {};

console.log(obj);
console.log(typeof obj);


var std1 = {
       math : 87,
       Kannada: 90,
       english : 45,
       History : 46 ,
}

console.log(std1);



// Dot Notation reading a value

console.log(std1.Kannada);

var scoreInMath = std1.math;

console.log(scoreInMath);

var std2 = {
    "social science" : 60 ,
    12: 12
}

// console.log(std2.12)


var person = {

    name : "Anusha",
    gender : "Female",
    age : 25,
    hobbies : ['Learning new things' , 'music'],

    bestfriend:{
        name : 'Roopa',
        gender : 'Female'
    },

    education:{
        name : 'Highschool',
        passedyear : 2009

    },

    edu: {
        name: 'graduation',
        passedyear : 2017 ,

    }
}





console.log(person.name);
console.log(person.bestfriend.name);
console.log(person.education.passedyear);

