function Game_Function()  {
    var Game_Output;
    var Games = document.getElementById("Game_input").value;
    var Game_String = "That is a good game!";
    switch(Games) {
        case "Final Fantasy Seven":
            Game_Output = "Final Fantasy Seven" + Game_String;
        break;
        case "Final Fantasy Eight":
            Game_Output = "Final Fantasy Eight" + Game_String;
        break;
        case "Final Fantasy Nine":
            Game_Output = "Final Fantasy Nine" + Game_String;
        break;
        case "Final Fantasy Ten":
            Game_Output = "Final Fantasy Ten" + Game_String;
        break;
        case "Final Fantasy Fifteen":
            Game_Output = "Final Fantasy Fifteen" + Game_String;
        break;
        case "Final Fantasy Seven Remake":
            Game_Output = "Final Fantasy Seven Remake" + Game_String;
        break;
        default:
            Game_Output = "Please enter a game from the list exactly.";

    }
    document.getElementById("Output").innerHTML= Game_Output;

}   

function Text_Change_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

"<br>"
var grd = ctx.createLinearGradient(150, 185, 170, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "blue");

ctx.fillStyle = grd;
ctx.fillRect(150, 20, 150, 100);
