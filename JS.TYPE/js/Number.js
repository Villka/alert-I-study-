//Числа

//Способы записи числа
let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей
let worldPopulation = 7.3e9;  // 7.3 миллиардов (7,300,000,000)
let ms = 1e-6; // шесть нулей, слева от 1

//Неточные вычисления
let sum = +((0.1 + 0.2).toFixed(2));




// Задание 1
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

function sumNumber(){
    let askOne = prompt('Введите первое число',0);
    let askToo = prompt('Введите второе число',0);
    alert((+askOne) + (+askToo));
}

// sumNumber();




//Задача 2
// Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.
// Например:

// alert( 1.35.toFixed(1) ); // 1.4
// Но почему в примере ниже 6.35 округляется до 6.3?

// alert( 6.35.toFixed(1) ); // 6.3
// Как правильно округлить 6.35?

function roundnessInfallibility(num){
    alert(Math.round((num * 10)) / 10);
}

// roundnessInfallibility(6.35) // 6.4;



//Задача 3
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
    let a = prompt('Введите число',0);
    if (isFinite(a) == true) {
        alert('число: ' + a);
    } else {
        readNumber()
    }
}

// readNumber();




//Задача 4
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function minOrMax(){
    let a = Math.random();
    if (a == 1){
        minOrMax();
    } else{
        alert(a);
    }
}

// minOrMax(1, 5);




//Задача 5
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

function randomInteger(min, max) {
    return Math.round(min + Math.random() * (max - min));
  }

// randomInteger(1, 5);



