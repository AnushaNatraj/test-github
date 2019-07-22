for(var i = 1; i<= 10;i++) {

    console.log('2 x '+i+'= '+ 2*i)
} ;




var arr = [12,13,14,15,16,17,18,19];

console.log(arr.length);


for (var i = 0;i < 8;i++) {

    console.log('Index '+i ,arr[i]);
}


// WAP to create a new array where elements are multiplied by from given arr

var newArr = [] ;

for (var i = 0; i<arr.length ; i++) {
    var ele = arr[i] * 2;

    newArr.push(arr[i] *2);
};

console.log(newArr);

// Reverse a given

// for in
// for off

var arr1 = [];

for (i = arr.length;i>=0;i--) {

    arr1.push(arr[i] *2);
};

console.log(arr1);
