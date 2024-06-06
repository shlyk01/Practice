// let userName ; // undefined 
// let userName = 'Evgeniy' // К переменной userName присвоено значение 'Evgeniy'

// let userName = 'Evgeniy'; // В объявленной переменной userName присвоено значение 'Evgeniy'
// let userAge = 24; // В объявленной переменной userAge присвоено значение 24
// let userHeight ; // В объявленной переменной userHeight не было присвоено значения, => JS определяет его как undefined 
// console.log(userName + ' is ' + userAge + ' years old ') // 'Evgeniy is 24 years old'

// Данные в переменной всегда можно изменить.
// let userHeight ; // undefined
// console.log(userHeight) // undefined
// userHeight = 179; 
// console.log(userHeight) // 179 

// console.log(4 + 4) ; // 8
// console.log(10 - 4); // 6 
// console.log(4 * 4) ; // 16
// console.log(10 / 2); // 5

// console.log(Infinity) // Положительная бесконечность (Специальное числовое значение )
// console.log(-Infinity) // Отрицательная бесконечность (Специальное числовое значение )
// console.log(NaN) // Ошибка математических вычислении 

// console.log(Infinity + 10 ); // infinity
// console.log(-Infinity + 10); // -Infinity
// console.log(-Infinity + Infinity); // NaN

// let userAge ; // undefined
// console.log(userAge) // undefined
// userAge = null ; // значение было присвоено (установлено) как ничего, пусто
// console.log(userAge) // null
// userAge = 24; // присваиваем вместо null числовое значение 24 
// console.log(userAge) // 24 

// let userName = 'Evgeniy';
// let userAge = null;
// let userHeight = null;

// let userName = 'Evgeniy';
// let userAge = 24;

// console.log(userName) 
// console.log(userSurName)

// let userName = 'Evgeniy';
// let userAge = 24;

// console.log(`Привет, меня зовут ${userName}, мне ${userAge} !`)
// let a = 4 ;
// let b = 10;

// console.log(`4 + 10 = ${4 + 10}`)

// console.log(5 > 2) // true 
// console.log(5 > 15) // false

// let a = 10;
// let b = a ; // Переменная b присвоело значение другой переменной (a)

// console.log(a) // 10
// console.log(b) // 10
// b = 15; 
// console.log(b)

// const myBirthday = '18.01.2000'

// const COLOR_RED = '#F00' // Если у константы используются заглавные буквы то это Псевдоним с жестко закодированное значением 
// console.log(COLOR_RED)


// console.log(Boolean('hello'))
// console.log(Boolean(1) ) 

// console.log(typeof (true) ) // 'boolean' 
// console.log(typeof (NaN) ) // 'number'
// console.log(typeof(null) ) // '

// let userAge = '25'; 
// console.log(Number(userAge))
// console.log(5 % 2 ) // 1 
// console.log(12 % 5) // 2 
// console.log(48 % 10) // 8
// console.log(66 % 7 ) // 3 

console.log('11' + 1 ) // 111 
console.log('hello' + 11) //'hello11'
console.log(11 + true) // 11 + 1 = 12
console.log(true + true ) // 1 + 1 = 2

console.log(Number('11') + 1) // явное приведение строки 11 в числовой тип 
console.log(Number('hello' + 11)) // NaN

console.log(Boolean(1)) // true 
console.log(Boolean('Hello')) // true 
console.log(Boolean(undefined) ) // false
console.log(Boolean(0) ) // false 
console.log(Boolean(null)) // false 

console.log(String(123) ) // '123'
console.log(String(undefined) ) // 'undefined'

console.log(Number(undefined) ) // NaN
console.log(Number(null) ) // 0 
console.log(Number('1') )// 1 
console.log(Number(true) ) // 1 
console.log(Number('string') ) // NaN


console.log(typeof(123) ) // Number
console.log(typeof(true) )// Boolean
console.log(typeof(false) )// Boolean
console.log(typeof('hello')) // String
console.log(typeof(undefined) ) // undefined

// let a = '10';
// console.log(+a)  

// let b = 25;
// b = -b
// console.log()

// let a = 40
// let b = 20 
// console.log(a + b) 

console.log(5 + 15 ) // 20 
console.log(25 - 10) // 25 - 10 = 15 
console.log(5 * 5) // 25
console.log(45 / 9) // 5 

console.log(10 % 3) // 1 
console.log(35 % 10) // 5 

console.log(5 ** 2 ) // 5 * 5 
console.log(10 ** 2) // 10 * 10 * 10 = 1000


let userAge = 22; 
userAge++ 
console.log(userAge) // 23 

let userHeight = 180
userHeight--
console.log(userHeight) // 179 


console.log(typeof('hello') ); // String 
console.log(typeof(123) ); // Number
console.log(typeof(true) ); // Boolean
console.log(typeof(undefined) ); // undefined 
