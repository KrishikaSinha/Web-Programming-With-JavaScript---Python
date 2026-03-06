const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const totalTasksSpan = document.getElementById("totalTasks");
const completedTasksSpan = document.getElementById("completedTasks");

let totalTasks = 0;
let completedTasks = 0;

addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    createTaskElement(taskText);
    taskInput.value = "";
});

function createTaskElement(taskText) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = taskText;

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("task-buttons");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", function () {
        const newTask = prompt("Edit your task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask.trim();
        }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
        totalTasks--;
        if (checkbox.checked) {
            completedTasks--;
        }
        updateCounter();
    });

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            span.classList.add("completed");
            completedTasks++;
        } else {
            span.classList.remove("completed");
            completedTasks--;
        }
        updateCounter();
    });

    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(buttonDiv);

    taskList.appendChild(li);

    totalTasks++;
    updateCounter();
}

function updateCounter() {
    totalTasksSpan.textContent = "Total: " + totalTasks;
    completedTasksSpan.textContent = "Completed: " + completedTasks;
}
