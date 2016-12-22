var d = new Date();

var month = new Array();
month[0] = "JAN";
month[1] = "FEB";
month[2] = "MAR";
month[3] = "APR";
month[4] = "MAY";
month[5] = "JUN";
month[6] = "JUL";
month[7] = "AUG";
month[8] = "SEPT";
month[9] = "OCT";
month[10] = "NOV";
month[11] = "DEC";

//var n = month[d.getMonth()];

var convertDate = {
    getDate: function(utcDate) {
        var localDate = new Date(utcDate);

        var todayDate = localDate.getDate();
        var monthName = month[d.getMonth()];
        var fullYear = localDate.getFullYear();
        
        var fullDate = (todayDate + ' ' + monthName + ' ' + fullYear);

        return (fullDate);
    }
};

module.exports = convertDate;
