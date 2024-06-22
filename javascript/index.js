function updateTime(){


//sydney
let sydneyElement=document.querySelector("#sydney");
let sydneyDateElement=sydneyElement.querySelector(".date");
let sydneyTimeElement=sydneyElement.querySelector(".time");
let sydneyTime=moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML=sydneyTime.format("MMMM Do YYYY")
sydneyTimeElement.innerHTML=`${sydneyTime.format("h:mm:ss")}<small>${sydneyTime.format("A")}</small>`


//paris

let parisElement=document.querySelector("#paris");
let parisDateElement=parisElement.querySelector(".date");
let parisTimeElement=parisElement.querySelector(".time");
let parisTime=moment().tz("Europe/Paris");

parisDateElement.innerHTML=parisTime.format("MMMM Do YYYY")
parisTimeElement.innerHTML=`${parisTime.format("h:mm:ss")}<small>${parisTime.format("A")}</small>`

}
updateTime();
setInterval(updateTime, 1000);