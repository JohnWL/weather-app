var React = require('react');
var CitySearch = require('./CitySearch.jsx');
var HTTP = require('../services/httpservice.js');
var isoCountries = require('../services/isoCountries.js');
var convertDate = require('../services/convertDate.js');
var TodayWeather = require('./TodayWeather.jsx');

var WeatherApp = React.createClass({
    getInitialState: function() {
        return {weather: null};
    },
    onSubmit: function(e) {
        e.preventDefault();

        if (!this.refs.cityField.state.valid) {
            alert("Letters only.");
        } else {
            //Send request to email host or server
            var httpRequestBody = {
                city: this.refs.cityField.state.value
            };
            HTTP.get(httpRequestBody.city)
            .then(function(data){
                //Sets the data returned to the state of the component
                this.setState({weather: data});
                //console.log(this.state.weather.city.name);
                //console.log(this.state.weather.city.country);
            }.bind(this));

            //console.log(this.refs.cityField.state.value);
            this.refs.cityField.clear();
        }
    },

    render: function() {
        //console.log(this.state.weather.city.country);
        //var countryCode = this.state.weather.city.country;
        //var fullCountryName = isoCountries.getCountryName(countryCode);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <CitySearch ref="cityField" />
                                <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                    {(() => {
                        if (this.state.weather) {
                            // Convert country code
                            var countryCode = this.state.weather.city.country;
                            var fullCountryName = isoCountries.getCountryName(countryCode);
                            // Convert date format
                            var utcDate = this.state.weather.list[0].dt_txt;
                            var convertedDate = convertDate.getDate(utcDate);



                            return (
                                <div className="col-sm-6">
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <TodayWeather
                                                city={this.state.weather.city.name}
                                                country={fullCountryName}
                                                date={convertedDate}
                                                icon={this.state.weather.list[0].weather[0].icon}
                                                temp={this.state.weather.list[0].main.temp}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })()}
                </div>
            </div>
        );
    }
});

module.exports = WeatherApp;
