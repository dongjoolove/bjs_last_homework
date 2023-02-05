const toDoForm = document.getElementById("toDoFrm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("toDolist");
const TODOS_KEY="toDos";
let ToDos=[];
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(ToDos));

}
function deleteToDo(event) { 
    const li = event.target.parentElement;            
    ToDos = ToDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove(); 
    saveToDos();
}

function printTodo(toDoAdd){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id=toDoAdd.id;  
    span.innerText = toDoAdd.text;  
    
    const button = document.createElement("button");
    button.classList.add("button");
    button.innerText = "Del";
    button.addEventListener("click", deleteToDo);    
    li.appendChild(span);
    li.appendChild(button);
  
    toDoList.appendChild(li);
    saveToDos();
}
function handleAddSaveTodo(event){
    event.preventDefault();

    const toDoAdd=toDoInput.value;
    if(toDoAdd!==""){
        const newToDobj={
            text:toDoAdd,
            id:Date.now(),
        }
        ToDos.push(newToDobj);
        printTodo(newToDobj);
    }
    toDoInput.value="";

}

toDoForm.addEventListener("submit",handleAddSaveTodo); 

const SaveTodoList=localStorage.getItem(TODOS_KEY);//JSON.parse(localStorage.getItem(TODOS_KEY)); 

if(SaveTodoList!==null){
    const parsedToDos=JSON.parse(SaveTodoList);
    ToDos = parsedToDos; 
    parsedToDos.forEach(printTodo);
    
}
