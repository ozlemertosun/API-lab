async function fetchJoke() {
    try {
    const { data } = await axios.get('https://icanhazdadjoke.com/', {
        headers: {
            accept: 'application/json'
    }
    })

    document.querySelector('.Section__paragraph').textContent = data.joke
        } catch (error) {
            console.error(error)
    }
    }
    
    fetchJoke()
    document.querySelector('.Section__button').addEventListener('click', fetchJoke)

//linje 1 kan også skrives som en anonym funktion = "const myFetch = async () => {}"

//hent star wars API
/* 
axios.get('https://swapi.dev/api/starships/12/', {
        headers: {
            accept: 'application/json'
    }
    }).then(response => console.log(response.data.name)) */