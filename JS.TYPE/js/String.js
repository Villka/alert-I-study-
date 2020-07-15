//Задание 1

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. 

function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1);
}

// ucFirst("вася") == "Вася";



//Задание 2

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

function LowerCase(str) {
    let result = '';
    for (let i = 0; str.length > i; i += 1) {
        result += str[i].toLowerCase()
    }
    return result;
}

function UpperCase(str) {
    let result = '';
    for (let i = 0; str.length > i; i += 1) {
        result += str[i].toUpperCase()
    }
    return result;
}

function checkSpam(str) {
    if(LowerCase(str).includes('viagra') || UpperCase(str).includes('XXX')) {
        alert(true);
    } else {
        alert(false);
    }
}

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false




//Задание 3

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength,
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

function truncate(str, maxlength) {
    if (str.length > 20) {
        return str.slice(0, maxlength - 1) + '…';
    } else {
        return str;
    }
}

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)
// truncate("Всем привет!", 20)




//Задание 4

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str) {
    let result = '';
    for (let i = 0; str.length > i; i += 1) {
        if (isNaN(parseInt(str[i])) != true) {
            result += str[i];
        }
    }
    return +result;
}

// extractCurrencyValue('thg29hg78u24g98');
