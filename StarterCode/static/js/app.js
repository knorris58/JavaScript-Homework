// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log(tableData);

var row=tbody.append("tr")
var cell=row.append("td").text()


var button = d3.select("#filter-btn");
button.on("click", function() {
    var inputElement = d3.select(".form-control");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(recorded =>recorded.datetime===inputValue);

    console.log(filteredData)
    alienTable(filteredData)
});


tbody.text("")
    
function alienTable(tables){
tables.forEach(function(aliens){
    var row = tbody.append("tr");
    Object.entries(aliens).forEach(function([key, value]) {
        var cell=row.append("td");
        cell.text(value);
    })
})
}
