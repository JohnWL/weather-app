var React = require('react');
var validator = require('validator');

var CitySearch = React.createClass({
    getInitialState: function() {
        return {valid: true, value: ""}
    },
    onChange: function(e) {
        var val = e.target.value;

        if (!validator.isAlpha(e.target.value)) {
            this.setState({valid: false, value: e.target.value})
        } else {
            this.setState({valid: true, value: e.target.value});
        }
    },
    clear: function() {
        this.setState({valid: true, value: ""});
    },

    render: function() {
        var formClass = this.state.valid ? "form-group" : "form-group has-error"

        return (
            <div className={formClass}>
                <input className="form-control" onChange={this.onChange} placeholder="Enter City" ref="searchInput" value={this.state.value} />
            </div>
        );
    }
});

module.exports = CitySearch;
