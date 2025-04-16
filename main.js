
// assinging values

const addTaskButton = document.getElementById("add-task")
const taskInput = document.getElementById("task-input")
const taskList = document.getElementById("task-list")

// adding an eventlisterer
// when you click on addTaskbutton -> 
// created taskText var assigned it to taskInput.value.trim()
// this trims the todo values 
// eg: if user typed " Learn JS freecodecamp  "
// this command will return "Learn JS freecodecamp"
// No spaces
// if (taskText === "") return 
// taskText is a var holding trimed input
// if statements checks if the trimmed input is""
// if it is empty it 
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