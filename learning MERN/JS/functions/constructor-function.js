//

function Person (name,age) {

    // console.log(this)

    this.name = name;
    this.age = age;

    this.description = function() {
        console.log(this.name)
    }

    return 'hello'

}

var p = new Person('anusha',25);

var js = new Person('js', 21)


console.log(js) ;

console.log(p);

console.log(js.name);

p.description();

console.log(p.name);

console.log(js.name);

// console.log(name)


console.log(Person.length);

console.log(Person.constructor);

Person.myProp = 'My property';

console.log(person.myProp) ;

console.log(Person.prototype);

console.log(typeof Person.prototype);