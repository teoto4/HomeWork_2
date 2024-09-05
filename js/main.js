//!Подключения
//!factorial
const factor_inp = document.querySelector(".factoria_inpt");
const factor_btn = document.querySelector("#factoria_btn");
const factoria_result = document.querySelector(".factoria_result");
//!Fibanachi
const fibanachi_inpt = document.querySelector(".fibanachi_inpt");
const fibanachi_btn = document.querySelector(".fibanachi_btn");
const fibanachi_result = document.querySelector(".fibanachi_result");
//!Summ
const summ_inpt = document.querySelector(".summ_inpt");
const summ_btn = document.querySelector(".summ_btn");
const summ_result = document.querySelector(".summ_result");

/*1. 
Факторіал числа (використати рекурсію)
Напишіть рекурсивну функцію, яка обчислює факторіал заданого числа. Факторіал числа n позначається як n! і визначається як добуток усіх додатних цілих чисел від 1 до n. 
*/

console.log("Факториал");

function rekursionFactor(x) {
  if (x === 0 || x === 1) {
    return 1;
  }
  return x * rekursionFactor(x - 1);
}

console.log(rekursionFactor(14));

factor_btn.addEventListener("click", (e) => {
  let result = rekursionFactor(factor_inp.value);
  factoria_result.textContent = `${result}`;
});

/*2. 
Числа Фібоначчі (використати рекурсію)
Напишіть рекурсивну функцію, яка повертає n-те число Фібоначчі.
Ряд Фібоначчі визначається наступним чином: перші два числа дорівнюють 0 і 1,
а кожне наступне число — це сума двох попередніх.
*/

console.log("Числа фибаначи");

function fibanachi(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  console.log(n);
  return fibanachi(n - 1) + fibanachi(n - 2);
}

console.log(fibanachi(12));

fibanachi_btn.addEventListener("click", (e) => {
  let result = fibanachi(fibanachi_inpt.value);
  fibanachi_result.textContent = `${result}`;
});

/*3. 
Сума цифр числа (використати рекурсію)
Напишіть рекурсивну функцію, яка повертає суму всіх цифр заданого числа.
Якщо число від'ємне, функція повинна обробляти його як додатнє.
*/

console.log("Сумма");
function sumOfNumb(numb) {
  numb = Math.abs(numb);

  if (numb < 10) {
    return numb;
  }

  return (numb % 10) + sumOfNumb(Math.floor(numb / 10));
}

console.log(sumOfNumb(123));

summ_btn.addEventListener("click", (e) => {
  let result = sumOfNumb(summ_inpt.value);
  summ_result.textContent = `${result}`;
});

/*4. 
Створити об'єкт project. У нього є назва, наприклад, Facebook.
У нього є developer, у якого є ім'я, прізвище та address, а в address є країна та місто.
За допомогою деструктуризації витягти країну та місто.
*/
console.log("Деструктуризация");
