//1 task
//var first = "aboba"; //string
//var second = 42; //number
//var third = true; //boolean
//var fourth = {}; //object
//var fifth = Symbol("symbol"); //symbol
//console.log(
//        typeof(first),
//        typeof(second),
//        typeof(third),
//        typeof(fourth),
//        typeof(fifth)
//)
//2 task
//var first = 15;
//var second = 10;
//console.log(first+" === "+second + " =>",first===second)
//console.log(first+" < "+second + " =>",first<second)
//console.log(first+" <= "+second + " =>",first<=second)
//console.log(first+" > "+second + " =>",first>second)
//3 task
//let a = false;
//let b = null;
//let c = undefined;
//console.log(a);
//console.log(b);
//console.log(c);
//4 task
//console.log("1" + 2 + 3) // 1 строка, и остальные он взял за строки
//console.log(1 + 2 + 3) // Тут нет строк, поэтому он взял переменные за числа
//5 task
//let str1 = 'Кто '
//let str2 = 'ты '
//let str3 = 'такой'
//let concatenation = str1+str2+str3
//console.log(concatenation)
//6 task
//let str = "20"
//let a = 5
//console.log(str + a) // Т.к. str слока, то он и "a" взял за строку и сложил их в одну строку
//console.log(str - a) // строка преобразовалась в число
//console.log(str * "2") // строки преобразовались в числа
//console.log(str / 2) // строки преобразовались в числа
//7 task
//let a = "12"
//let b = "7.15"
//console.log(Math.round(Number(a) % Number(b)))
//8 task
//let x = 1
//let first = Math.pow(x, 2) - 7 * x + 10
//let second = Math.pow(x, 2) - 9 * x + 12
//let result = first / second
//console.log(result)
//9 task
//let email = "2323@asd.sd"
//let validator = email.indexOf('@')
//if (validator === -1) {
//    console.log('Нету "@" в  почте')
//} else {
//    console.log('Почта: ' + email)
//}
// =========Упавление потоком===========
//1 task
//let age = 55
//if (age > 18 && age < 30) {
//    console.log("Для молодежи")
//} else if (age > 1 && age < 17) {
//    console.log("Для детей")
//} else {
//    console.log("Для взрослых")
//}
//2 task
//let a = 4
//let b = 1
//let max
//if (a > b) {
//    max = a
//} else {
//    max = b
//}
//console.log(max)
//3 task
//let crowns = 1
//let ending
//switch (crowns) {
//    case 1:
//        ending = " ворона";
//        break;
//    case (crowns > 1 && crowns < 5):
//        ending = " вороны";
//        break;
//    case (crowns > 4 && crowns < 10):
//        ending = " ворон"
//        break;
//}
//console.log("На ветке сидит "+crowns+ending)
//4 task
//----while---
//let i = 0
//while (i <= 50) {
//    i++
//    if(i % 2 == 1) {
//        console.log(i)
//    }
//}
////----for---
//for (let i = 0; i <= 50; i++) {
//    if (i % 2 == 1) {
//        console.log(i)
//    }
//}
// 5 task
//let sum = 0;
//for (i = 1; i <= 15; i++) {
//    if(i == 5 || i == 7) {
//        continue;
//    }
//    sum += i;
//}
//console.log(sum)
// 6 task
let first = 3
let second = 2
let i = 0
let result = first
while (i < second-1) {
    i++
    result *= first
}
console.log(result)