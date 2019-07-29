let primitive = 'Hello Anand';

console.log(primitive);

console.log(typeof primitive);


// Using Constructor Function

let str = new String('Hello India');

console.log(str);
console.log(typeof str);

console.log(str.length);
console.log(str[3]);

console.log(primitive.length);

console.log(str.valueOf());
console.log(str.toString());


// charAt()

console.log(primitive.charAt(0));

// IndexOf()

console.log(primitive.indexOf('l',2));

// substring()

console.log(primitive.substring(1,4));

// concat

let first = 'Java';
console.log(first.concat('script'));

// spilt

let sent = 'Learning Full Stack Development';
console.log(sent.split(''));

// toLowerCase(), toUpperCase()

console.log(sent.toUpperCase());



let str1 = 'Hello World of Javascript';

let nStr = str1.split(' ').join('-').toLowerCase();
console.log(nStr);

let str2 = str1.toLowerCase().split(' ').map(e =>e.charAt(0)).join('-');

console.log(str2);

// last IndexOf;

console.log(primitive.lastIndexOf('o'));

// slice()





