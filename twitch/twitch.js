$(document).ready(function(){
	var streams = ["freecodecamp","OgamingSC2","cretetion","freecodecamp","storbeck","habathcx","RobotCaleb","noobs2ninjas","esl_sc2"];
    $.getJSON(
        'https://wind-bow.gomix.me/twitch-api/streams/esl_sc2',
        function(data){
	    var chan = data['stream']['channel'];
	    console.log(chan);
	    $(".item").append("<img class=\"img-circle\" src="+chan['logo']+"></img>");
	    $(".item").append("<a href="+chan['url']+">"+chan['game']+"</a>");
	    $(".item").append(chan['status']);
        });
});
