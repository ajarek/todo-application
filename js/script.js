const form = document.querySelector('form')
const wrapper = document.querySelector('.wrapper')
const btnDelete = document.querySelectorAll('.btn-delete')

function checkTask(e) {
    e.target.classList.toggle('checked')
    e.target.nextElementSibling.classList.toggle('through')
    if (e.target.classList.contains('checked')) {
        e.target.innerText = '✓'
    } else {
        e.target.innerText = ''
    }
}

function displayTask(e) {
    e.preventDefault()
    const input = document.querySelector('input[name="todo"]')
    const inputValue = input.value
    if (inputValue) {
        const div = document.createElement('div')
        div.classList.add('todo-item')
        div.innerHTML = `<button class="check"></button>
        <div class="item-todo-text"> ${inputValue}</div>   
        <button class="btn-delete">❌</button>`
        wrapper.appendChild(div)
    }
    input.value = ''
    start()
}

form.addEventListener('submit', displayTask)

function start() {
    const divCheck = document.querySelectorAll('.check')
    const btnDelete = document.querySelectorAll('.btn-delete')
    if (divCheck) {
        divCheck.forEach(el => {
            el.addEventListener('click', checkTask)
        })
    }
    if (btnDelete) {
        btnDelete.forEach(el => {
            el.addEventListener('click', (e) => {
                e.path[1].remove()
                showLength()
            })
        })
    }
    showLength()
}

function activMenu() {
    const menuItem = document.querySelectorAll('.menu-item')
    menuItem.forEach(el => {
        el.addEventListener('click', show)
    })
}

function show(e) {
    todoItems = document.querySelectorAll('.todo-item')
    const divCheck = document.querySelectorAll('.check')
    divCheck.forEach(el => {
        if (e.target.id == 'clear') {
            if (el.classList.contains('checked')) {
                el.parentElement.remove()
                showLength()
            }
        } else if (e.target.id == 'active') {
            el.parentElement.style.display = 'flex'
            if (el.classList.contains('checked')) {
                el.parentElement.style.display = 'none'
                showLength()
            }
        } else if (e.target.id == 'completed') {
            el.parentElement.style.display = 'flex'
            if (!el.classList.contains('checked')) {
                el.parentElement.style.display = 'none'
                showLength()
            }
        } else if (e.target.id == 'all') {
            el.parentElement.style.display = 'flex'
            showLength()
        }
    })
}
activMenu()

function showLength() {
    todoItems = document.querySelectorAll('.todo-item')
    btmLength = document.querySelector('#length')
    btmLength.innerText = todoItems.length + ' items left'
}
showLength()
const btnThema = document.querySelector('.thema button')

function changeThema(e) {
    const css = document.querySelector('#thema')
    if (e.target.id !== 'sun') {
        const adress = 'dark'
        css.href = "css/thema-" + adress + ".css"
        btnThema.innerHTML = `<img id="sun" src="images/icon-sun.svg" alt="icon-sun">`
    } else {
        css.href = "css/thema-light.css"
        btnThema.innerHTML = `<img id="moon" src="images/icon-moon.svg" alt="icon-moon">`
    }
}
btnThema.addEventListener('click', changeThema)