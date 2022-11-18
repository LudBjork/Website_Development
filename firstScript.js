console.log("Hi there, stranger. Nice to see you also know of the console log.");

function hide(){
    var x = document.getElementById("buttonTarget").style;
    if (x.display == "none"){
        x.display = "block";
    } else {
        x.display = "none";
    }
}