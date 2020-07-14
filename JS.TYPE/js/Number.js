//Числа

let n = 1e-9;


let num = 12.34223234;

let kuk = +num.toFixed(5); // "12.3"

let sum = +((0.1 + 0.2).toFixed(2));
// alert( typeof(sum) ); // 0.30

// alert(typeof(kuk));

// alert( 9999999999999999 - 1)

function sumNumber(){
    let askOne = prompt('Введите первое число',0);
    let askToo = prompt('Введите второе число',0);
    return +askOne + +askToo;
}

// alert(sumNumber());

// alert(  Math.round((6.35 * 10)) / 10  ); // 6.3

function onlyNum() {
    let a = prompt('Введите число',0);
    if (isFinite(a) == true) {
        alert('число: ' + a);
    } else {
        onlyNum()
    }
}





function minOrMax(){
    let a = Math.random();
    if (a == 1){
        minOrMax();
    } else{
        alert(a);
    }
}


function randomInteger(min, max) {
    return Math.round(min + Math.random() * (max - min));
  }




