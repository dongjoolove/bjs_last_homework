const loginFrm = document.querySelector("#loginFrm");
const loginInput = document.querySelector("#loginFrm input");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event){
    event.preventDefault();
    loginFrm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}!!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginFrm.classList.remove(HIDDEN_CLASSNAME);
    loginFrm.addEventListener("submit", loginSubmit);
} else {
    paintGreeting(savedUsername);
}