player1__name=localStorage.getItem("player_1");
player2__name=localStorage.getItem("player_2");


player1_score=0;
player2_score=0;

document.getElementById("player_1_name").innerHTML=player1__name+" : ";
document.getElementById("player_2_name").innerHTML=player2__name+" : ";

document.getElementById("player_1_score").innerHTML=player1_score;
document.getElementById("player_2_score").innerHTML=player2_score;

document.getElementById("player_Q").innerHTML="Question turn -"+ player1__name
document.getElementById("player_A").innerHTML="Answer turn -"+ player2__name