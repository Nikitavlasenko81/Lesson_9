function Task_1(){
    let i = 3;
    while (i) {
        alert( i-- );// 3 2 1 а 0 уже не выведет, т.к он при приведению к boolean будет false
    }
}
//Task_1();

function Task_2(a,b,c){
    if(a < b && b < c){
        a *=2;
        b *=2;
        c *=2;
    }else{
        a = -a;
        b = -b;
        c= -c;
    }
    alert(`${a} ${b} ${c}`)
}
//Task_2(1,2,3)

function Task_3(a,b,c){
    if((a < b && b < c)||( a > b && b > c)){
        a *=2;
        b *=2;
        c *=2;
    }else{
        a = -a;
        b = -b;
        c= -c;
    }
    alert(`${a} ${b} ${c}`)
}
// Task_3(3,2,1)

function Task_4(a,b,c) {
    if(Math.abs(b-a) > Math.abs(c-a) ){
        alert(` C расстояние: ${Math.abs(c-a)}`)
    }else{
        alert(`B расстояние: ${Math.abs(b-a)}`)
    }
}
// Task_4(-1, 12,3)

function Task_5(x,y) {
    if(x == 0 && y == 0){
        alert("0")
    }else if(x == 0 && y !== 0){
        alert("1")
    }else if(y == 0 && x!== 0){
        alert("2")
    }else{
        alert('3')
    }
}
// Task_5(1,2)

function Task_6(x,y) {
if(x > 0 && y > 0){
    alert(`Первая плоскость`)
}else if(x < 0 && y > 0){
    alert(`Вторая плоскость`)
}else if(x < 0 && y < 0){
    alert(`Третья плоскость`)
}else if(x > 0 && y < 0){
    alert(`Четвертая плоскость`)
}
}
// Task_6(1,3)

function Task_7(x1,y1,x2,y2,x3,y3) {
    if (x2 == x3){
        let x4 = x1;
    }else if(x3 == x1){
        let x4 = x2;
    }else if(x1 == x2){
        let x4 = x3;
    }
    if(y2 == y3){
        let y4 =y1;
    }else if(y3 == y1){
        let y4 = y2;
    }else if(y1 == y2){
        let y4 = y3;
    }

 alert(`Координаты 4 точки: X:${x4} Y:${y4}`)
}
// Task_7()

function Task_8(year) {
if( (year % 100) == 0 ){
    if((year % 400) == 0){
        alert('366')
    }else{
        alert('365')
    }
}else if((year % 4) == 0){
    alert('366')
}else {'365'}
}
//Task_8(2000)

function Task_9(num) {
if(num > 0){
    if( (num % 2) == 0){
        alert(`Положительное четное число`)
    }else{
        alert(`Положительное нечетное число`)
    }
}else if(num < 0){
    if( (num % 2) == 0 ){
        alert(`Отрицательное четное число`)
    }else{
        alert(`Отрицательное нечетное число`)
    }
}else{
    alert(`Нулевое число`)
}
}
// Task_9(15)

function Task_10(num) {
    let answer =""
    if(num > 0){
        answer = `положительное`
    }else{
        answer = `отрецательное`
    }
    if(num % 2 == 0 ){
        answer += " четное";
    }else{
        answer += " нечетное"
    }

    if( Math.abs(num) > 99){
        answer += " трехзначное"
    }else if(Math.abs(num) < 99 && Math.abs(num) > 9){
        answer += " двухзначное"
    }else{
        answer += " однозначное"
    }

    if(num==0){
        answer = "Нулевое число"
    }
    alert(answer)

    // if(num > 0){
    //     if( (num % 2) == 0){
    //         if( num > 99){
    //             alert(`Положительное четное трехзначное число`)
    //         }else if(num < 99 && num > 9){
    //             alert(`Положительное четное двухзначное число`)
    //         }else{
    //             alert(`Положительное четное однозначное число`)
    //         }
    //     }else{
    //         if( num > 99){
    //             alert(`Положительное нечетное трехзначное число`)
    //         }else if(num < 99 && num > 9){
    //             alert(`Положительное нечетное двухзначное число`)
    //         }else{
    //             alert(`Положительное нечетное однозначное число`)
    //         }
    //     }
    // }else if(num < 0){
    //     if( (num % 2) == 0 ){
    //         if( num > -99){
    //             alert(`Отрицательное четное трехзначное число`)
    //         }else if(num < -99 && num > -9){
    //             alert(`Отрицательное четное двухзначное число`)
    //         }else{
    //             alert(`Отрицательное четное однозначное число`)
    //         }
    //     }else{
    //         if( num > -99){
    //             alert(`Отрицательное нечетное трехзначное число`)
    //         }else if(num < -99 && num > -9){
    //             alert(`Отрицательное нечетное двухзначное число`)
    //         }else{
    //             alert(`Отрицательное нечетное однозначное число`)
    //         }
    //     }
    // }else{
    //     alert(`Нулевое число`)
    // }
}
// Task_10(287)

function Task_11() {
    //Префиксный вариант ++i:
    //    let i = 0;
    // while (++i < 5) alert( i );
   //Постфиксный вариант i++
    // здесь не выведится 5 т.к это постфиксный дикремент и он прибавиться до 5 после вывода alert
    // let i = 0;
    // while (i++ < 5) alert( i );
}
// Task_11()

function Task_12() {
    // for (let i = 0; i < 5; i++) console.log( i ); // 0 1 2 3 4
    // for (let i = 0; i < 5; ++i) console.log( i ); // 0 1 2 3 4
}
// Task_12()

function Task_13() {
    for (let i = 2; i <= 10; i++){
        if((i % 2) == 0){
            alert(i)
        }
    }
}
//Task_13()

function Task_14() {
    let i = 0;
    while (i < 3) {
        alert( `number ${i}!` );
        i++
    }
}
// Task_14()

function Task_15() {
    let num
    do{
        num = prompt('введте число больше 100')
    }while (num < 100 && num || num !== null)
}
// Task_15()

function Task_16(n) {
    next:
    for(let i = 2; i <= n; i++){
        for( let j = 2; j < i ; j++){
            if( i % j == 0) continue next
        }
        alert(i)
    }
}
// Task_16(10)

function Task_17() {
    let num1 = +prompt('введте первое число')
    let num2 = +prompt('введите второе число')
    alert((num1 + num2)/2)
}
// Task_17()

function Task_18() {
    let num = +prompt('введте число')
    alert(`квадрат числа ${num}: ${Math.pow(num, 2)}`)
}
//Task_18()

function Task_19() {
    let a = +prompt('введте 1-е число');
    let b = +prompt('введте 2-е число');
    let c = +prompt('введте 3-е число');
    let min = Math.min(a,b,c);
    let max = Math.max(a,b,c);
    alert(max - min)
}
// Task_19()


function Task_20() {
    let num = +prompt('введте число');
    if(num % 2 == 0 ){
        alert(`четное`)
    }else {
        alert(`нечетное `)
    }
}
// Task_20()

function Task_21(num) {
    let answer = '';
    let sum = 0;
    if (num <= 99 && num > 9) {
        answer += `двухзначное число`
    } else {
        answer += `однозначное число`
    }

    for(let char of num.toString()){
        sum += Number(char);
    }
    alert(`${answer} сума чисел : ${sum}`)
}
// Task_21(8)

function Task_22() {
    let userResponse = prompt(`Введите 1 если хотите преобразовать дюймы в сантиметры \nВведите 2 если хотите преобразовать сантиметры в дюймы`);
    if(userResponse == 1){
        let length = prompt(`Введите длину в дюймах`);
        let lengthTransform = length * 2.54;
        alert(`${length} дюймов, это ${lengthTransform} см`)
    }else if (userResponse == 2){
        let length = prompt(`Введите длину в сантиметрах`);
        let lengthTransform = (length / 2.54).toFixed(4);
        alert(`${length} см, это ${lengthTransform} дюймов`)
    }else{
        alert(`ответа : ${userResponse} не существует`)
    }
}
//Task_22()

function Task_23() {
    alert("Здравствуйте! \nВас приветствует программа “Кто хочет стать миллионером?”. \nНаши правила просты: 10 вопросов могут принести 1 000 000 мил. грн.,\nЖелаем удачи, игра началась!!!\n");
    let oneAnswer = prompt(`Вопрос 1: Дели, столица какого государства? \nA - Индия \nB - Китай \nC - Япония \nD - Россия \n\n Введите букву с Вашим ответом:\n`);
    switch (oneAnswer.toLowerCase()) {
        case `a`:
            alert( `\n\nПравильно!!!\n\n Вы выиграли 1 000 гривен!\n\n\n\n\n` );
            break;
        case `b`:
            alert( `\n\nНеверно! Игра закончена!\n\n` );
            return;
        case `c`:
            alert( `\n\nНеверно! Игра закончена!\n\n`  );
            return;
        case `d`:
            alert( `\n\nНеверно! Игра закончена!\n\n` );
            return;
        default:
            alert( "Нет такого ответа");
            return;
    }

    let twoAnswer = prompt(`\nВопрос 2: Какова площадь Ирана?\nA - 1 436 000 километров квадратных\nB - 1 648 000 километров квадратных\nC - 1 023 000 километров квадратных\nD - 310 километров квадратных\n`);
    switch (twoAnswer.toLowerCase()) {
        case `a`:
            alert( `\n\nНеверно! Игра закончена!\n\n` );
            return;
        case `b`:
            alert( `\n\nПравильно!!!\n\n Вы выиграли 2 000 гривен!\n\n\n\n\n` );
            break;
        case `c`:
            alert( `\n\nНеверно! Игра закончена!\n\n`  );
            return;
        case `d`:
            alert( `\n\nНеверно! Игра закончена!\n\n` );
            return;
        default:
            alert( "Нет такого ответа");
            return;
    }
    let threeAnswer = prompt(`Вопрос 3: Как перевести слово lawn?\na - дом\nb - уголь\nc - газон\nd - змея\n`);
    switch (threeAnswer.toLowerCase()) {
        case `a`:
            alert( `\n\nНеверно! Игра закончена!\n\n` );
            return;
        case `b`:
            alert( `\n\nНеверно! Игра закончена!\n\n` );
            return;
        case `c`:
            alert( `\n\nПравильно!!!\n\n Вы выиграли 5 000 гривен!\n\n\n\n\n`  );
            break;
        case `d`:
            alert( `\n\nНеверно! Игра закончена!\n\n` );
            return;
        default:
            alert( "Нет такого ответа");
            return;
    }
}
 //Task_23()

function Task_24() {
    let num = +prompt(`Введите трехзначное число`);
    let a = Math.trunc(num/100);
    let b = Math.trunc((num % 100)/10);
    let c = Math.trunc(num % 10);
    if(num % 2 == 0){
        alert(a+b+c)
    }else alert(a*b*c)
}
// Task_24()

function Task_25() {
    let a = +prompt(`Введите длину первой стороны`);
    let b = +prompt(`Введите второй стороны`);
    let c = +prompt(`Введите третей стороны`);
    if (a+b > c || a+c > b || b+c > a) {
        alert("Треугольник существует.");
    } else {
        alert("Треугольник существует.");
    }
}
// Task_25()

function Task_26(x,y,r) {
    let h = Math.sqrt((x * x + y * y));
    console.log(h)
    if(h > r){
        alert('Точка не принадлежит кругу');
    }else{
        alert(('Точка принадлежит кругу'))
    }
}
// Task_26(4,9,10)

function Task_27() {
let user = {};
    user.name = "John.";
    user.surname = "Smith.";
    user.name = "Pete"
   delete user.name
}
 // Task_27()

function Task_28(a,b,c) {
    const user = {
        name: "John"
    };
    user.name = "Pete"; // да
}
// Task_28()

function Task_29() {
    let sum = 0;
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    for(let key in salaries ){
        sum += salaries[key];
    }
    alert(sum)
}
// Task_29()

function Task_30() {
//Потому что i никогда не станет равным 10
    let i = 0;
    while (i < 11) {
        i += 0.2;
        if (i > 9.8 && i < 10.2) alert( i );
    }
}
// Task_30()













