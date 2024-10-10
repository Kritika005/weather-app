const apiKey="318ebd802c05c71578ef1e13674bf193";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";//&q krke chor diya koi particulary city nhi di

const searchBox= document.querySelector(".search input");//html ki file se ek class pass ki h .search input input m user jo bhi daalega wo search box m jana caahiye
const searchBtn= document.querySelector(".search button");//click event ko call krr raha h
let weatherIcon= document.querySelector(".weather-icon");
async function checkweather(city)//checkweater fun m city pass ki to use await fun (internet se connectivity ka wait krta h rather than giving error) we use asyn
{
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();//data object formaat m caahiye isliye json liya
    console.log(data);
//this below four statement can be write with the help of inspect in console and than write data .name, data.main.temp etc
    document.querySelector(".city").innerHTML = data.name;//qs returns single element queryis .city 
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
if(data.weather[0].main=="Clouds")
{
    weatherIcon.src = "/images weather/clouds.png"
}
else if(data.weather[0].main=="Clear")
    {
        weatherIcon.src = "/images weather/clear.png"
    }
    else if(data.weather[0].main=="Drizzle")
        {
            weatherIcon.src = "/images weather/drizzle.png"
        }
        else if(data.weather[0].main=="Mist")
            {
                weatherIcon.src ="/images weather/mist.png"
            }
            else if(data.weather[0].main=="Rain") 
                {
                weatherIcon.src ="/images weather/rain.png"  
                }
                else if(data.weather[0].main=="Snow")
                    {
                        weatherIcon.src ="/images weather/snow.png"   
                    }
                    //in css we block the display of entire design but in js we again tell than what we write inn css will not get block it .   
document.querySelector(".weather").style.display ="block"    

}

searchBtn.addEventListener("click", ()=>{

    checkweather(searchBox.value);
})