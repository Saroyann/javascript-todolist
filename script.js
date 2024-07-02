const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const addTask = ()=> {
    if(inputBox === '') {
        alert('inputan todolist tidak boleh kosong kosong');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = '';
}
