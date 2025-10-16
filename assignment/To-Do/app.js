const todoInput = document.querySelector('#toDo')
const button = document.querySelector('.btn')
const box = document.querySelector('.text')




const todos = []
let todoId = 0
function onClick () {
    const value = todoInput.value
    
    // Create a container for the todo item
    const todoContainer = document.createElement('div')
    todoContainer.classList.add('todo-item')
    
    const para = document.createElement('p')
    const edit = document.createElement('button')
    const del = document.createElement('button')
    
    para.setAttribute('id' , todoId)    
    para.innerHTML = `${value}`
    para.style.display = "inline" 
    
    edit.setAttribute("class" , "editText" )
    del.setAttribute("class" , "delText" )
    edit.textContent = "Edit" 
    del.textContent = "Delete" 

    // Edit functionality
    edit.addEventListener('click' , (e) => {
        e.preventDefault()
        
        const inputField = document.createElement('input')
        inputField.setAttribute('class' , 'inputField')
        inputField.value = para.innerText;
        
        todoContainer.replaceChild(inputField, para);
        inputField.focus() // Automatically focus the input field
        e.target.style.display = 'none' 

        const btn = document.createElement('button')
        btn.innerText = 'Save'
        btn.setAttribute('class', 'save')
        
        todoContainer.insertBefore(btn, del);

        btn.addEventListener('click', (e) => {
            e.preventDefault()
            para.innerHTML = inputField.value
            todoContainer.replaceChild(para, inputField)
            btn.remove()
            edit.style.display = 'inline'
        })
    })

    // Delete functionality
    del.addEventListener('click' , (e) => {
        e.preventDefault()
        todoContainer.classList.add('fall')
        todoContainer.addEventListener('animationend', () => {
            box.removeChild(todoContainer)
        })
    })

    // Append elements to container
    todoContainer.appendChild(para)
    todoContainer.appendChild(document.createTextNode(" ")) 
    todoContainer.appendChild(edit)
    todoContainer.appendChild(document.createTextNode(" ")) 
    todoContainer.appendChild(del)

    // Append container to box
    box.appendChild(todoContainer)

    todos.push(para)
    console.log(para);
    console.log(todos);
    todoId++

    // Clear input and focus for next todo
    todoInput.value = ''
    todoInput.focus()
}





