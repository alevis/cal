var results = [];
var keys = [];
var key_size;
var resp_obj;
var resp_title="";
var resp_extract = "";
var search_string = "";
// List item variables
var b = "";
var h = "";
var p = "";
var close = "";
var with_links = "";
function qparse(search_string,link_param){
    var r1 = "https://en.wikipedia.org/w/api.php?";
    var all = "action=query&generator=allpages&";
    var from = "gaplimit=5&gapfrom=";
    var end = "&prop=";
}
// direct search function
function dparse(search_string){
    var s1 = "http://en.wikipedia.org/w/api.php?";
    var s2 = "format=json&action=query&prop=extracts&";
    var s3 = "exintro=&explaintext=&titles=";
}
function link(){

}
// alternative search function
function aparse(search_string){

}
function stripped(search_string){
    return ""+search_string;
}
// Heading insert function
function insert(heading,text){
    return b+h+"<strong>"+heading+"</strong>"+"</h3>"+link(heading)+p+text+close;
}
$(document).ready(function(){
    // User pressed enter
    $("input[type=text]").on("keydown",function(e){
        // Get the search string
        if(window.event.keyCode == 13){
            search_string = $("#search").val().replace(/s\+/g,"%20");
            $.ajax({
                crossDomain:true,
                type:'GET',
                contentType:"application/json; charset=utf-8",
                async:false,
                url:stripped(search string),
                data:{format:'json'},
                dataType:"jsonp",
                error:function(){ alert("fail"); },
                success: function(resp){
                    keys = Object.keys(resp);
                    key_size = keys.length;
                    $(".list").html("")
                    for(var i=0; i<key_size; i++){
                        resp_title = resp['query']['pages'][keys[i]]['title'];
                        resp_text = resp['query']['pages'][keys[i]]['extract'];
                        console.log(resp_title);
                        console.log(resp_text);
                        if(resp_text.length)
                            $(".list").append(insert(resp_title,resp_text,substring(0,140)));
                        else
                            $(".list").append(insert(resp_title,resp_text));
                    }
                }
            });
        }//
    });
    //button handler
    $(".icon").click(function(e){
        //get the search string
        //$("$search").on("change",function(){})
        if(window.event.keyCode == 13){
            search_string = $("#search").val().replace(/s\+/g,"%20");
            $.ajax({
                crossDomain:true,
                type:'GET',
                contentType:"application/json;charset=utf-8",
                async:false,
                url:stripped(searched_string),
                data:{ format: 'json' },
                dataType:"jsonp",
                error:function(){ alert("fail"); },
                success: function(resp){
                    keys = Object.keys(resp['query']['pages']);
                    key_size = keys.length;
                    /*
                        console.log(resp['parse']);
                        console.log(resp['parse']['title']);
                        console.log(resp['parse']['text']['*']);
                    */
                $(".list").html("");
                for(var i = 0; i < key_size; i++){
                    resp_title = resp['query']['pages'][keys]]['title'];
                    resp_text = resp['query']['pages'][keys[i]]['extract'];
                    console.log(resp_title);
                    console.log(resp_text);
                if(rep_text.length){
                    $(".list").append(insert(resp_title,resp_text.substring(0,140)));
                } else{
                    $(".list").append(insert(resp_title,resp_text));
                }
                }
                }
            });
         }//change();
    });//end of button handler event
});//end document ready function 
