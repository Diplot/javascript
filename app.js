var message = "Hello!";
var n = 777;
var obj = { name:'Дима', age:'26'};
var array = [ 'Киев','Днепр','Харьков','Львов'];
function test1(){
    console.log(message + " - это " + typeof message);
}
function test2(){
    console.log(n + " - это " +typeof n);
}
function test3(){
    console.log(obj);
    console.log( " - это " + typeof obj );
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
        else {console.log("Вы ввели ерунду - \"" + ask + "\"" )};
}
function test7() {
console.log(confirm('Все правильно сделал? ☺ '));
};
function test8(){
let t = + prompt("Введите число от 0 до 10");
    console.log(t);
    (t>=0 && t<10)? t=+t:alert('Ну написано же \"Введите число...\", читать не умеем?');
    for( let i= t; i<10; i++){
        for ( var j =0;j<=10;j++){
            if ((i*j)==0) continue;
            console.log('\|' + i + ' * ' + j+' = '+ (i*j) +'\|' );
            let div = document.createElement('div');
            div.innerHTML = ('\|' + i + ' * ' + j+' = '+ (i*j) +'\|');
            document.body.append(div);
            switch(j){
                case 10: {
                    let p = document.createElement('p');
                    p.innerHTML = '---------------';
                    document.body.append(p);
                }
                    break;
                case 1: {
                    let p = document.createElement('p');
                    p.innerHTML = '-----------';
                    document.body.append(p);
                }
                    break;
                default:{
                    let p = document.createElement('p');
                    p.innerHTML = '-------------';
                    document.body.append(p);
                }
                    break;

            }
        }
    }
}

