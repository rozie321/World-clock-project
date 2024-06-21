let losangelesElement=document.querySelector("los-angeles");
let losangelesTimeelement=losangelesElement.querySelector(".date");
let losangelesDateelement=losangelesElement.querySelector(".time");
let losengelesTime=moment()


losangelesTimeelement.innerHTML=losengelesTime.format("MMMM Do YYY")
losangelesDateelement.innerHTML=`{losengelesDate.format("h:mm")} <small> AM <small>`