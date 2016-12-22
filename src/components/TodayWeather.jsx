var React = require('react');

var tempStyle = {
    display: "inline-block"
}

var TodayWeather = React.createClass({
    render: function() {
        return (
            <div className="">
                <h1>{this.props.city}, {this.props.country}</h1>
                <p>TODAY {this.props.date}</p>
                <img src={"http://openweathermap.org/img/w/" + this.props.icon + ".png"} />
                <h1 style={tempStyle}>{this.props.temp}</h1>
            </div>
        );
    }
});

module.exports = TodayWeather;
