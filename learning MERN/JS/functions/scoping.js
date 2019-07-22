var a  = 20 ;

function foo () {
    console.log(a);

    var a = 30;
    console.log(a);
}

foo (); // calling

function f00 (x,y) {
    var insideFun = 30;

    
    console.log('parametr value',x);
    console.log('global a' ,a)
    return insideFun;
}


// ES6 const list

const PI = 3.14;
console.log(PI);

// PI = 3.1433

const obj = {
    name : 'JS',
    version : 'ES6'
}

obj.name = 'Javascript';

var obj2 = {

    n:'hello'

}

// obj = obj2;

console.log(obj);

// let keyword

let v = 45;

console.log('value of v',v);


if(true) {
    let g = 1234;
}

// console.log(g);



// hoisting using let

let  l= 23;

function car() {
    console.log(l);

    let l = 45;
    console.log(l);
}

car ();


