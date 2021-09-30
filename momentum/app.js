// const calculator = {
//     add: function (a, b){
//         return a + b;
//     },
//     minus: function (a, b){
//         return a - b;
//     },
//     times: function (a, b){
//         return a * b;
//     },
//     divide: function (a, b){
//         return a / b;
//     },
//     powerof: function (a, b){
//         return a ** b;
//     }
// }

// calculator.add(8, 4);
// calculator.minus(8, 4);
// calculator.times(8, 4);
// calculator.divide(8, 4);
// calculator.powerof(2, 3);

// const plsuResult = calculator.add(4, 6);

// //console.log(plsuResult);

// //const age = parseInt(prompt("How old are you?"));

// //console.log(typeof age); //string
// //console.log(age, parseInt(age)); //parseInt : 숫자만 parse 할수있어 (아닌경우 NaN)
// //console.log(isNaN(age));

// if(isNaN(age) || age < 0){
//     console.log("Please write a positive number");
// }else if(age < 18) {
//     console.log("You are too young")
// }else if(age >=18 && age <=50){
//     console.log("You can drink");
// }else if(age === 100){ //이게 아래있으면 age>80에 걸려서 실행안됨 === : age가 100인가?라는 뜻
//     console.log("You can do whatever you want")
// }else if(age > 80){
//     console.log("You should stop drinking");

// }

// //console.dir(document)

//const h1 = document.getElementById("h1");

//console.dir(h1); // property, 사용가능한 event 확인 가능

//h1.innerText = "Got you!";

//console.log(h1.id);
//console.log(h1.className);

const h1 = document.querySelector("div.hello:first-child h1");
//h1.style.color = "blue";

function handleh1Click(){
    // console.log(h1.style.color);
    // h1.style.color = "purple";
    // console.log(h1.style.color); --> css

    // const clickedClass = "clicked";
    // if(h1.className === clickedClass){
    //     h1.className = "";
    // }else {
    //     h1.className = clickedClass;
    // }   --> css에 클래스 네임 명시해주면 그건 무시당하는 버그가 생길수 있음. sexy-font가 replace됨

    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else {
        h1.classList.add(clickedClass);
    }
}

// function handleMouseEnter(){
//     h1.innerText = "mouse is here!";
//     console.log("Mouse is here!");
// }

// function handleMouseLeave(){
//     h1.innerText = "Mouse is gone!";
// }

// function handleWondowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//     alert("copier!");
// }

// function handleWindowOffline(){
//     alert("SOS no Wifi");
// }

// function handleWindowOnline(){
//     alert("All Good");
// }



h1.addEventListener("click", handleh1Click);
// // == h1.onclick = handleh1Click;
// h1.addEventListener("mouseenter", handleMouseEnter);
// // == h1.onmouseenter = handleMouseEnter;
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWondowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);