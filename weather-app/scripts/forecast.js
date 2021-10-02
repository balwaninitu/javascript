//this file interact with api acuweather


const key = '2nCYFTjSdxPEP5dNtOVApLPEq8cAU3zk';

//get weather information
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return (data)[0];

}


//get city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    //return promise
    const response = await fetch(base+query);
    const data = await response.json();

    return (data[0]);

};

// getCity('mumbai')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// getCity('mumbai').then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// })
// .catch(err => console.log(err));


//getWeather("204842");