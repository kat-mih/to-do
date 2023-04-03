// Import images
import check from './images/check.png'
import cancel from './images/cancel.png'

// Add task
const addTask = document.querySelector('.add-task__button');
const taskContainer = document.querySelector('.task-container');
const inputTask = document.querySelector('#add-task__input');

addTask.addEventListener('click', addNewTask);

function addNewTask() {
    let task = document.createElement('div');
    task.classList.add('task');

    let taskContent = document.createElement('div');
    taskContent.classList.add('task__content');

    let text = document.createElement('span'); 
    text.innerText = `${inputTask.value}`;
    taskContent.appendChild(text);
    task.appendChild(taskContent);

    let buttonGroup = document.createElement('div');
    buttonGroup.classList.add('button__group');

    let checkButton = document.createElement('button');
    checkButton.innerHTML = `<img class="button__logo" src="${check}"/>`
    checkButton.classList.add('button', 'task__check-button');
    buttonGroup.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<img class="button__logo" src="${cancel}"/>`
    deleteButton.classList.add('button', 'task__delete-button');
    buttonGroup.appendChild(deleteButton);

    task.append(buttonGroup);

    if (inputTask.value === '')
        alert('Please enter a task');
    else {
        taskContainer.append(task);
    }

    inputTask.value = '';

    // Check task
    checkButton.addEventListener('click', checkTask);

    function checkTask() {
        const task = checkButton.parentElement.previousElementSibling;
        task.classList.toggle('checked');
    }

    // Delete task
    deleteButton.addEventListener('click', deleteTask);

    function deleteTask(e) {
        let target = e.target;
        target.parentElement.parentElement.parentElement.remove();
    }
}

