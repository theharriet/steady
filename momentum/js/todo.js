const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];  //const toDos = [];
//newTodo가 그려질때마다(paintTodo()) 그 텍스트를 배열에 push
//handleToDoSubmit에서 paintTodo하기 전에 toDos array를 가져와서 newTodo push

//local Storage에는 배열 저장불가. only String can be saved.
function saveToDos(){
    //localStorage.setItem("todos", toDos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // ****JSON.stringify() = 배열이든 object든 다 string으로 만들어줌
    //이제 localstorage안에 string으로 된 배열이 들어가있음 ex) ["a", "b", "c"]
    // 그 전에는 a,b,c,.. 단순 텍스트로 들어가있었음

}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span"); //나중에 button만들어서 삭제하려고 span태그까지 넣어줌
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//로컬스토리지에서 가져와서 화면에 아직 못 뿌려줌
//from the local storage에서 JSON.pars 해서 가져올거야
const savedToDos = localStorage.getItem(TODOS_KEY);
//console.log(savedToDos);
if(savedToDos !== null){ //if(savedToDos) => local storage에 todos가 있다면.
    const parseToDos = JSON.parse(savedToDos); //단순 텍스트를 배열형태로 변환 (object형태?)
    //console.log(savedToDos);
    // parseToDos.forEach(sayHello); //array에 있는 각각의 item에 대해 function(sayHello)을 실행
    //sayHello function 만드는 대신에
    //parseToDos.forEach((item) => console.log("this is the turn of ", item));
    // function을 더 짧게 작성하는 방법. (화살표함수)
    // function sayHello(item){ //JS가 event처럼 제공해주는 argument 정보
    //     console.log("this is the turn of ", item);
    // } 똑같
    
    //지금 문제는 local storage에 새로고침하고 다시 todos 쓰면 replacing 돼
    // 이유 -> todos배열 선언할때 빈배열이였고 handletodosubmit에서 빈배열에 push하고있어서
    // 해결-> application이 시작될 때 todos array를 빈 array가 아닌
    // const를 let으로 바꿔서 업뎃이 가능하도록 만들어 
    toDos = parseToDos; // 이전 배열을 저장하고 있는 array로 변경하고
    parseToDos.forEach(paintToDo); //paintToDo 실행
}