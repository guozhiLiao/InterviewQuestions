function check(num){
    num = num.toString()
    let lengthCenter = num.length/2;
    let head = num.slice(0,lengthCenter);
    let footer = num.slice(Math.ceil( lengthCenter )).split('').reverse().join('');
    return head === footer;
}

//test

console.log('121',check(121));//true
console.log('1331',check(1331));//true
console.log('111',check(111));//true
console.log('78910',check(78910));//false
