function game(player1) {
    let y = Math.floor(Math.random() * 3);
    const translate = ["rock", "paper", "scissors"];
    let player2 = translate[y];
    const win = document.getElementById("win");
    const loss = document.getElementById("loss");
    const tie = document.getElementById("tie");
    translate.splice(y, 1);
    for (let id of translate) {
        document.getElementById(id).style.display = "none"; // hide the other options
    }

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
    document.getElementById("comp_choice").innerHTML += player2;
    document.getElementById("comp_choice").style.display = "block";
    document.getElementById("resetter").style.display = "block";
    document.getElementById(player2).onclick = "";
}
