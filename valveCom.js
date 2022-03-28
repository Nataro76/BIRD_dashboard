let valveOpen = 60;
document.getElementById("valveOpening").innerHTML = valveOpen+ "%";

$(document).ready(function(){

    $("#valveProg").css("width", valveOpen + "%").text(valveOpen + "%");

  
  });
