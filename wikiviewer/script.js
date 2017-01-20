var results = [];
var keys = [];
var key_size;
var resp_obj;
var resp_title="";
var resp_extract = "";
var search_string = "";
// List item variables
var b = "<blockquote class=\"blockquote\" style=\"background-color:#8cb9b1;\">";
var h = "<h3 class=\"list-group-item-heading\">";
var p = "<p class=\"list-group-item-text\">";
var close = "</a></p></div></blockquote>";
var no_links = "info";
var with_links = "links%7Ccategories";
//query function
function qparse(search_string,link_param){
    var r1 = "https://en.wikipedia.org/w/api.php?";
    var all = "action=query&generator=allpages&";
    var from = "gaplimit=5&gapfrom=";
    var end = "&prop=";
    return r1 + all + from + search_string + end + link_param;
}
// direct search function
function dparse(search_string){
    var s1 = "http://en.wikipedia.org/w/api.php?";
    var s2 = "format=json&action=query&prop=extracts&";
    var s3 = "exintro=&explaintext=&titles=";
    return s1 + s2 + s3 + search_string;
}
function link(title){
    var site = "http://en.wikipedia.org/wiki";
    return "<a href=\""+site+"/"+title+"\" class=\"list-group-item\" target=\"_blank\>";
}
// alternative search function
function aparse(search_string){
    return "https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&page="+search_string;
}
function stripped(search_string){
    return "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+search_string;
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
                    if(resp_text.length){
                     $(".list").append(insert(resp_title,resp_text,substring(0,140)));
                     } else{
                       $(".list").append(insert(resp_title,resp_text));
                       }
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
