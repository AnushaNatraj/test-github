

const inventors = [

{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// console.log(inventors);

// 1. Give array of inventors ' first and last name'

// let fullName = [];

// for(let i = 0;i<inventors.length;i++) {
   // let fN = '${inventors[1].first} ${inventors[1].last}'
    // fullName.push(fN);
// };

// map();

     // let fullName = inventors.map(function(ele,index,arry) {

        // console.log(ele);
        // console.log(index);
        // console.log(arry);

        // return '${ele.first} ${ele.last}';

  // });

// let fullName = inventors.map(ele => '${ele.first} ${ele.last}')


// console.log(fullName);

// 2.Filters the list of inventors for these who were born in the 1500's

// filter

// let fifteenth = inventors.filter(function(ele,ind,arr) {
// if(ele.year >=1500 && ele.year <1600) {
//     return true;


// });
// console.log(fifteenth)


// 3. Sort the inventors by birthdate,oldest to youngest


// let ordered = inventors.sort(function (a,b) {
   //  if(a.year>b.year) {
        //   return 1
    // }else {
       //  return -1
    // }
// });

// console.log(ordered);



// using fat arrrow function

let ordered = inventors.sort((a,b) => a.year > b.year ? 1: -1)

console.log(ordered);



var arr = [1,2,3];

var sum = 0;

for(var i = 1 ; i < arr.length;i++) {

    Sum = arr[i] + sum ;
    
};

console.log(arr);
console.log(Sum);

//  How many years did all the inventors live?


// reduce(cb, initialVal)

function cb(init,ele) {
    return init + (ele.passed-ele.year);
}

let year = inventors.reduce(cb,0);

var int = 2 ;

let totalYear = inventors.reduce((initial,ele) => {
    return initial + (ele.passed - ele.year);

}, 0);

console.log(year);
console.log(totalYear);

// forEach();

inventors.forEach(function(ele,ind,arr){
    console.log(ele)
});


// for in
// for of