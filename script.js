
const APIKey = "ca9568d5a241c80bb8b6c2e1e1eff080"
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const input_box = document.getElementById("input-city")
const btn  = document.getElementById("btn")

const image = document.getElementById("image")

async function getdata(city) {

 const response = await fetch(URL+ city + `&appid=${APIKey}`);
 let data = await response.json()
 console.log(data);
 

 document.querySelector("#tem").innerHTML = Math.round(data.main.temp) + "°C" 
 document.querySelector("#city").innerHTML = data.name 
 document.querySelector("#humidity").innerHTML= data.main.humidity + "%" 
 document.querySelector("#wind").innerHTML= data.wind.speed + " km/h"; 
 document.querySelector("#weather").innerHTML= data.weather[0].main; 
 if(data.weather[0].main == "Clear"){
   image.src = "images/clear-sky.png"
 }

 else if(data.weather[0].main == "Rain") {
image.src = "images/heavy-rain.png"
 }
 else if(data.weather[0].main == "Clouds") {
image.src = "images/clouds.png"
 }
 else if(data.weather[0].main == "Snow") {
image.src = "images/snow.png"
 }
 else if(data.weather[0].main == "Sunny") {
image.src = "images/sunny.png"
 }
 else if(data.weather[0].main == "Clear") {
image.src = "images/clear-sky.png"
 }
 else if(data.weather[0].main == "Smoke") {
image.src = "images/smoke.png"
 }
 else if(data.weather[0].main == "Haze") {
image.src = "images/haze.png"
 }
    
}

btn.addEventListener("click",()=>{

    getdata(input_box.value)
})