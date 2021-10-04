//geolocation, weather API
const API_KEY = "b581029dc0cf56f388471e87b9e5a0b9";

function onGeoOk(position){
    //console.log(position); //객체 볼수있음
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log("You live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //console.log(url);
    //fetch(url); //fetch를 이용해 url을 받을거야 (서버로 네트워크 요청을 보내고 응답을 받을 수 있도록 해주는 메서드)
    fetch(url).then(response => response.json()).then(data =>{
        //console.log(data.name, data.weather[0].main); //network->preview
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
        weather.innerText = `날씨: ${data.weather[0].main} / 온도: ${data.main.temp}\n`;
        city.innerText = data.name; 
       
    });
}

//promise : 당장 무슨일이 일어나는게 아닌 나중에 일어남


function onGeoError(){
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //브라우저에서 내 위치 좌표 표시
// 첫번째 argument : 문제가 없을 때 실행 될 함수.
// 두번째 argument : 에러가 발생했을 때 실행 될 함수.
//JS가 그냥 함수 실행했을 때 보다 더 많은 정보 알려줄거야 
//ex)user의 위치를 전달. GeolocationPosition object 하나를 입력받음
//GeolocationPosition object 객체를 유일한 매개변수로 받는 콜백 함수.

//https://openweathermap.org/api
//위도, 경도를 받아서 user 이름을 알려주고, 현재 날씨도 알려줌
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?lat=37.4734848&lon=126.9202944&appid=b581029dc0cf56f388471e87b9e5a0b9