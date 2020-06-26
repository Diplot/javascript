var message = "Hello!";
var n = 777;
var obj = { name:'Дима', age:'26'};
var array = [ 'Киев','Днепр','Харьков','Львов'];
function test1(){
    console.log(message + " - это " + typeof message)
}
function test2(){
    console.log(n + " - это " +typeof n)
}
function test3(){
    console.log(obj);
    console.log( " - это " + typeof obj )
}
function test4(){
    console.log(array + " - это " + typeof array + " //хоть это и array");
}
function test5() {
alert(obj.name + ', тебе уже ' + obj.age + ' лет');
}
function test6() {
    let ask = prompt('Вам уже есть 18?', 'Да/Нет');
    if ( ask == "Да" || ask=="Нет" || ask=="да" || ask=="нет") {console.log("Вы ввели - \"" + ask + "\"");}
        else {console.log("Вы ввели ерунду - \"" + ask + "\"" )}
}
function test7() {
console.log(confirm('Все правильно сделал? ☺ '));
};

function test8(){
var t = + prompt("Введите число от 0 до 10");
    (t>=0 && t<10)? t=+t:alert('Ну написано же \"Введите число...\", читать не умеем?');
    for( var i= t; i<10; i++){
        for ( var j =0;j<=10;j++){
            if ((i*j)==0) continue;
            var div = document.createElement('div');
            div.className = 'king';
            div.innerHTML = ('\|' + i + ' * ' + j +' = '+ (i*j) +'\|');
            document.body.append(div);
            switch(j){
                case 10: {
                    var p = document.createElement('p');
                    p.className = 'king';
                    p.innerHTML = '---------------';
                    document.body.append(p);
                }
                    break;
                case 1: {
                    var p = document.createElement('p');
                    p.className = 'king';
                    p.innerHTML = '-----------';
                    document.body.append(p);
                }
                    break;
                default:{
                    var p = document.createElement('p');
                    p.className = 'king';
                    p.innerHTML = '-------------';
                    document.body.append(p);
                }
                    break;

            }
        }
    }

}
function test9() {
    for (let elem = document.querySelector('.king'); elem !== null; elem = document.querySelector('.king')) {
        elem.remove();
    }
    // for (var p = document.querySelector('.king'); p != null; p = document.querySelector('p'))
    // {
    //     p.remove();
    // }
    // ;

}

function test10() {
    let text = prompt('Каково \"официальное\" название JavaScript?');
    if (text == 'ECMAScript') alert('Верно!')
    else alert('Не знаете? \"ECMAScript\"!')
}
function test11() {
    let i = + prompt("Введите число");
    console.log(typeof i)
    if ( i > 0) {
        alert('1');
    }
    else if (i < 0) {
        alert('-1');
    }
    else
    {
        alert('0');
    }
}
function test12() {
    let text = prompt('Кто пришел?');
    console.log(text);
    if (text === 'Admin'){
            let pass = prompt('Введите пароль:');
        if (pass==='Чёрный Властелин') { alert('Добро пожаловать!')}
        else if (pass == null) {alert('Вход отменен')}
        else {alert('Пароль неправильный')}
        }
    else if (text == null) {alert('Вход отменен')}
    else {alert('Я Вас не знаю!')}
}
function test13() {
    var i = 0
    while(i<3){
        console.log(i);
        alert('номер ' + i + ' !');
        i++;
    }
}
function test14() {
   do {
         var text = prompt('Введите число больше 100: ');
         if (text == null) {
                alert('Вход отменен');
                break;
        }
    }
    while (text < 100);
}
function click() {
    alert('А-а-А-а-А-а-А-а-А!');
}
function clack() {
    alert('Кто здесь?!');
}
var elem = document.getElementById("listen");
elem.addEventListener("click", click);
elem.addEventListener("click", clack);
var arr = [1,2,3];



/*альбомчик*/
var randomColor = function generateColor() {
    var color='';
    var r = Math.floor(Math.random() * (255)).toString(16),
        g = Math.floor(Math.random() * (255)).toString(16),
        b = Math.floor(Math.random() * (255)).toString(16)

    return  color = '#' + r + g + b;
}
$(function () {
        var current = $('img').first();

    $('#next').click(function () {
        $(current).not($('#photo-5')).hide("fast", function () {
            current = $(current).next($('img'));
            $(current).show('fast');
        })
    });
    $('#prev').click(function (){
            $(current).not($('#photo-1')).hide("fast", function () {
                current = $(current).prev($('img'));
                $(current).show('fast');
                console.log($(current));
            })
    })
})



