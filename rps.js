function game(id) {
    /* 
        Temp. pseudocode
        Given btn-press r / p / s 
        Code game rules (r>s, s>p, p>r)
        Implement Reset button for the game
        Use prompt to declare winner and current score. 
    */
    const player1 = id;
    var player2 = Math.floor(Math.random() * 3);
    const translate = new Map([
        [0, "rock"],
        [1, "paper"],
        [2, "scissors"],
    ]);
    player2 = translate.get(player2);
    alert(player1, player2);
    var win = document.getElementById("win");
    var loss = document.getElementById("loss");
    var tie = document.getElementById("tie");
    if (player1 == player2) {
        tie.style.display = "block";
    } else if ((player1 == "rock") & (player2 == "scissors")) {
        win.style.display = "block";
    } else if ((player1 == "scissors") & (player2 == "paper")) {
        win.style.display = "block";
    } else if ((player1 == "paper") & (player2 == "rock")) {
        win.style.display = "block";
    } else {
        loss.style.display = "block";
    }
}
