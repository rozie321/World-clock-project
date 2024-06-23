function updateTime(){
//sydney
let sydneyElement=document.querySelector("#sydney");
if (sydneyElement){
let sydneyDateElement=sydneyElement.querySelector(".date");
let sydneyTimeElement=sydneyElement.querySelector(".time");
let sydneyTime=moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML=sydneyTime.format("MMMM Do YYYY")
sydneyTimeElement.innerHTML=`${sydneyTime.format("h:mm:ss")}<small>${sydneyTime.format("A")}</small>`
}

//paris

let parisElement=document.querySelector("#paris");
if (parisElement){
let parisDateElement=parisElement.querySelector(".date");
let parisTimeElement=parisElement.querySelector(".time");
let parisTime=moment().tz("Europe/Paris");

parisDateElement.innerHTML=parisTime.format("MMMM Do YYYY")
parisTimeElement.innerHTML=`${parisTime.format("h:mm:ss")}<small>${parisTime.format("A")}</small>`
}

}
function updateCity(event){
    let cityTimezone=event.target.value;
    let cityName=cityTimezone.replace("_"," ").split("/")[1];
    let cityTime=moment().tz(cityTimezone);
    //console.log(cityTime.format("MMMM Do YYYY"))
    let citiesElement=document.querySelector("#cities");
    citiesElement.innerHTML=`
    <div class="city" id="">
            <div>
            <h2>${cityName}</h2> 
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
        </div>`
    
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement=document.querySelector("#city");
citiesSelectElement.addEventListener("change",updateCity);
