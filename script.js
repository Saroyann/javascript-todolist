const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const addTask = () => {
    const taskText = inputBox.value.trim();
    
    if (taskText === '') {
        alert('Inputan todolist tidak boleh kosong');
    } else {
        const li = createTaskElement(taskText);
        listContainer.appendChild(li);
        saveData();
    }
    
    inputBox.value = '';
    saveData();
}

const createTaskElement = (taskText) => {
    const li = document.createElement('li');
    li.textContent = taskText;
    
    const span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    
    return li;
}

const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem('data') || '';
}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
    saveData();
}, false);

showTask();
