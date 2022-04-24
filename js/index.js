function gId(x){
    return document.getElementById(x);
}
var ctx = gId("canvas").getContext("2d");
ctx.fillStyle = "#000";
ctx.font = "40px Arial";
var H = (window.screen.height)*0.957;
var W = (window.screen.width);

var Quadrado = function(cor,posX,posY){

    this.w = W/3,
        this.h = H/6,
        this.move = 0,
        this.ponto = false;
    self = this;

    self.cor = cor;
    self.posX = posX;
    self.posY = posY;

    this.desenha = function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.posX,this.posY, this.w, this.h);
    }

    this.movimenta = function(){
        this.posY += 9;
    }

};

var Wq = W/3;
var Hq = H/6;
var move = [0, 0, 0, 0, 0, 0, 0, 0];
var pWq = [0, Wq, Wq*2];
var pHq = [0-Hq, 0-Hq*3, 0-Hq*6];
var cores = ["#1abc9c","#3498db","#9b59b6","#34495e","#f1c40f","#e67e22","#e74c3c","#95a5a6","#c0392b","#d35400","#f39c12","#ecf0f1"];
var dont = cores[Math.floor(Math.random() *12)];
var gameOver = 0;
var jogo;
var vidas = 3 - gameOver;

gId("canvas").height = H;
gId("canvas").width = W;
gId("canvas").addEventListener("click", clica);

gId("cor").style.background = dont;

gId("play").addEventListener("click", play);

function play(){
    gId("ini").style.display = "none";
    gId("canvas").style.display = "block";
    jogo = setInterval(tela, 30);
}


var quadrado1 = new Quadrado(cores[Math.floor(Math.random() *12)], pWq[Math.floor(Math.random() *3)], pHq[0]);
var quadrado2 = new Quadrado(dont, pWq[Math.floor(Math.random() *3)], pHq[1]);
var quadrado3 = new Quadrado(cores[Math.floor(Math.random() *12)], pWq[Math.floor(Math.random() *3)], pHq[2]);

function clica(e) {
    var cx = e.clientX;
    var cy = e.clientY;

    if (cy < quadrado1.posY+quadrado1.h && cy > quadrado1.posY) {
        if (cx < quadrado1.posX+quadrado1.w && cx > quadrado1.posX) {
            if (quadrado1.cor != dont) {
                quadrado1.ponto = true;
            }else{
                clearInterval(jogo);
                novo();
            }
        }
    }
    if (cy < quadrado2.posY+quadrado2.h && cy > quadrado2.posY) {
        if (cx < quadrado2.posX+quadrado2.w && cx > quadrado2.posX) {
            if (quadrado2.cor != dont) {
                quadrado2.ponto = true;
            }else{
                clearInterval(jogo);
                novo();
            }
        }
    }
    if (cy < quadrado3.posY+quadrado3.h && cy > quadrado3.posY) {
        if (cx < quadrado3.posX+quadrado3.w && cx > quadrado3.posX) {
            if (quadrado3.cor != dont) {
                quadrado3.ponto = true;
            }else{
                clearInterval(jogo);
                novo();
            }
        }
    }
}

function novo(){
    dont = cores[Math.floor(Math.random() *12)];
    gId("cor").style.background = dont;
    gId("ini").style.display = "block";
    gId("canvas").style.display = "none";
    gameOver = 0;
    quadrado1 = new Quadrado(cores[Math.floor(Math.random() *12)], pWq[Math.floor(Math.random() *3)], pHq[0]);
    quadrado2 = new Quadrado(dont, pWq[Math.floor(Math.random() *3)], pHq[1]);
    quadrado3 = new Quadrado(cores[Math.floor(Math.random() *12)], pWq[Math.floor(Math.random() *3)], pHq[2]);
}

function tela(){
    ctx.clearRect(0,0, W, H);
    ctx.fillStyle = "#000";
    ctx.font = "35px Arial";
    ctx.fillText("vidas: "+(vidas - gameOver), 12,32);
    ctx.fillStyle = "#f00";
    ctx.font = "35px Arial";
    ctx.fillText("vidas: "+(vidas - gameOver), 10,30);            
    if (gameOver >= 4) {
        clearInterval(jogo);
        novo();

    }else{
        quadrado1.desenha();
        quadrado1.movimenta();

        quadrado2.desenha();
        quadrado2.movimenta();

        quadrado3.desenha();
        quadrado3.movimenta();

        if (quadrado1.posY > H) {
            if (quadrado1.cor != dont && quadrado1.ponto == false) {
                gameOver++;
            }
            quadrado1.posY = pHq[0];
            quadrado1.posX = pWq[Math.floor(Math.random() *3)];
            quadrado1.cor = cores[Math.floor(Math.random() *12)];
            quadrado1.ponto = false;
        }
        if (quadrado2.posY > H ) {
            if (quadrado2.cor != dont && quadrado2.ponto == false) {
                gameOver++;
            }
            quadrado2.posY = pHq[0];
            quadrado2.posX = pWq[Math.floor(Math.random() *3)];
            quadrado2.cor = cores[Math.floor(Math.random() *12)];
            quadrado2.ponto = false;
        }
        if (quadrado3.posY > H) {
            quadrado3.posY = pHq[0];
            quadrado3.posX = pWq[Math.floor(Math.random() *3)];
            quadrado3.cor = cores[Math.floor(Math.random() *12)];
            if (quadrado2.cor != dont && quadrado2.ponto == false) {
                gameOver++;
            }
            quadrado3.ponto = false;

        }
    }

}

