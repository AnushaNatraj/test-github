


function printName () {

    // body of function

    console.log('Anusha')
}

// calling a function

printName ();

//

function add (a,b,c) {

    console.log(a)

    console.log(b)

    console.log(c)

    console.log(a+b+c)
};

add(1,2);

//


function add (a,b,c) {

if (a && b && c) {
    console.log(a+b+c);
}else {
    console.log('Pass is not valid');
}

}

add (1,2,3);

//

function add (a,b,c) {

    console.log(a+b+c);
    return a+b+c;
}

add(2,3,4);



//

function add (a,b){
    console.log(arguments);
}


var res = add(2,3,4,5);
console.log(res);


// To check a number is even or odd

var num = 46 ;

if(num % 2 == 0) {
    console.log('num is even');
}else{
    console.log('num is odd');
}
  
// using function

function isEven(a) {
    if(a % 2== 0) {
        return true;

    }else {
        return false;
    }
}

var evn = isEven(67);
console.log(evn);


if(isEven(22)) {
    console.log('Do something with even');
}else {
    console.log('Not even');
}



// Default Parameters

function multiplication (a = 3,b=5) {
    return a*b;
}

console.log(multiplication());


// To reverse a array


var a = [1,2,4,5,6,];
 
var reversed = a.reverse();

console.log('reversed',a);