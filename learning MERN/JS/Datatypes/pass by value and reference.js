// Pass by value

var a = 14;
var b = 13;
b = 56;

console.log(a);
console.log(b);

// Pass by reference


var obj1 = {
    a : '25',
    b : '65',

}

var obj2 = obj1;
obj2.a = 35 ;

console.log(obj1.a);
console.log(obj2.a);