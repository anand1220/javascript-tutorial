let value = "43";
console.log(typeof value);

// conversion to number
let valueInNumber = Number(value);
console.log(typeof valueInNumber);
// console.log(valueInNumber);


// if you get number as :
let num = "56abc";
console.log(typeof num);  // string
let numInNumber = Number(num);  // converted to number 
console.log(typeof numInNumber);  // number

// but if we print the value of numInNumber :

console.log(numInNumber);  // NaN  (Not a number)


// let we have :
let score = null;
console.log(typeof score);  // object

let scoreInNumber = Number(score); // converting in number
console.log(typeof scoreInNumber);  // number
console.log(scoreInNumber);  // 0


// lets check with undefined

let rank = undefined;
console.log(typeof rank); // undefined

let rankInNumber = Number(rank); // converted to number

console.log(typeof rankInNumber);  // number
console.log(rankInNumber);  // NaN 

// "33" => 33
// "33abc" => NaN
// null => 0
// true => 1 , false => 0
// undefined => NaN


// conversion into boolean
let isMarried = 1;
console.log(typeof isMarried); // number 
let booleanIsMarried = Boolean(isMarried); // converted to boolean
console.log(typeof booleanIsMarried);  // type = boolean
console.log(booleanIsMarried);  // true

// 1=> true, 0=>false
// ""=>false, "anand"=>true
// NaN => false


// conversion into string 

let somestr = 55;
console.log(typeof somestr);  // number 

let numSumStr = String(somestr);
console.log(typeof numSumStr);  // string
console.log(numSumStr);  // 55

//

let some = NaN;
console.log(typeof some);  // number
let someString = Boolean(some); // converted to boolean
console.log(someString);  // false





