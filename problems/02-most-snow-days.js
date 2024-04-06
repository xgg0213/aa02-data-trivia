/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `citiesWithMostSnowDays` Which cities have the most snow days?

Write a function, `citiesWithMostSnowDays` that returns an array of objects,
that includes data on the cities that have the highest number of snow days
across all months.

For example, if the maximum number of snow days across all months is 10, and two
cities have 10 snow days each, the returned array would look like:

[
    { "city": "City Name 1, Country Name", "totalSnowDays": 10 },
    { "city": "City Name 2, Country Name", "totalSnowDays": 10 },
]

Note: You can solve this in multiple ways. Try using a few advanced array
methods!
*/


function citiesWithMostSnowDays(climateData) {
    // Your code here 
    // 0. calculate all the snow days of each object wihtin climateData
    for (let i = 0; i < climateData.length; i++) {
        climateData[i].totalSnowDays = 0;
    }
    climateData.forEach(el => {
        for (let ele of el.monthlyAvg) {
            if (ele.snowDays) {
                el.totalSnowDays += ele.snowDays;
            }
        }
    })

    // 1. create an array of objects with city: city name, country name; totalSnowDays: x
    let res = [];

    climateData.forEach(el => {
        let {city, country, totalSnowDays} = el;
        let city_name = city + ', ' + country
        res.push({city_name, totalSnowDays});
    })


    // 2. find max snowDays
    let max = -Infinity;
    res.forEach(el => {
        if (el.totalSnowDays > max) {
            max = el.totalSnowDays;
        }
    })

    // 3. find the object with max snowdays
    let resName = res.filter(el => el.totalSnowDays === max)

    // 4. change city_name to city to match exactly the answer
    let final = [];
    resName.forEach(el => {
        el.city = el.city_name;
        let {city, totalSnowDays} = el;
        final.push({city, totalSnowDays})
    })

    //another option is to create a new object and do something like this:
    //newObject[keyMap[key]] = object[key];

    return final;  
}

console.log(citiesWithMostSnowDays(climateData));


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ citiesWithMostSnowDays ];
