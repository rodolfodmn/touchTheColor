import screen from './screen.js'

var events = (function () {
    //function coloClick(e) {
    //var cx = e.clientX;
    //var cy = e.clientY;

    //if (cy < square1.posY+square1.h && cy > square1.posY) {
    //if (cx < square1.posX+square1.w && cx > square1.posX) {
    //if (square1.color != dont) {
    //square1.ponto = true;
    //}else{
    //clearInterval(game);
    //new();
    //}
    //}
    //}
    //if (cy < square2.posY+square2.h && cy > square2.posY) {
    //if (cx < square2.posX+square2.w && cx > square2.posX) {
    //if (square2.color != dont) {
    //square2.ponto = true;
    //}else{
    //clearInterval(game);
    //new();
    //}
    //}
    //}
    //if (cy < square3.posY+square3.h && cy > square3.posY) {
    //if (cx < square3.posX+square3.w && cx > square3.posX) {
    //if (square3.color != dont) {
    //square3.ponto = true;
    //}else{
    //clearInterval(game);
    //new();
    //}
    //}
    //}
    //}

    function init() {
        document.querySelector('#play').onclick = playGame
    }

    function playGame() {
        screen.init()
    }

    return {
        //coloClick,
        init,
        playGame,

    }

})()

export default events
