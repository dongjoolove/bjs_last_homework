const API_KEY="563e472a3008905b15cd6adaa32b3fda";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    //console.log("You live in", lat, lng);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`; 
    fetch(url).then(response =>response.json()).then(data=>{ 
        const cityText=document.querySelector("div#weather span:first-child");
        const weatherText=document.querySelector("div#weather span:last-child");
        cityText.innerText=data.name;
        weatherText.innerText=`${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(position){
    alert("can't find your location")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);