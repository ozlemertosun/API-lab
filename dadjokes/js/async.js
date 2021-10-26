
document.querySelector(".Section__button").addEventListener("click", function(){
 
async function myFetch(){   
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            accept: "application/json", 
        }, 
});

let data = await response.json();
return data;

}

myFetch().then(data => {
    document.querySelector(".Section__paragraph").textContent = data.joke;
    });
});

//linje 4 kan også skrives som en anonym funktion = "const myFetch = async () => {}"