// console.log('02' > 1)
// console.log(1 !== true)
// console.log(undefined < 22) 
// console.log(null >= 0)
// console.log(5 > 4) // true
// console.log("ананас" > "яблоко") // false т.к 'a' < 'я'
// console.log("2" > "12") // false при сравнении значения автоматич преобразуется в тип number 
// console.log(undefined == null) // true особое правило при котором undefined == null и только 
// console.log(undefined === null) // false т.к различны их типы 
// console.log(null == "\n0\n") // false особое правило null == undefined 
// console.log(null === +"\n0\n") // false т.к различны их типы 


// Результатом сравнения будет булевый тип (true/false )
console.log(5 > 3) // true

// сравнения преобразуется в тип number
console.log('01' < 2) // '01' автоматически было преобразовано в число 1 < 2 и это true 

// Операторы сравнения которые мы знаем из математики:
console.log(5 > 3); // true
console.log(5 < 3) // false
console.log(true >= 0) // true
console.log(false <= 1) // true
console.log(true == 1) // true оператор равно это ==, а привычный нам = - это один из самых низких операторов присваи
console.log('02' != 2) // false т.к '02' преобразуется в число и в данном выражении 2 НЕ РАВНО 2 что есть false 

// Сравнения строк 
console.log('дом' < 'домик'); // большей считается более длинная строка 
console.log('рысь' < 'рыть'); // 'c' < 'т'
console.log('кот' > 'Кот');  // строчная буква больше заглавной 

// сравнение разных типов
console.log(true == 1); // true
console.log(false == 0); // true

// строгое равенство 
console.log('01' === true) // false т.к в сравнении разные типы '01' это string а true это boolean

// сравнение c null и undefined
console.log(null == undefined) // true по особому правилу JS

console.log(null === undefined) // false разные типы
console.log(null < 1) // null преобразуется к типу number и получается 0 
console.log(undefined <= 2) // false undefined преобразуется к типу number и получается NaN

//странный результат сравнения с null и 0
console.log(null > 0); // false null преобразуется к типу number и получается 0 > 0
console.log(null == 0); // особое правило JS в котором null == undefined и только ! 
console.log(null <= 0); // true null преобразуется к типу number и получается 0 <= 0 что во втором случае 0 = 0

// результат сравнения с undefined
console.log(undefined > 0); // false undefined преобразуется в NaN и сравнение дальше невозможно (NaN > 0)
console.log(undefined < 0); // false undefined преобразуется в NaN и сравнение дальше невозможно (NaN < 0)
console.log(undefined == 0); // false особое правило JS в котором null == undefined и только !