const user = document.querySelector("#input-text")
const post = document.querySelector('#input-textarea')
const error = document.querySelector('#error-form')
const save = document.querySelector('#save-form')
const form = document.querySelector('#form')

function saveLocalStorage(dato) {
    let data = JSON.parse(localStorage.getItem('post'))

    if (data === undefined) {
        data = []
    }
    if (data === null){
        data = []
    }
    data.push(dato)

    localStorage.setItem('post', JSON.stringify(data))
}
const validData = () => {
    let validUser = false
    let validPost = false
    
    if (user.value === '' || user.value.length < 5) {
        error.textContent = 'please enter valid informatioN'
        validUser = false
    } else {
        validUser = true
        error.textContent = ''
    }

    if ( user.value.length < 5) {
        error.textContent = 'please enter valid information (min 5 characters)'
        validUser = false
    } else {
        validUser = true
        error.textContent = ''
    }

    if (post.value === '' || post.value.length < 10) {
        error.textContent = 'please enter valid information'
        validPost = false
    } else {
        validPost = true
        error.textContent = ''
    }
    
    if (post.value.length < 10) {
        error.textContent = 'please enter valid information (min 10 characters)'
        validPost = false
    } else {
        validPost = true
        error.textContent = ''
    }

    if (validUser && validPost) {
        const data = {
            name: user.value,
            post: post.value
        }
        saveLocalStorage(data)
        save.textContent = 'Brilliant!! you posted your comment satisfactorily'
        user.value = ''
        post.value = ''
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault()
    validData()
})