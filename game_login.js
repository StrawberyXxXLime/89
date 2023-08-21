function Login (){
    player1_name = document.getElementById('Player1Name').value;
    player2_name = document.getElementById('Player2Name').value;
    localStorage.setItem("Player1", player1_name);
    localStorage.setItem("Player2", player2_name);
    window.location = "game_page.html"
} 