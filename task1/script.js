let money, time;

function start() {
    money = +prompt("Введіть ваш місячний бюджет?", '');
    time = prompt("Введіть дату в форматі РРРР-MM-ДД?", '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Введіть ваш місячний бюджет?", '');
    }
}
start();

console.log(money);
console.log(time);

let appData = {
    budget: money,
    dataTime: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false

};
//first example
for (let i = 0; i < 2; i++) {
    let a = prompt("Введіть обовязкову статтю витрат", ''),
        b = prompt("В скільки обійдеться", '');
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i = 0;
    }

}

//second example
/* let i = 0;
do {
    let a = prompt("Введіть обовязкову статтю витрат", ''),
        b = prompt("В скільки обійдеться", '');
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i = 0;
    }
    i++;

} while (i < 2); */

//third example
/* let i = 0;
while (i < 2) {
    let a = prompt("Введіть обовязкову статтю витрат", ''),
        b = prompt("В скільки обійдеться", '');
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
        i++;
    } else {
        i = 0;
    }
} */


appData.moneyPerDay = appData.budget / 30;
alert("Щоденний бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Min for you");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("well for you");
} else if (appData.moneyPerDay > 2000) {
    console.log("well enough for you");
} else {
    console.log("Error yor data");
}