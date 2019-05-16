// from data.js
var tableData = data;

// YOUR CODE HERE!

var subMit = d3.select("#filter-btn");

subMit.on("click",function() {

    d3.event.preventDefault();

    var dateElement = d3.select("#datetime");

    var dateValue = dateElement.property("value");

    var filteredData = tableData.filter(function(anything){

        return anything.datetime == dateValue;
    })

    var table = d3.select("#ufo-table");

    filteredData.forEach(function(ufoData){
        var row = table.append("tr");
        Object.entries(ufoData).forEach(function([key,value]){
        
        var cell = row.append("td");
        cell.text(value);
    });
})});
