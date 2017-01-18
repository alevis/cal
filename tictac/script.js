function state(b){
 return (b[0]&&b[1]&&b[2])||(b[0]&&b[4]&&b[8])||(b[0]&&b[3]&&b[6])||
        (b[1]&&b[4]&&b[7])||(b[2]&&b[5]&&b[8])||(b[2]&&b[4]&&b[6])||
        (b[3]&&b[4]&&b[5])||(b[6]&&b[7]&&b[8]);
}
function remove(marks,number){
    var acpy = [];
    marks.forEach(function(element){
        if(element!=number)
            acpy.push(element);
    }); return acpy;
}
function game_state(player,board,marks){
    if(state(board)){
        alert(player+" wins!");
        location.reload();
    } else if(marks.length == 0){
        alert("Draw!");
        location.reload();
    }
}
var marks = [0,1,2,3,4,5,6,7,8];
var human_board = [0,0,0,0,0,0,0,0,0];
var robot_board = [0,0,0,0,0,0,0,0,0];
$(document).ready(function(){
    var ai;
    $("#tic,#tac,#toe").click(function(event){
        event.target.innerHTML="X";
        marks=remove(marks,parseInt(event.target.id));
        human_board[parseInt(event.target.id)] = 1;
        game_state("X",human_board,marks);
         
        ai = marks[Math.floor(Math.random()*marks.length)];
        $("#"+ai).append("0");
        marks=remove(marks,ai);
        robot_board[ai] = 1;
        game_state("0",robot_board,marks);
        
    });
    $(".heading").click(function(){ location.reload();  });
});
