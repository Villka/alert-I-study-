
/*Пососи
 Пососи
 */
'use strict';



// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// 7 / 0
// "  -9  " + 5
// "  -9  " - 5
// null + 1
// undefined + 1
// " \t \n" - 2



// let login = prompt('Сколько тебе лет?', 100);
// alert(`Тебе ${login} лет!`); // Тебе 100 лет!


// let askUserName = prompt('Как вас завут?',);
// alert(`Ваше имя ${askUserName}!`); // Ваше имя Иван!


// let number = prompt('Введите случайное число', '');

// if(number == 0){
//     alert("0");
// } else if (number > 0){
//     alert("1");
// } else {
//     alert("-1");
// }

// let company = prompt('Какая компания создала JavaScript?', '');

// if (company == 'Netscape') {
//   alert('Верно!');
// } else {
//   alert('Неправильно.');
// }


// let result;
// result = (a + b < 4) ? 'Мало' : 'Много';


// alert(result);


// let messlogin;

// if (login == 'Сотрудник') {
//   messlogin = 'Привет';
// } else if (login == 'Директор') {
//   messlogin = 'Здравствуйте';
// } else if (login == '') {
//   messlogin = 'Нет логина';
// } else {
//   messlogin = '';
// }


// let messlogin;
// let login;

// (login == 'messlogin') ?
//    alert('Верно!') : alert('Неправильно.');

// let login = prompt('Ваш логин', '');

// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login  == 'Директор') ? 'Здравствуйте' :
//   (login == '')? 'Нет логина' : '';

// alert(message);

// let message;

// let age = prompt ('ваш возраст',18);
// if(!(age>=14) || !(age<=90)){
//     alert('Верно!')
// }else{
//     alert('Не верно')
// }

// let login = prompt ('Ваш логин','');

// if(login =='Админ'){
//     let password = prompt ('Ваш пароль','');
//     if(password =='Я главный'){
//         alert('Здравствуйте!')
//     } else if(password == ''||password == null){
//         alert('Неверный пароль')
//     } else if(password == 0){
//         alert('Отменено')
//     }
    
// }else if(login !='Админ' && login != 0){
//     alert('Я вас не знаю')
// }else if(login == ''||login == null || login == 0){
//     alert('Отменено')
// }

// for (let i = 1; i < 10; i++) {
//     if (i % i == 1 && i % 1 == i) continue;
//     alert(i);
//   }
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       alert( i );
//     }
//   }


//   for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }





// let i = 0;
// alert( `number ${i}!` )
// while (++i < 3) alert( `number ${i}!` );


// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }

// let age = prompt ('ваш возраст',18);
// if(!(age>=14) || !(age<=90)){
//     alert('Верно!')
// }else{
//     alert('Не верно')
// }


// for (let i = 0; i < Infinity; i++) {
//     let number = prompt('Введите число, большее 100','');
//     if (number > 100 || number == null) break;;
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }


// if(number <= 100){
//    alert(number);
// }else if(number > 100){
//     close;
// }else{
//     close;
// }

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }


// let browser = prompt ('browser','');
// if (browser === 'Edge') {
//     alert("You've got the Edge!");
//   } else if (browser === 'Chrome'
//   || browser === 'Firefox'
//   || browser === 'Safari'
//   || browser === 'Opera') {
//     alert( 'Okay we support these browsers too' );
//   } else{
//     alert( 'We hope that this page looks ok!' );
// }

//   if(browser == 'Edge') {
//     alert("You've got the Edge!");
//   } else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser == 'Opera') {
//     alert( 'Okay we support these browsers too' );
//   } else {
//     alert( 'We hope that this page looks ok!' );
//   }


// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }


// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0:
//       alert('Вы ввели число 0');
//       break;
//     case 1:
//       alert('Вы ввели число 1');
//       break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
//   }




//   const number = +prompt('Введите число между 0 и 3', '');

// if (number === ) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }


// function getDrinkByProfession(fag) {
//     switch(fag) {
//     case "Jabroni":
//     return( "Patron Tequila");
//     break;
//     case "School Counselor":
//     return( "Anything with Alcohol");
//     break;
//     case "Programmer":
//     return( "Hipster Craft Beer");
//     break;
//     case "Bike Gang Member":
//     return( "Moonshine");
//     break;
//     case "Politician":
//     return( "Your tax dollars");
//     break;
//     case "Rapper":
//     return( "Cristal");
//     break;
//     default:
//     return( "Beer" );
//     }
// }

// getDrinkByProfession(prompt("", ""));


// function checkAge(age){
    // let message = (age >= 18) ? true:
    // (age < 18) ? confirm('Родители разрешили?'):'';
    // return message;
// }

// checkAge(prompt("Сколько тебе лет",''));

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }

//if (age > 18) {
//  return true;
//} else {
//  return confirm('Родители разрешили?');
//  }
//}

//   let message = (login == 'Сотрудник') ? 'Привет' :
//     (login  == 'Директор') ? 'Здравствуйте' :
//     (login == '')? 'Нет логина' : ''


// function min(a,b) {
//     return (a >= b) ? b : a;
// }

// alert(min(122, 125))

// let i = prompt("x?",);
// let j = prompt("n?",);

// function pow() {
//     return (i**j);
// }

// alert(pow(i**j));


// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   } else {
//     alert( pow(x, n) );
//   }




// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// };

// ask(
//     "Вы согласны?",
//     ()=> { alert("Вы согласились."); },
//     ()=> { alert("Вы отменили выполнение."); }
// )\

function pow(x, n) {
    let result = 1;

    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
}

describe("pow", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }
  
    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  
});

describe("pow", function() {

    // ...
    it("для отрицательных n возвращает NaN", function() {
      assert.isNaN(pow(2, -1));
    });

    it("для дробных n возвращает NaN", function() {
      assert.isNaN(pow(2, 1.5));
    });

});

// describe("тест", function() {

//     before(() => alert("Тестирование началось – перед тестами"));
//     after(() => alert("Тестирование закончилось – после всех тестов"));
  
//     beforeEach(() => alert("Перед тестом – начинаем выполнять тест"));
//     afterEach(() => alert("После теста – заканчиваем выполнение теста"));
  
//     it('тест 1', () => alert(1));
//     it('тест 2', () => alert(2));
  
//   });