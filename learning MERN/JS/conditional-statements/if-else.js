//if Statement

var name = 'js';

var version = 'es5'

if(name == 'js' && version == 'e5') {
    console.log('Executing If Block');
    console.log(name);
}

console.log('Program Ends');

// If-else statement


if(name == 'Javascript') {
    console.log('Executing If block')
}else {
    console.log('Executing else block')
}


if(name == 'Javascript'){
    console.log('Executing if')
}else if(name == 'js') {
    console.log('Executing else if')
}else {
    console.log('None of the conditions matched')
}


var total = 300;

var leftMoney = 60;

if(leftMoney < 50){
    console.log('20 % tip')

    }else if(leftMoney > 50 && leftMoney < 200) {
        console.log('15% tip')
    }else {
        console.log('10% tip')
    }


// Ternary Operator
// (condition) ? truth : falsy

var dis = (leftMoney < 50) ? 20 : 10;

console.log(dis);

