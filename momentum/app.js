// const loginForm = document.getElementById("login-form"); //querySelector("#login-form")
// const loginInput = loginForm.querySelector("input"); 
// const loginButton = loginForm.querySelector("button"); 아래 두줄로 만들수도 있음

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button"); -->form태그 덕분에 버튼신경안써도 됨

//function onLoginBtnClick(){
    //console.log("click");
    //console.dir(loginInput);
    //console.log("hello", loginInput.value);
    //const username = loginInput.value;
    // if(username ===""){
    //     alert("Please write your name");
    // }else if(username.length > 15){
    //     alert("Your name is too long.");
    // }  --> html input태그에서 다 제한 했음
    //console.log(username);

//}

//loginButton.addEventListener("click", onLoginBtnClick); -->form태그 덕분에 버튼신경안써도 됨

// function onLoginSubmit(){
//     const username = loginInput.value;
//     console.log(username);
// }

// funciton onLoginSubmit(tomato){
   //tomato.preventDefault();
   //console.log(tomato);}
   //JS는 함수를 실행시키는 동시에 그 함수에 첫번째 인자로 object를 넣어줌
   //우리는 받기만 하면 됨

   //브라우저가 기본 동작을 실행하지 못하게 막아주는 것
   //(ex.form태그 안에서 input enter or button click -> 자동 새로고침)
function onLoginSubmit(event){
   evnet.preventDefault();
   console.log(event);
   console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
//function에서 onLoginSubmit()는 브라우저가 자동으로 즉시 function을 실행시켜버린다는 뜻
// **************eventListner에서의 함수는 내가 직접 실행하는것이 아닌 
//                  JS가 실행시켜주고 event에 대한 정보도 담아준다 **************


// link click의 기본 동작은 클릭하면 사이트가 넘어감 그 동작을 막아보자
const link = document.querySelector("a");

function handleLinkClick(event){
    event.preventDefault();
    console.log(event); // event에 어떤 정보가 담겨있는지 알수있어 mouse event
    console.dir(event);
    alert("clicked!");
    //alert 후에 ok 누르면 기본동작 실행됨
}



link.addEventListener("click", handleLinkClick);

//JS는 함수를 실행시키는 동시에 그 함수에 첫번째 인자로 object를 넣어줌