let current = 0

function jokeList(){
    if (current != 10) {
    current++
   
    const listWrap = document.querySelector('.Section__list-wrap')
    const litsItem = document.createElement('li')
    listWrap.appendChild(litsItem)
    

    axios.get('https://icanhazdadjoke.com/', {
        headers: {
            accept: 'application/json'
        }
    })
    .then(response => {
    console.log(response.data.joke)
    litsItem.textContent = response.data.joke
    })
}}

document.querySelector('.Section__button').addEventListener('click', jokeList)