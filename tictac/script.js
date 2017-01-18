var board = [0,0,0,0,0,0,0,0,0];
function state(b){
/*
    //solution space is size 8
    if(board[0]&&board[1]&&board[2]){
        return true;
    } else if(board[]){
        return true;
    } else if(){
        return true;
    } else if(){
        return true;
    } else if(){
        return true;
    } else if(){
        return true;
    } else if(){
        return true;
    } else if(){
        return true;
    } else{
        return false;
    }
*/
return (b[0]&&b[1]&&b[2])||(b[0]&&b[4]&&b[8])||(b[0]&&b[3]&&b[6])||
        (b[1]&&b[4]&&b[7])||(b[2]&&b[5]&&b[8])||(b[2]&&b[4]&&b[6])||
        (b[3]&&b[4]&&b[5])||(b[6]&&b[7]&&b[8]);
}
function ai_move(cell_number){
    var ai = Math.floor(Math.random()*10);
    return ai != cell_number ? ai : ai_move(cell_number);
}
function remove(marks,number){
    var blen = board.length;
    var acpy = []
    for(var i = 0; i<blen; i++){
        if(marks[i])
    }
}
var marks = [0,1,2,3,4,5,6,7,8];
$(document).ready(function(){
    $("#tic").click(function(event){
        event.target.innerHTML="X";
        remove(marks,event.target.id);
        board[event.target.id]=1;
        if(state(board)){
            alert("X wins!");
            event.defaultPrevented();
        } else{ $("#"+ai_move(event.target.id)).append("0"); }
    });
});
