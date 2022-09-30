p1 = localStorage.getItem("Player1");
p2 = localStorage.getItem("Player2");

s1 = 0;
s2 = 0;

document.getElementById("p1Name").innerHTML = p1 + " : ";
document.getElementById("p2Name").innerHTML = p2 + " : ";

document.getElementById("p1Score").innerHTML = s1;
document.getElementById("p2Score").innerHTML = s2;

document.getElementById("pQue").innerHTML = "Question Turn: " + p1 ;
document.getElementById("pAns").innerHTML = "Answer Turn: " +  p2 ;

function send(){
N1 = document.getElementById("N1").value ;
N2 = document.getElementById("N2").value ;

localStorage.setItem("Number 1", N1);
localStorage.setItem("Number 2", N2);

answer = N1*N2;
console.log(answer);

question = N1 + " X "+N2;




question_word = "<h4 id='word_display'> Q. "+ question+"</h4>";

   input_box = "<br>Answer : <input type='text' id='input_check_box'>";

   check_button = "<br><br><button id='check'   class='btn btn-primary' onclick='check()'>Check</button>";

   completQuestion = question_word + input_box + check_button;

   document.getElementById("output").innerHTML = completQuestion;

   document.getElementById("N1").value = " ";
   document.getElementById("N2").value = " ";

}

qTurn = "player1";
aTurn = "player2";

function check(){
    console.log("function check");



    user_answer = document.getElementById("input_check_box").value;
   
    if(user_answer == answer){

        if(aTurn == "player2" ){
            s2 = s2+1;
            document.getElementById("p2Score").innerHTML = s2;
        }
        else{
            s1 = s1+1;
            document.getElementById("p1Score").innerHTML = s1;
        }

    }

    if(qTurn == "player1"){
        qTurn = "player2";
        document.getElementById("pQue").innerHTML = "Question Turn - " + p2 ;
    }
else{
    qTurn = "player1";
    document.getElementById("pQue").innerHTML = "Question Turn - " + p1 ;
}

if(aTurn == "player1"){
    aTurn = "player2";
    document.getElementById("pAns").innerHTML = "Answer Turn - " + p2 ;
}
else{
aTurn = "player1";
document.getElementById("pAns").innerHTML = "Answer Turn - " + p1 ;
}

document.getElementById("word_display").value = " ";
document.getElementById("input_check_box").value = " ";
document.getElementById("check").value = " ";

}