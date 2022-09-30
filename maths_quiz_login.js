
function nextPage(){
    player1 = document.getElementById("player1input").value ;
    player2 = document.getElementById("player2input").value ;
    
    localStorage.setItem("Player1", player1 );
    localStorage.setItem("Player2", player2 );
    window.location="maths_quiz_game_page.html";
}