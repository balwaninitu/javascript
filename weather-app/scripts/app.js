
//this file is for DOM manipulation


const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    // console.log(data);
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    //destructure properties
    //destructure properties(city details & weather) from object(data)
    const {cityDets, weather} = data;

    //update details template
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
    `;

    //update the night/day & icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // const result = condition ? 'value 1' : 'value 2';
    // console.log(result);

    let timeSrc = weather.IsDayTime ? 'img/day.svg': 'img/night.svg';

    // let timeSrc = null;
    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg';     
    // } else {
    //     timeSrc = 'img/night.svg';
    // }
    time.setAttribute('src', timeSrc);

    //remove d-none if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

}

const updateCity = async (city) => {
    //console.log(city);
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    /*when property and value is same like below we can use
    object shorthand notation i.e deleting one of those and it will
    be same*/
    return {
        //cityDets: cityDets,
        cityDets, weather };
       // weather: weather
};

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
updateCity(city)
//.then(data => console.log(data))
.then(data => updateUI(data))
.catch(err => console.log(err));

//set local storage
localStorage.setItem('city', city);

});

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err));
}

//ternary operator if condition is true it will give value 1, if false value 2
//const result = condition ? 'value 1' : 'value 2';
//console.log(result);