const todoform = document.querySelector(".js_todoform");
const todoinput = todoform.querySelector("input");
const todolist = document.querySelector(".js_todolist");
const deleteBtn = document.querySelector(".deleteAll");

const TODOS_LS = 'ttodos';

let toDos = [];

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todolist.removeChild(li);
    const cleanTodos = toDos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    toDos = cleanTodos;
    saveToDos();
}

function deleteAll_li(event){
    todolist.remove();
    const cleanTodoss = toDos.filter(function(todolist){
        return;
    });
    toDos = cleanTodoss;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify (toDos));
}

function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteTodo);
    deleteBtn.addEventListener("click", deleteAll_li);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todolist.appendChild(li);
    const todoObj = {
        text: text,
        id: newId
    };
    toDos.push(todoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const loadValue = todoinput.value;
    paintTodo(loadValue);
    todoinput.value = "";
}

function loadTodo(){
    const loadtodos = localStorage.getItem(TODOS_LS);
    if(loadtodos !== null){
        const backTodos = JSON.parse(loadtodos)
        backTodos.forEach(function(todo){
            paintTodo(todo.text);
        });
    }
}


function init(){
    loadTodo();
    todoform.addEventListener("submit", handleSubmit)
}

init();