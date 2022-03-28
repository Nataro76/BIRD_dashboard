let primaryTemp = 85;
let secondaryTemp = 60;
let deltaTemp = primaryTemp - secondaryTemp;
let minTempPrime = 50;
let maxTempPrime = 150;
let minTempSec = 30;
let maxTempSec = 70;
let primaryPercent,secondaryPercent,deltaPercent;
primaryPercent = tempToPercent(primaryTemp,minTempPrime,maxTempPrime);
secondaryPercent = tempToPercent(secondaryTemp,minTempSec,maxTempSec);

document.getElementById("primaryTemp").innerHTML = primaryTemp + "°C";
document.getElementById("secondaryTemp").innerHTML = secondaryTemp + "°C";
document.getElementById("deltaTemp").innerHTML = deltaTemp+ "°C";

$(document).ready(function(){

    $("#primaryProg").css("width", primaryPercent + "%").text(primaryTemp + "°C");
    $("#secondaryProg").css("width", secondaryPercent + "%").text(secondaryTemp + "°C");
  
  });

function tempToPercent(temp,mintemp,maxtemp){
    let percent;
if((temp-mintemp)<=0){
    //alert("Critical error: Temperature below minimum on the primary!");
}
else{
percent = 100*(temp-mintemp)/(maxtemp-mintemp);
}
return percent;
}