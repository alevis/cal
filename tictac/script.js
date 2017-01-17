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
$(document).ready(function(){
    $("#tic,#tac,#toe").click(function(event){
        event.target.innerHTML="X";
        board[event.target.id]=1;
        if(state(board)){
            alert("X wins!");
            event.defaultPrevented();
        }
    });
});
