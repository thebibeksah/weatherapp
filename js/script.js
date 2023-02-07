let inputval = document.querySelector('#search');
let btn = document.querySelector('#add');
let city = document.querySelector('#cityoutput');
let description = document.querySelector('#description');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let humi = document.querySelector('#humi');
let press = document.querySelector('#atm');
let visible = document.querySelector('#visible');

apik = "3045dd712ffe6e702e3245525ac7fa38"

function convertion(val)
{
    return (val - 273).toFixed(0)
}

btn.addEventListener('click', function()
{
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
  .then(res => res.json())


  .then(data => 
  {
    let nameval = data['name']
    let descrip = data['weather']['0']['description']
    let tempature = data['main']['temp']
    let wndspd = data['wind']['speed']
    let visibility = data['visibility']
    let humidity = data['main']['humidity']
    let pressure = data['main']['pressure']
    city.innerHTML=`${nameval}`
    temp.innerHTML = `${ convertion(tempature)}&nbsp;&deg;`
    description.innerHTML = `${descrip}`
    wind.innerHTML = `${wndspd} km/hr`
    humi.innerHTML = `${humidity}%`
    press.innerHTML = `${(pressure/760).toFixed(2)} atm`
    visible.innerHTML = `${(visibility/1000).toFixed(1)} km`

  })

  .catch(err => alert('You entered Wrong city name'))
})