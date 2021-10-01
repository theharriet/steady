//user에게 인사하기 + local storage에 따른 화면

//user가 이름을 제출하면 form을 없애보자
// 첫번째 방법 css를 이용해서 className에 hidden을 추가해서 없애기 -> 이걸해볼겨
// 두번째 방법은 html 요소 자체를 없애는것
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// function onLoginSubmit(event){
//     event.preventDefault();
//     loginForm.classList.add("hidden");
//     const username = loginInput.value;
//     console.log(username);
// }

//form은 숨기고 h1은 보이도록(단 h1 내용물이 있을 때만)
function onLoginSubmit(event){
    // event.preventDefault();
    // loginForm.classList.add("hidden");
    // const username = loginInput.value;
    // greeting.innerText = "Hello " + username;
    // greeting.classList.remove("hidden");

    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value; //usernameThatTheUserWrote
     //localStorage.setItem("username", username);
     localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = `Hello ${username}`; //latest rule
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(username); //input 창에서 받는 username
    
}

//username 저장하기 - 매번 물어볼수 없자나
//localStorage -> 브라우저에 저장할 수 있게 해줌 (setItem, getItem, removeItem)
//localStorage.getItem("username")

//loginForm.addEventListener("submit", onLoginSubmit);

//같은 코드 반복 되니까 함수로 만들어줌
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


//local storage에 유저 정보가 없으면 form보이고 없으면 h1보이게 하기
//const savedUsername = localStorage.getItem("username");
const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);
    
if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    //show the greetings
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // greeting.innerText =`Hello ${savedUsername}`;
    paintGreetings(savedUsername); //local storage에서 받은 username
}

//username 반복됨 -> 같아야 하는데 오타 등으로 인해 실수가 생길수 이쓰므로 변수로 고정
// 그래야 뭔가 잘 못 되면 JS가 알려줄수있음



// 다른 방법 (저장하자마자 다음 라인에서 paintGreetings 함수 호출해서 유저를 찾아봄)
// // local storage는 두번 열게 되지만 함수 인자 안받아도 됨
// function onLoginSubmit(event){
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME); 
//     localStorage.setItem(USERNAME_KEY, loginInput.value);
//     paintGreetings();
// }

// function paintGreetings(){ //paintGreetings(username)
//     const username = localStorage.getItem(USERNAME_KEY); //이거 덕분에 함수인자로 username안받아도 됨
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if(savedUsername === null){
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit", onLoginSubmit);
// }else {
//     paintGreetings();
// }


//html에 form과 h1은 숨겨진게 default
//JS는 local storage에 username을 찾아보고 그에 따라 움직일거야
// function onLoginSubim은 JS가 실행하는데 그때 넘겨 받은 인자 event로 기본동작 막아