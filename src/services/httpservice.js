var Fetch = require('whatwg-fetch');
var baseURL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
var apiKey = '&APPID=adca652110d1bc74104b8e33c5836590';

var httpservice = {
    get: function(url) {
        return fetch(baseURL + url + '&units=imperial' + apiKey)
        .then(function(response) {
            console.log(baseURL + url + apiKey);
            return response.json();
        });
    }
};

module.exports = httpservice;
