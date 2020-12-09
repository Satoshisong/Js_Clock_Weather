const weather = document.querySelector('.js_weather');

const apiKey = `84a269722af504c6397ee19bb5ffe134`;
const CORDS = 'coords';

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`).then(function(response){
        return response.json();
    })
    .then(function(json){
        const temper = json.main.temp;
        const place = json.name;
        weather.innerText = `${temper}℃ @ ${place}`;
    });
}

function saveCord(cordObj){
    localStorage.setItem(CORDS, JSON.stringify(cordObj));
}

function handleGeoS(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const cordObj = {
        latitude,
        longitude
    };
    saveCord(cordObj);
    getWeather(latitude, longitude);
}

function handleGeoE(){
    console.log("Cant access");
}

function askCord(){
    navigator.geolocation.getCurrentPosition(handleGeoS, handleGeoE);
}

function loadCords(){
    const loadedCd = localStorage.getItem(CORDS);
    if(loadedCd === null){
        askCord();
    }else{
        const parsecord = JSON.parse(loadedCd);
        getWeather(parsecord.latitude, parsecord.longitude);
    }
}

function init(){
    loadCords();
}

init();