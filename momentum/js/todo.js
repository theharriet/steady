const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input"); same~~~~
const toDoList = document.getElementById("todo-list");

const toDos = []; //newTodo가 그려질때마다(paintTodo()) 그 텍스트를 배열에 push
//handleToDoSubmit에서 paintTodo하기 전에 toDos array를 가져와서 newTodo push

//local Storage에는 배열 저장불가. only String can be saved.
function saveToDos(){
    //localStorage.setItem("todos", toDos);
    localStorage.setItem("todos", JSON.stringify(toDos));
    //****JSON.stringify() = 배열이든 object든 다 string으로 만들어줌
    //이제 localstorage안에 string으로 된 배열이 들어가있음 ex) ["a", "b", "c"]
    // 그 전에는 a,b,c,.. 단순 텍스트로 들어가있었음


}

function deleteTodo(event){
    // console.log(event); //어떤버튼이 눌렸는지 볼수있음
    // console.dir(event.target); //parentNode, parentNode 확인가능
    // console.dir(event.target.parentElement.innerText); //뭐라고 써져있는지도 나옴
    // console.log(event.target.parentElement); //li들 확인가능
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    //console.log("I will paint", newTodo);
    //li만들어서 ul 아래에 넣기
    const li = document.createElement("li");
    const span = document.createElement("span"); //나중에 button만들어서 삭제하려고 span태그까지 넣어줌
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    
    //console.log(li);
    toDoList.appendChild(li);
}
// 새로고침하면 사라짐 -> local storage에 저장, 삭제 버튼없음 -> deleteTodo

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    //console.log(toDoInput.value);
    toDoInput.value = "";
    //console.log(newTodo, toDoInput.value);

    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit);