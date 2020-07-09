

// let user = {}; // Создайте пустой объект user.

// let user = {
//     name: 'Jhon', // Добавьте свойство name со значением John.
//     surname: 'Smith' // Добавьте свойство surname со значением Smith.
// };


// delete user.name // Удалите свойство name из объекта.

// for (let key in user) {
//   // ключи
//   alert( key );  // name, surname
//   // значения ключей
//   alert( user[key] ); // John, Smith
// }



// function isEmpty(object) {
//     if ((object) === undefined){
//         return true // возвращает true, если у объекта нет свойств
//     } else {
//         return false // иначе false
//     }
// }


// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


// let box = {};
// alert(isEmpty(box));


// function isEmpty(obj) {
//     for (let key in obj) {
//       // если тело цикла начнет выполняться - значит в объекте есть свойства
//       return false;
//     }
//     return true;
// }




// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// alert( bag.apple ); // 5, если fruit="apple"





// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }

// let sum = 0;
// for (let key in salaries) {
//     sum+= salaries[key];
// }

// alert(sum);


// до вызова функции
// describe("multiplyNumeric", function() {
//     it("умножаем все числовые свойства на 2", function() {
//       let menu = {
//         width: 200,
//         height: 300,
//         title: "My menu"
//       };
//       let result = multiplyNumeric(menu);
//       assert.equal(menu.width, 400);
//       assert.equal(menu.height, 600);
//       assert.equal(menu.title, "My menu");
//     });
  
//     it("returns nothing", function() {
//       assert.isUndefined( multiplyNumeric({}) );
//     });
  
// });

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//      }
// }




// let input = prompt('Введи фамалию', 'Плаксин');

// const isDolboeb = () => {
//     return input == 'Плаксин' ? 'Долбоеб' : 'Не долбоеб';
// };

// const dolboebAlert = () => {
//     if (isDolboeb() == 'Долбоеб') {
//         alert(
//             `Уймись блять нахуй ${isDolboeb()} ${input}`
//         );
//     } else {
//         alert(`${input} не долбоеб, расходимся`);
//     }
// };

// dolboebAlert();

// const sequenceSum = (begin, end) => {
//     // BEGIN (write your solution here)
//     if (begin === end) {
//       return begin;
//     } else if (begin < end) {
//       return begin + sequenceSum(begin + 1, end);
//     } else {
//       return NaN;
//     }
//     // END
// };


    // alert(sequenceSum(1, 5))
    // alert(sequenceSum(2, 6))
    // alert(sequenceSum(-1, -1))

    // const smallestDivisor = (num) => {
    //     // BEGIN (write your solution here)
    //     if(num === 1) {
    //       return 1;
    //     }

    //     const iter = (counter, acc) => {
    //         if (counter % acc === 0) {
    //             return acc;
    //         }
    //           return iter(counter, acc + 1);
    //     };
    //     return iter(num, 2);
    // };
        // END


        // const smallestDivisor = (num) => {
        //     if(num <= 0){
        //       return NaN;
        //     }
        //     let b = 2;
        //     if (num % b === 0) {
        //         return b;
        //     } else if (num % b != 0) {
        //       return b++;
        //     }
        //     return b
        //   }

    //       const smallestDivisor = (num) => {
    //         if (num <= 0) {
    //           return NaN;
    //         } else if (num === 1) {
    //             return 1;
    //         } else if (num % 2 === 0) {
    //             return 2;
    //         }
    //             let counter = 2;
    //                 while(num % counter != 0){
    //                 counter = counter + 1;
    //             }
    //             return counter;
    // }
    //     // let Divisor = (num) =>{
    //     //     let counter = 2;
    //     //     let result = 1;
    //     //         while(num % counter != 0){
    //     //         result = result * counter;
    //     //         counter = counter + 1;
    //     //     }
    //     //     return result;
    //     //  }



    //   alert(smallestDivisor(-3))
    //   alert(smallestDivisor(0))
    //   alert(smallestDivisor(1))
    //   alert(smallestDivisor(4))
    //   alert(smallestDivisor(121))
    //   alert(smallestDivisor(9))
    //   alert(smallestDivisor(17))
    //   alert(smallestDivisor(15))




// let calculator = {
//     firstNumb: {},
//     secondNumb: {},
//     read() {
//         this.firstNumb = +prompt('a?',);
//         this.secondNumb = +prompt('b?',);
//     },
//     sum() {
//         return this.firstNumb + this.secondNumb ;
//     },
//     mul() {
//         return this.firstNumb * this.secondNumb;
//     },
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//     }
// };


