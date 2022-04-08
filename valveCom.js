let valveOpen = 0;
// document.getElementById("valveOpening").innerHTML = valveOpen+ "%";

// $(document).ready(function(){

//     $("#valveProg").css("width", valveOpen + "%").text(valveOpen + "%");

  
//   });

var rld = document.getElementById("reload");

rld.onclick = fetchData;

fetchData();

// var intervalId = window.setInterval(function(){
//   fetchData();
// }, 5000);

function fetchData(){
  var settings = {
    "url": "https://v1.nocodeapi.com/nataro76/google_sheets/tcVxuScuSuwxfQHy?tabId=arduinoData&row_id=2",
    "method": "get",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json"
    },
};


$.ajax(settings).done(function (response) {
  valveOpen = response.valveOpening;
    console.log(valveOpen);
    document.getElementById("valveOpening").innerHTML = valveOpen+ "%";
    $(document).ready(function(){
        $("#valveProg").css("width", valveOpen + "%").text(valveOpen + "%");
      });
});

}

