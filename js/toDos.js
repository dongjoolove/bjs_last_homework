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

function checkToDo(checkId,checkVal) { 
    //const checkedVal = event.target.parentElement;            
    ToDos.forEach(element => {
        if(checkId==element.id){
            if(checkVal===true){
                element.checkVal=true;
            }else{
                element.checkVal=false;
            }
            
        }

        
      });

    
    saveToDos();
}

function printTodo(toDoAdd){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const checkbox = document.createElement("input");
    const li_id=toDoAdd.id;  
    li.id=toDoAdd.id;  
    const checkedVal=toDoAdd.checkVal;

    span.innerText = toDoAdd.text;  
    checkbox.type = 'checkbox';
    
    checkbox.addEventListener('change', (event) => {
        if(checkbox.checked ){
          span.style.textDecoration = 'line-through';
          
          checkToDo(li_id,true);

        } else {
         span.style.textDecoration = '';
      
          checkToDo(li_id,false);
        }
        
      });   
    
    const button = document.createElement("button");
    button.classList.add("button");
    button.innerText = "Del";
    button.addEventListener("click", deleteToDo);    
    if(checkedVal===true){
        span.style.textDecoration = 'line-through';
        
        checkbox.setAttribute('checked', 'checked');
      
       
    }
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
   
    toDoList.appendChild(li);
   
    saveToDos();
}
function handleAddSaveTodo(event){
    event.preventDefault();

    const toDoAdd=toDoInput.value;
    const toDocheckVal=false;
    if(toDoAdd!==""){
        const newToDobj={
            text:toDoAdd,
            id:Date.now(),
            checkVal:toDocheckVal,
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
