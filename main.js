const addTaskButton = document.getElementById("add-task")
const taskInput = document.getElementById("task-input")
const taskList = document.getElementById("task-list")

addTaskButton.addEventListener("click", () =>{
    const taskText = taskInput.value.trim();
    if (taskText === "") return
    
    const li = document.createElement("li")

    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete">Delete</button>
    `
    li.querySelector(".task-text").addEventListener("click", () => {
        li.classList.toggle("completed")
    })

    li.querySelector(".delete").addEventListener("click", () =>{
        li.remove()
    })

    taskList.appendChild(li);
    taskInput.value = ""
})