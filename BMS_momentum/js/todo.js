const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    //console.log(li.id);
    li.remove();
    //console.log(typeof li.id); ==> string stirng 끼리는 비교가 안됨 그래서 parse해줘
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //삭제버튼눌린 todo를 제외한 새 array
    saveToDos(); //새로운 array를 localstorage에 저장

}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; //newTodoObj에 저장된 id를 여기다 저장해서 li 구별하기
    const span = document.createElement("span");
    span.innerText = newTodo.text; //object형태로 newTodo를 넘겨받기에 .text
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}