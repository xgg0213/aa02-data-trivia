/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `temperatureRange` - What is the temperature range for each month in each
city?

In this case, temperature range is the difference in temperature between the
high temperature and low temperature in a given month ( range = high - low ).

Write a function, `temperatureRange` that takes in the climate data, and returns
a new copy of the array that includes all of the city data. Each city object
should have a "monthlyTemperatureRange" key that points to an array of objects
formatted to match the example output below:

[
  {
    "id": 1,
    "city": "Amsterdam",
    "country": "Netherlands",
    "monthlyTemperatureRange": [
        { "month": "January", high: x, low: x, range: x },
        { "month": "February", high: x, low: x, range: x },
        // ... continued for all 12 months
    ]
  },
  // ... constinued for all cities in the original climateData array
]:

Note: You can solve this in multiple ways. Try using a few advanced array
methods. Can you use helper methods to separate out the logic?
*/


function temperatureRange(climateData) {
  // Your code here 
  // 0. add range to monthlyAvg
  let newArr = [];
  
  let mList = ['January','February', 'March', 'April','May', 'June','July','August'
    ,'September','October','November','December'];

  climateData.forEach(el => {
  let {id, city, country} = el;
  let obj = {id, city, country};
  //if simply reasigning the monthlyAvg, can avoid creating this obj step
  //since el itself is already an object

  let monthlyTemperatureRange = [];

    for (let i = 0; i <el.monthlyAvg.length; i++) {
        let ele = el.monthlyAvg[i];
        // use below method (53-56) to avoid manipulating the original data set
        // manipulating the original dataset may result in previous code not run correctly 
        range = ele.high - ele.low;
        month = mList[i];

        monthlyTemperatureRange.push({month:month, high:ele.high, low:ele.low, range:range})
        
        // below row 60-64 is an example of adding new elements to the original dataset
        // ele.range = ele.high - ele.low;
        // ele.month = mList[i];
        // let {month, high, low, range} = ele;

        // monthlyTemperatureRange.push({month, high, low, range});
        
    }

    obj['monthlyTemperatureRange']= monthlyTemperatureRange; 
    newArr.push(obj);
  })

  return newArr;
  
};

// Your code here 

console.log(temperatureRange(climateData));


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ temperatureRange ];
