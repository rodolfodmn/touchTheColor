import configs from './configs.js'

var screen = (function () {

    var lifes
    var gameOver = false
    var canvas = document.querySelector('#canvas')

    function painel() {
        ctx.clearRect(0, 0, configs.screenW, configs.screenH);
        ctx.fillStyle = "#000";
        ctx.font = "35px Arial";
        ctx.fillText("lifes: " + (lifes), 12, 32);
        ctx.fillStyle = "#f00";
        ctx.font = "35px Arial";
        ctx.fillText("lifes: " + (lifes), 10, 30);
    }

    function colorCollide() {
        if (false) {
            if (false) {
                takeLife()
            }
        }
    }

    function takeLife() {
        lifes--
    }

    function endGame() {
        clearInterval(game);
    }

    function init() {
        document.querySelector("#ini").style.display = "none";
        canvas.style.display = "block"
        var ctx = canvas.getContext('2d')
        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.strokeStyle = "red";
        ctx.rect(0, 0, configs.screenH, configs.screenW);
        ctx.stroke();
        if (lifes >= 4) {
            update();

        } else {
            gameOver = true
        }
    }

    function update() {
    }

    return {
        init,
        update,
    }

})()

export default screen
