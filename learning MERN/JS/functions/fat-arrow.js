// Fat Arrow Function

var add = function (a,b) {
    return a+b;
}


// var addition = (a,b) => {
//    return a +b;
// }


var addition  = (a,b) => a+b;

var square = (b) => b*b;

console.log(addition(2,3));

console.log(square(4));


var sun = () => console.log('Hello');

sun();