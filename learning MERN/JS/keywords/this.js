// console.log(this)

let c = 12;

function foo() {
    var a= 10;
    console.log(this)
}

foo();


var obj = {
    color : 'blue',

    description: function() {
        console.log(this);

        function foo() {

            console.log('Inner fn',this)
        }

       foo();   
     }
}

obj.description();