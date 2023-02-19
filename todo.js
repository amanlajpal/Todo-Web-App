
const formtodo=document.querySelector(".form_todo")
const todoInput=document.querySelector(".form_todo input[type='text']")
const todoList=document.querySelector(".todo_list ul")

formtodo.addEventListener('submit', (e)=>{
    e.preventDefault();
    let newLiContent=todoInput.value;
    todoInput.value='';
    const newLi=document.createElement('li')
    newLi.innerHTML=`
    <span class="todo_content">do this do that</span>
    <div class="actions">
        <button type="button" class="done">Done</button>
        <button type="button" class="remove">Remove</button>
    </div>
    `
    newLi.childNodes[1].textContent=newLiContent
    todoList.append(newLi)
    
})



todoList.addEventListener('click',(e)=>{
    todo_content=e.target;
    if(todo_content.classList.contains('done')){
        todo_content.parentNode.previousElementSibling.style.textDecoration="line-through";
    }
    else if(todo_content.classList.contains('remove'))
    {
        todo_content.parentNode.parentNode.remove()
    }
    
})
