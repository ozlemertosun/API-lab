"use strict";

//javascript
document.querySelector(".Section__button").addEventListener("click", function () {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      accept: "application/json"
    }
  }) //request 
  .then(function (response) {
    return response.json();
  }) //response 
  .then(function (data) {
    document.querySelector(".Section__paragraph").textContent = data.joke;
  });
});