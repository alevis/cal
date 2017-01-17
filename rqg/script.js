var quote = "";
$(document).ready(function(){
    $(".quote").click(function(){
        $.get("http://api.icndb.com/jokes/random",function(data){
            quote = data["value"].joke.toString();
            $("p").empty();
            $("p").append(quote+" - Anon")
        });
    $(".tweet").click(function(){
            $(this).attr("href","https://twitter.com/intent/tweet?text="+quote);
        });
    });
});
