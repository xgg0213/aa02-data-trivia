/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* 01. `listAllCitiesWithCountries`
What are all of the cities included in the data set?

Write a function, `listAllCitiesWithCountries` that returns an array of all of
the cities in the data set, formatted in "city, country" format.

For example, it should return:
[ "Amsterdam, Netherlands", "Athens, Greece", ...plus 103 more cities ]
*/

function listAllCitiesWithCountries(climateData) {
    // Your code here 
    let names = [];
    for (let el of climateData) {
        names.push(el.city + ', ' + el.country);
    }
    return names;
}

// console.log(listAllCitiesWithCountries(climateData));



/* 02. `listAllUsCities`
What are all of the United States cities included in the data set?

Write a function, `listAllUsCities` that returns an array of all of
the United States cities in the data set, formatted in "city, country" format.

For example, it should return:
[ 'Atlanta GA, United States', 'Austin TX, United States', ...plus more cities ]
*/


function listAllUsCities(climateData) {
    // Your code here 
    let names = [];

    for (let el of climateData) {
        if (el.country === 'United States') {
            names.push(el.city + ', ' + el.country);
        }
    }
    return names;
}

// console.log(listAllUsCities(climateData));




/* 03. `findDuplicates` What cities are included more than once in the data?

Write a function, `findDuplicates` that finds all duplicate cities. Return an
object including every city name, pointing to an array of IDs for that city.

For example, if `Athens` showed up only once with an id of 2, and 'Mexico City'
was duplicated in id 3, 7, and 9, the returned object should look like:
{ 'Athens: [ 2 ], 'Mexico City': [ 3, 7, 9 ] }
*/


function findDuplicates(climateData) {
    // Your code here
    let list = {};
    
    for (let i = 0; i < climateData.length; i++) {
        let keys = Object.keys(list);
        if (!keys.includes(climateData[i].city)) {
            list[climateData[i].city]=[climateData[i].id]
        } else {
            list[climateData[i].city].push(climateData[i].id)
        }
    }
    return list;

}

// console.log(findDuplicates(climateData));

/* 04. `returnDuplicate` Which city object should be corrected in
the data set?

Write a function, `returnDuplicate` that finds the ONE duplicated city,
and returns the data (object) of the last instance of that city.

For example, if `Paris` showed up twice with an id of 2 and 5, the function
should and return the object with the id of 5.

HINT: Use documentation to research the `find()` method in JavaScript. You may,
but do not have to, use this method to solve this problem.
*/


function returnDuplicate(climateData) {
    // Your code here 
    let cityList = findDuplicates(climateData);
    let values = Object.values(cityList);
    let keys = Object.keys(cityList);

    let index = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i].length>1) {
            index = i;
            i = values.length;
        }
    }
    let idNum = cityList[keys[index]][cityList[keys[index]].length-1];
    let cityName = keys[index];
    return climateData.find(el => el.id === idNum && el.city === cityName)
}

// console.log(returnDuplicate(climateData));


/* 05. `correctDuplicate` Correct the city name of the duplicated city.

Write a function, `correctDuplicate` that finds the ONE duplicated city,
and changes the name of the city to the name provided as a second argument.

For example, if `Paris` showed up twice with an id of 2 and 5, calling
correctDuplicate(climateData, "Nice"), should change the city for the object
with id of 5 to 'Nice' and then return that object with the corrected city name.

HINT: Can you use functions you have already written to help solve this problem?
*/


function correctDuplicate(climateData, newCityName) {
    // Your code here 
    let keyObject = returnDuplicate(climateData);
    // option 1: use the traditional for loop
    // let res = {}
    // for (let i = 0; i < climateData.length; i++) {
    //     if (climateData[i].city === keyObject.city && climateData[i].id === keyObject.id) {
    //         res = climateData[i];
    //         res.city = newCityName;
    //         i = climateData.length;
    //     }
    // }
    // return res;

    // option 2: use the find function
    let res = climateData.find(el => el.city === keyObject.city && el.id === keyObject.id);
    res.city = newCityName;
    return res;
}

// console.log(correctDuplicate(climateData, "Peoria IL"));



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ listAllCitiesWithCountries, listAllUsCities, findDuplicates,
    returnDuplicate, correctDuplicate ];
