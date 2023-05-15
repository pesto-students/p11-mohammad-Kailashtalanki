const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
};


const cacheData = {}

const getTemperatureForCity = (city) => {
    //Try to get from Cache.
    if (cacheData[city] != null) {
        console.log("Get from Cache");
        return cacheData[city]
    }

    // If not present in cache add to cache and return from data.
    console.log("Get from Data. Added to cache");

    cacheData[city] = temperatureData[city]

    return temperatureData[city]
}

//First gets from Data.
console.log('New York : ' + getTemperatureForCity('New York'));

//Second call for same gets from cache.
console.log('New York : ' + getTemperatureForCity('New York'));


//Added to cache.
console.log('London : ' + getTemperatureForCity('London'));


//First gets from Data.
console.log('Sydney : ' + getTemperatureForCity('Sydney'));

//Second call for same gets from cache.
console.log('Sydney : ' + getTemperatureForCity('Sydney'));