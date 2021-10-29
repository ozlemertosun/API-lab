const createElement = (tag, options) => {
    return Object.assign(document.createElement(tag), options)
    }

let current = 0
const listWrap = document.querySelector('.Section__list-wrap')


function jokeList(){
    if (current != 10) {
    current++

    btnWrap = createElement('div', {
        className: 'btnWrap'
    })
    litsItem = createElement('li', {
        className: 'listItem'
    })
    deleteBtn = createElement('button', {
        className: 'deleteBtn'
    })
   
    listWrap.appendChild(btnWrap)
    btnWrap.appendChild(litsItem)
    btnWrap.appendChild(deleteBtn)

    axios.get('https://icanhazdadjoke.com/', {
        headers: {
            accept: 'application/json'
        }
    })
    .then(response => {
    console.log(response.data.joke)
    litsItem.textContent = response.data.joke
    deleteBtn.textContent = 'Delete'
    })
}}

document.querySelector('.Section__button').addEventListener('click', jokeList)


deleteBtn.addEventListener('click',() =>{
    
}) 