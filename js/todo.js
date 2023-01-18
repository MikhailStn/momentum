const toDoBtn = document.querySelector('.toDo-button')
const toDo = document.querySelector('.toDo-wrapper')
const clearBtn = document.querySelector('.toDo-btn')
const toDoItems = document.querySelectorAll('.toDo-item')

const toggleToDo = () => {
    toDo.classList.toggle('toDo-opened')
}

toDoBtn.addEventListener('click', toggleToDo)

const clearToDo = () => {
    toDoItems.forEach(el => el.value = '')
}

clearBtn.addEventListener('click', clearToDo)

// localStorage Todo

const setLocalStorage = () => {
    localStorage.setItem('toDo0', toDoItems[0].value)
    localStorage.setItem('toDo1', toDoItems[1].value);
    localStorage.setItem('toDo2', toDoItems[2].value);
    localStorage.setItem('toDo3', toDoItems[3].value);
    localStorage.setItem('toDo4', toDoItems[4].value);
    localStorage.setItem('toDo5', toDoItems[5].value);
    localStorage.setItem('toDo6', toDoItems[6].value);
    localStorage.setItem('toDo7', toDoItems[7].value);
}
  
window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('keydown', setLocalStorage)
window.addEventListener('click', setLocalStorage)
  
const getLocalStorage = () => {
    toDoItems.forEach(el => {
        if(localStorage.getItem('toDo0')) {
            toDoItems[0].value = localStorage.getItem('toDo0')
            toDoItems[1].value = localStorage.getItem('toDo1')
            toDoItems[2].value = localStorage.getItem('toDo2')
            toDoItems[3].value = localStorage.getItem('toDo3')
            toDoItems[4].value = localStorage.getItem('toDo4')
            toDoItems[5].value = localStorage.getItem('toDo5')
            toDoItems[6].value = localStorage.getItem('toDo6')
            toDoItems[7].value = localStorage.getItem('toDo7')
        } else if (localStorage.getItem('toDo1')) {
            toDoItems[1].value = localStorage.getItem('toDo1')
            toDoItems[0].value = localStorage.getItem('toDo0')
            toDoItems[1].value = localStorage.getItem('toDo1')
            toDoItems[2].value = localStorage.getItem('toDo2')
            toDoItems[3].value = localStorage.getItem('toDo3')
            toDoItems[4].value = localStorage.getItem('toDo4')
            toDoItems[5].value = localStorage.getItem('toDo5')
            toDoItems[6].value = localStorage.getItem('toDo6')
            toDoItems[7].value = localStorage.getItem('toDo7')
        } else if (localStorage.getItem('toDo2')) {
            toDoItems[2].value = localStorage.getItem('toDo2')
            toDoItems[0].value = localStorage.getItem('toDo0')
            toDoItems[1].value = localStorage.getItem('toDo1')
            toDoItems[2].value = localStorage.getItem('toDo2')
            toDoItems[3].value = localStorage.getItem('toDo3')
            toDoItems[4].value = localStorage.getItem('toDo4')
            toDoItems[5].value = localStorage.getItem('toDo5')
            toDoItems[6].value = localStorage.getItem('toDo6')
            toDoItems[7].value = localStorage.getItem('toDo7')
        } else if (localStorage.getItem('toDo3')) {
            toDoItems[3].value = localStorage.getItem('toDo3')
            toDoItems[0].value = localStorage.getItem('toDo0')
            toDoItems[1].value = localStorage.getItem('toDo1')
            toDoItems[2].value = localStorage.getItem('toDo2')
            toDoItems[3].value = localStorage.getItem('toDo3')
            toDoItems[4].value = localStorage.getItem('toDo4')
            toDoItems[5].value = localStorage.getItem('toDo5')
            toDoItems[6].value = localStorage.getItem('toDo6')
            toDoItems[7].value = localStorage.getItem('toDo7')
        } else if (localStorage.getItem('toDo4')) {
            toDoItems[4].value = localStorage.getItem('toDo4')
            toDoItems[0].value = localStorage.getItem('toDo0')
            toDoItems[1].value = localStorage.getItem('toDo1')
            toDoItems[2].value = localStorage.getItem('toDo2')
            toDoItems[3].value = localStorage.getItem('toDo3')
            toDoItems[4].value = localStorage.getItem('toDo4')
            toDoItems[5].value = localStorage.getItem('toDo5')
            toDoItems[6].value = localStorage.getItem('toDo6')
            toDoItems[7].value = localStorage.getItem('toDo7')
        } else if (localStorage.getItem('toDo5')) {
            toDoItems[5].value = localStorage.getItem('toDo5')
            toDoItems[0].value = localStorage.getItem('toDo0')
            toDoItems[1].value = localStorage.getItem('toDo1')
            toDoItems[2].value = localStorage.getItem('toDo2')
            toDoItems[3].value = localStorage.getItem('toDo3')
            toDoItems[4].value = localStorage.getItem('toDo4')
            toDoItems[5].value = localStorage.getItem('toDo5')
            toDoItems[6].value = localStorage.getItem('toDo6')
            toDoItems[7].value = localStorage.getItem('toDo7')
        } else if (localStorage.getItem('toDo6')) {
            toDoItems[6].value = localStorage.getItem('toDo6')
            toDoItems[0].value = localStorage.getItem('toDo0')
            toDoItems[1].value = localStorage.getItem('toDo1')
            toDoItems[2].value = localStorage.getItem('toDo2')
            toDoItems[3].value = localStorage.getItem('toDo3')
            toDoItems[4].value = localStorage.getItem('toDo4')
            toDoItems[5].value = localStorage.getItem('toDo5')
            toDoItems[6].value = localStorage.getItem('toDo6')
            toDoItems[7].value = localStorage.getItem('toDo7')
        } else if (localStorage.getItem('toDo7')) {
            toDoItems[7].value = localStorage.getItem('toDo7')
            toDoItems[0].value = localStorage.getItem('toDo0')
            toDoItems[1].value = localStorage.getItem('toDo1')
            toDoItems[2].value = localStorage.getItem('toDo2')
            toDoItems[3].value = localStorage.getItem('toDo3')
            toDoItems[4].value = localStorage.getItem('toDo4')
            toDoItems[5].value = localStorage.getItem('toDo5')
            toDoItems[6].value = localStorage.getItem('toDo6')
            toDoItems[7].value = localStorage.getItem('toDo7')
        }
    })
}
  
window.addEventListener('load', getLocalStorage)

