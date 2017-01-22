// global variables
var city;
var loc;
var colors = ["#058EC2","#C33C00"];//cool and warm
var fonts = ["Calibri","Georgia","AvenirNextLTW01-Condens 721299", "Arial Narrow"]
var address = "https://api.forecast.io/forecast/0283ca23d4f09a7d027038a72104b6a3/";
var forecast = "http://forecast.io/embed/#";
var options = "&color="+colors[0]+"&font="+fonts[2];
var uk_units = "&units=uk";
var us_units = "&units=us";
var system = us_units;
var b = "<span style=\"color:black\">";
var bc = "</span>";
function changeSystem(system){
    document.getElementById("widget").src = forecast + system;
}
function getWeather(address,loc,city){
    console.log(address);
  $.get(address,function(data){
    forecast += "lat="+loc[0]+"&";
    forecast += "lon="+loc[1]+"&name="+city;
    forecast += options;        
    document.getElementById("widget").src = forecast + us_units;
    $(".timezone").append("Timezone: "+b+data.timezone+bc);
    $(".summary").append("Summary: " +b+data["currently"].summary+bc);
    $(".temperature").append(" Temprature: "+b+data["currently"].temperature+"°F"+bc);
    $(".dewpoint").append("Dew Point: "+b+data["currently"].dewPoint+bc);
    $(".humidity").append("Humidity: "+b+data["currently"].humidity+bc);
    $(".windspeed").append("WindSpeed:"+b+data["currently"].windSpeed+"km/hr"+bc);
    $(".visibility").append("Visibility:"+b+data["currently"].visibility+"km"+bc);
    $(".cloudcover").append("Cloud Cover:"+b+data["currently"].cloudCover+"oktas"+bc);    $(".pressure").append("Pressure:"+b+data["currently"].pressure+"mb"+bc);
    },"jsonp");
}
/*
    Function to get the address, city and location of the client's ip address 
    (standard http request)
*/
function getLocation(address,loc,city){
    var pos = "";
    $.get("http://ipinfo.io",function(response){
        pos += response.loc.toString();
        city = response.city;
        loc = response.loc.split(",");
    },"jsonp");
}
/*
    Document ready
*/
$(document).ready(function(){
    $.get("http://ipinfo.io",function(response){
        address += response.loc.toString();
        city = response.city;
        loc = response.loc.split(",");
        $.get(address,function(data){
            forecast += "lat="+loc[0]+"&";
            forecast += "lon="+loc[1]+"&name="+city;
            forecast += options;
            document.getElementById("widget").src = forecast + system;
    $(".timezone").append("Timezone: "+b+data.timezone+bc);
    $(".summary").append("Summary: "+b+data["currently"].summary+bc);
    $(".temperature").append(" Temprature: "+b+data["currently"].temperature+"F"+bc);
    $(".dewpoint").append("Dew Point: "+b+data["currently"].dewPoint+bc);
    $(".humidity").append("Humidity: "+b+data["currently"].humidity+bc);
    $(".windspeed").append("WindSpeed: "+b+data["currently"].windSpeed+"mph"+bc);
    $(".visibility").append("Visibility: "+b+data["currently"].visibility+"km"+bc);
   $(".cloudcover").append("Cloud Cover: "+b.data["currently"].cloudCover+"oktas"+bc);
    $(".pressure").append("Pressure: "+b+data["currently"].pressure+"mb"+bc);
   },"jsonp");
},"jsonp");
$("#us").click(function(){
    system = us_units;
    document.getElementById("widget").src = forecast + system;
    console.log(forecast + system);
    $("#widget").attr("src",$("#widget").src = forecast + system;
    console.log(forecast+system);
    $("#widget").attr("src",$("#widget").attr("src"));
    });
});
