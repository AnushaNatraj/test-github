function outer() {
    var outvar = 45;

    function inner() {
        var innervar = 37;

        console.log('Inner Function');
        console.log(outvar);
    }

    // console.log(innervar)

    inner();
}

outer();

function add (a,b) {

    function square (sum) {
        return sum*sum;
    }

    var sum = a + b;

   // return square(sum);  return 100

   return square;
}


var sq = add(5,5);

var s = sq(10);

console.log(s);

var sqr = add(2,3);

var res = sqr(5);

console.log(res);


// function outer() {
   //  console.log('Body of outer function');

   //  function inner() {
     //    console.log('Body of inner function');
    // }

   //  console.log('About to return a function');
   // return inner;
// }


// var inn = outer();
// inn();



