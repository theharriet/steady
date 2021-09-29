const calculator = {
    add: function (a, b){
        return a + b;
    },
    minus: function (a, b){
        return a - b;
    },
    times: function (a, b){
        return a * b;
    },
    divide: function (a, b){
        return a / b;
    },
    powerof: function (a, b){
        return a ** b;
    }
}

calculator.add(8, 4);
calculator.minus(8, 4);
calculator.times(8, 4);
calculator.divide(8, 4);
calculator.powerof(2, 3);

const plsuResult = calculator.add(4, 6);

//console.log(plsuResult);

const age = parseInt(prompt("How old are you?"));

//console.log(typeof age); //string
//console.log(age, parseInt(age)); //parseInt : 숫자만 parse 할수있어 (아닌경우 NaN)
//console.log(isNaN(age));

if(isNaN(age) || age < 0){
    console.log("Please write a positive number");
}else if(age < 18) {
    console.log("You are too young")
}else if(age >=18 && age <=50){
    console.log("You can drink");
}else if(age === 100){ //이게 아래있으면 age>80에 걸려서 실행안됨 === : age가 100인가?라는 뜻
    console.log("You can do whatever you want")
}else if(age > 80){
    console.log("You should stop drinking");

}

//console.dir(document)

const title = document.getElementById("title");

console.dir(title);

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);