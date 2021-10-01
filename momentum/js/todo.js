const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];  

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//삭제버튼 누르면 local storage도 변경 되는 작업
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

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    //toDos.push(newTodo); //단순 텍스트가 아닌 object 형태로 push하고 싶음 그래서 아랫줄
    const newTodoObj = {
        text: newTodo,
        id: Date.now() //랜덤숫자
    }
    toDos.push(newTodoObj); //toDos 배열에 텍스트말고 object넘겨줌
    paintToDo(newTodoObj); //newTodo string이 아닌 위에서 만든 object로 넘겨줌
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){ 
    const parseToDos = JSON.parse(savedToDos); 
    toDos = parseToDos;
    parseToDos.forEach(paintToDo); //paintToDo({text:"a", id:1224221}) 이런식으로 진행되고있음
}


//array에서 어떤 아이템을 삭제하고 싶으면 그 아이템이 삭제되는것이 아닌 그 아이템이 제외된 새 array가 만들어짐

// // [예시]
// function sexyFilter(){ return true/ false}
// function sexyFilter(item){return item !==3}
// [다른문제]const arr = ["pizza", "banana", "potato"]
// function sexyFilter(food){return food !== "banana"}
// arr.filter(sexyFilter) ===>["pizza", "potato"]
// [다른문제] const arr = [1234, 5454, 223, 122,45, 6774,335]
//function sexyFunction(potato){return potato <=1000}
//arr.filter(sexyFunction) ====> [223, 122, 45, 335]
//[다른문제]const todos = [{"text":"a","id":1633104937063},{"text":"b","id":1633104941636},{"text":"c","id":1633104942133}]
//function sexyFilter(todo){return todo.id !==1633104937063}
//arr.filter(sexyFilter) ====> [{"text":"b","id":1633104941636},{"text":"c","id":1633104942133}]


// [1,2,3,4].filter(sexyFilter)
// //sexyFilter(1) == true / keep the number 1
// //sexyFilter(2) == true / keep the number 2
// //sexyFilter(3) == false / not keep the number 3
// //sexyFilter(4) == true / keep the number 4 
// .filter는 새 array를 만들어주는데
// //sexyFilter function은 만약 새 array에도 1,2,3,4를 포함하고 싶으면 true가 리턴해야함
// // 만약 false를 리턴하면 그 item은 새array에 포함되지 않을거임 (.filter의 역할)
// 그 이전 array는 그대로 존재.