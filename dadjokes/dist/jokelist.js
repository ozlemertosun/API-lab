"use strict";

var current = 0;

function jokeList() {
  if (current != 10) {
    current++;
    var listWrap = document.querySelector('.Section__list-wrap');
    var litsItem = document.createElement('li');
    listWrap.appendChild(litsItem);
    axios.get('https://icanhazdadjoke.com/', {
      headers: {
        accept: 'application/json'
      }
    }).then(function (response) {
      console.log(response.data.joke);
      litsItem.textContent = response.data.joke;
    });
  }
}

document.querySelector('.Section__button').addEventListener('click', jokeList);