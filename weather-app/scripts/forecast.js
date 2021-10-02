
const key = '2nCYFTjSdxPEP5dNtOVApLPEq8cAU3zk';

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    //return promise
    const response = await fetch(base+query);
    const data = await response.json();

    return (data[0]);

};

getCity('mumbai')
.then(data => console.log(data))
.catch(err => console.log(err));