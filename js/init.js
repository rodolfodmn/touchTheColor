gId("play").addEventListener("click", play);

function play(){
    gId("ini").style.display = "none";
    gId("canvas").style.display = "block";
    game = setInterval(tela, 30);
}


var square1 = new Square(cores[Math.floor(Math.random() *12)], pWq[Math.floor(Math.random() *3)], pHq[0]);
var square2 = new Square(dont, pWq[Math.floor(Math.random() *3)], pHq[1]);
var square3 = new Square(cores[Math.floor(Math.random() *12)], pWq[Math.floor(Math.random() *3)], pHq[2]);
