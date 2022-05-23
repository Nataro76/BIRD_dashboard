let valveOpen = 0;









var rld = document.getElementById("reload");

rld.onclick = fetchData;

fetchData();




function fetchData(){
  // Here this function fetches using the "get" method the data from the sheet
  // NOTE: we use an api shortener calle "nocodeapi" to simplify our endpoints
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

