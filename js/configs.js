var ctx = gId("canvas").getContext("2d");
ctx.fillStyle = "#000";
ctx.font = "40px Arial";
var H = (window.screen.height)*0.957;
var W = (window.screen.width);


var Wq = W/3;
var Hq = H/6;
var move = [0, 0, 0, 0, 0, 0, 0, 0];
var pWq = [0, Wq, Wq*2];
var pHq = [0-Hq, 0-Hq*3, 0-Hq*6];
var colors = ["#1abc9c","#3498db","#9b59b6","#34495e","#f1c40f","#e67e22","#e74c3c","#95a5a6","#c0392b","#d35400","#f39c12","#ecf0f1"];
var dont = colors[Math.floor(Math.random() *12)];
var gameOver = 0;
var game;
var lifes = 3 - gameOver;

gId("canvas").height = H;
gId("canvas").width = W;
gId("canvas").addEventListener("click", click);

gId("cor").style.background = dont;
