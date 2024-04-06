/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `leastRainfall` Which cities have the least rainfall in a given month?

Write a function, `leastRainfall` that takes in the climate data and a month,
and returns an array of cities that have the least rainfall in that month. It
should include all cities that recieve less than 10 mm rainfall in that month.

For example, if there are three cities have less than 10 mm, the returned array
should look like:

[ "city1, country1: x mm", "city2, country2: x mm", "city3, country3: x mm" ]
(Each city's data is a formatted string data type).

Note: You can solve this in multiple ways. Try using a few advanced array
methods!

Hint: How can you identify and access the correct data for a month such as
"March"?
*/


function leastRainfall(climateData, month) {
    // Your code here 
    let mList = ['January','February', 'March', 'April','May', 'June','July','August'
    ,'September','October','November','December'];

    let mIndex = 0;
    mList.forEach(el => {
        if (el === month) {mIndex = mList.indexOf(el)}
    })

    let res = climateData.filter(el => {
        return el.monthlyAvg[mIndex].rainfall < 10
    })

    let final = [];
    res.forEach(el => {
        let city_name = el.city + ', ' + el.country;
        let rainfallM = el.monthlyAvg[mIndex].rainfall.toString()[0] + ' mm';
        final.push({city_name, rainfallM});
        //the below method works: city here is considered a string, same is country
        // final.push({city: el.city, country: el.country });
    })
    
    let finalList = [];

    final.forEach(el => finalList.push(Object.values(el)[0] + ': ' + Object.values(el)[1]))
    return finalList;

    
}

console.log(leastRainfall(climateData, "August"));



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ leastRainfall ];
