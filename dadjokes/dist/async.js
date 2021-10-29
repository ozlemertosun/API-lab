"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("axios"),
    axios = _require["default"];

function fetchJoke() {
  return _fetchJoke.apply(this, arguments);
}

function _fetchJoke() {
  _fetchJoke = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _yield$axios$get, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios.get('https://icanhazdadjoke.com/', {
              headers: {
                accept: 'application/json'
              }
            });

          case 3:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            document.querySelector('.Section__paragraph').textContent = data.joke;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _fetchJoke.apply(this, arguments);
}

fetchJoke();
document.querySelector('.Section__button').addEventListener('click', fetchJoke);
/* axios.get('https://icanhazdadjoke.com/', {
    headers: {
        accept: 'application/json'
}
})
.then((response) => {
    console.log(response.data.joke);
});
 */
//linje 1 kan også skrives som en anonym funktion = "const myFetch = async () => {}"
//hent star wars API

/* 
axios.get('https://swapi.dev/api/starships/12/', {
        headers: {
            accept: 'application/json'
    }
    }).then(response => console.log(response.data.name)) */