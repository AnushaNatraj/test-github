function Person (name,gender) {
    this.name = name;
    this.gender = gender;
}

var js = new Person('Javascript', 'Male');

var ashu = new Person('Ashutosh','Male');

var vinod = Person('Vinod','Male');

console.log(js);

console.log(ashu);

console.log(vinod);

js.graduate = true;

console.log(js.graduate);

console.log(ashu.graduate);


// Function properties

console.log(Person.length);

console.log(Person.prototype);

console.log(Person.constructor);

console.log(typeof Person.prototype);

Person.prototype.age = 25;
console.log(Person.prototype);

console.log(js.age);

console.log(ashu.age);

console.log(Person);


console.log(js.constructor);

console.log(ashu.constructor);


console.log(js.hasOwnProperty('name'))

console.log(ashu.hasOwnProperty('gender'));

console.log(ashu.hasOwnProperty('age')) ;

console.log(ashu.constructor.prototype.hasOwnProperty('age'));

var obj = {};

var obj2 = new Object();

console.log(obj2.constructor);

console.log(obj.constructor.prptotype);

var arr = [1,2,3,4];

var arr2 = new Array();

Array.prototype.push = function() {
    return 'Hello'
}

// arr2.push(2);

Array.prototype.add = function() {
    console.log('Our Add',this)
}



console.log(arr2.push());

console.log(typeof arr);

console.log(arr2.constructor);

console.log(arr2);

console.log(arr.add())

var newArr = new Array(1,2,3);

console.log(newArr.add());


// property of obj instance
console.log(js._proto_);


// property of constructor function
console.log(js.prototype);

console.log(js.constructor.prototype)

