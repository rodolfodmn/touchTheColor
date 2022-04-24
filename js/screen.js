function new(){
    dont = colors[Math.floor(Math.random() *12)];
    gId("color").style.background = dont;
    gId("ini").style.display = "block";
    gId("canvas").style.display = "none";
    gameOver = 0;
    square1 = new Square(colors[Math.floor(Math.random() *12)], pWq[Math.floor(Math.random() *3)], pHq[0]);
    square2 = new Square(dont, pWq[Math.floor(Math.random() *3)], pHq[1]);
    square3 = new Square(colors[Math.floor(Math.random() *12)], pWq[Math.floor(Math.random() *3)], pHq[2]);
}

function tela(){
    ctx.clearRect(0,0, W, H);
    ctx.fillStyle = "#000";
    ctx.font = "35px Arial";
    ctx.fillText("lifes: "+(lifes - gameOver), 12,32);
    ctx.fillStyle = "#f00";
    ctx.font = "35px Arial";
    ctx.fillText("lifes: "+(lifes - gameOver), 10,30);            
    if (gameOver >= 4) {
        clearInterval(game);
        new();

    }else{
        square1.draw();
        square1.move();

        square2.draw();
        square2.move();

        square3.draw();
        square3.move();

        if (square1.posY > H) {
            if (square1.color != dont && square1.ponto == false) {
                gameOver++;
            }
            square1.posY = pHq[0];
            square1.posX = pWq[Math.floor(Math.random() *3)];
            square1.color = colors[Math.floor(Math.random() *12)];
            square1.ponto = false;
        }
        if (square2.posY > H ) {
            if (square2.color != dont && square2.ponto == false) {
                gameOver++;
            }
            square2.posY = pHq[0];
            square2.posX = pWq[Math.floor(Math.random() *3)];
            square2.color = colors[Math.floor(Math.random() *12)];
            square2.ponto = false;
        }
        if (square3.posY > H) {
            square3.posY = pHq[0];
            square3.posX = pWq[Math.floor(Math.random() *3)];
            square3.color = colors[Math.floor(Math.random() *12)];
            if (square2.color != dont && square2.ponto == false) {
                gameOver++;
            }
            square3.ponto = false;

        }
    }

}
