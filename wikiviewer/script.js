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
$(document).ready(function(){

});
