const form = document.querySelector(".js_form");
const input = form.querySelector("input");
const greeetings = document.querySelector(".js_greeetings");
const delNameBtn = document.querySelector(".nameDelete");

const USER_STORAGE = "loadUser";
const SHOWING_NAME = "showing";

function saveName(text){
    localStorage.setItem(USER_STORAGE, text);
}

function handleSubmit(event){
    event.preventDefault();
    const loadNameValue = input.value;
    paintName(loadNameValue);
    window.location.reload();
    saveName(loadNameValue);
}

function askName(){
    form.classList.add(SHOWING_NAME);
    form.addEventListener("submit", handleSubmit);
}

function paintName(text){
    form.classList.remove(SHOWING_NAME);
    greeetings.classList.add(SHOWING_NAME);
    greeetings.innerText = `Hello ${text}`;
}

function deleteName(){
    localStorage.removeItem(USER_STORAGE);
    window.location.reload();
}

function loadName(){
    const loadUser = localStorage.getItem(USER_STORAGE);
    if(loadUser === null){
        askName();
    }else{
        paintName(loadUser);
        delNameBtn.classList.add(SHOWING_NAME);
    }
}

function init(){
    loadName();
    delNameBtn.addEventListener("click", deleteName);
}

init();