player1_name=localStorage.getItem("player_1")
player2_name=localStorage.getItem("player_2")

player1_score=0
player2_score=0

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player_1score").innerHTML=player1_score;
document.getElementById("player_2score").innerHTML=player2_score;

document.getElementById("Q_turn").innerHTML="question turn- "+player1_name
document.getElementById("A_turn").innerHTML="answer turn- "+player2_name

function sent(){
    getnum1=document.getElementById("number_1").value;
    getnum2=document.getElementById("number_2").value;
actual_answer=parseInt(getnum1)*parseInt(getnum2)
question_number = "<h4>" + getnum1 + " X "+ getnum2 +"</h4>";
 input_box = "<br>Answer : <input type='text' id='input_check_box'>";
  check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
   row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
     document.getElementById("number_1").value = ""; 
    document.getElementById("number_2").value = "";
}
q_turn="player1"
a_turn="player2"
function check(){
    getAnswer=document.getElementById("input_check_box").value;
    if(getAnswer==actual_answer){
        if(a_turn=="player1"){
            player1_score=player1_score+1
            document.getElementById("player_1score").innerHTML=player1_score
        }
        else{
            player2_score=player2_score+1
            document.getElementById("player_2score").innerHTML=player2_score  
        }
    }
    if(q_turn=="player1"){
        q_turn="player2"
        document.getElementById("Q_turn").innerHTML="question turn- "+player2_name;

    }
    else{
        q_turn="player1"
        document.getElementById("Q_turn").innerHTML="question turn- "+player1_name;
 
    }
    if(a_turn=="player1"){
        a_turn="player2"
        document.getElementById("A_turn").innerHTML="answer turn- "+player2_name;

    }
    else{
        a_turn="player1"
        document.getElementById("A_turn").innerHTML="answer turn- "+player1_name;

    }
    document.getElementById("output").innerHTML="";
}
