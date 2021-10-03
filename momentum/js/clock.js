const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");
}
//sayHello(); //JS가 이 라인을 보자마자 실행하게 됨
//setInterval(sayHello, 5000); //5초마다 sayHello()실행됨
//setTimeout(sayHello, 5000); //5초 뒤에 한번만 실행

function getClock(){
    // const date = new Date();
    // //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    //padStart() / padEnd() - 2 or more 자리수 뒤/앞에 공백을 문자로 채워주는 함수
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //setInterval실행되려면 1초기다려야 하므로 즉시실행한번 해
setInterval(getClock, 1000);