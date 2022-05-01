import configs from './configs.js'
import player from './player.js'
import square from './square.js'

var gameScreen = (function () {

    var gameOver = false
    var canvas = document.querySelector('#canvas')
    var ctx

    function painel() {
        ctx.clearRect(0, 0, configs.screenW, configs.screenH);
        ctx.fillStyle = "#000";
        ctx.font = "35px Arial";
        ctx.fillText("Vidas: " + (player.lifes), 12, 32);
        ctx.fillStyle = "#f00";
        ctx.font = "35px Arial";
        ctx.fillText("Vidas: " + (player.lifes), 10, 30);
    }

    function colorCollide() {
        if (false) {
            if (false) {
                takeLife()
            }
        }
    }

    function takeLife() {
        player.lifes--
    }

    function endGame() {
        clearInterval(game);
    }

    function init() {
        document.querySelector("#ini").style.display = "none";
        canvas.style.display = "block"
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
        ctx = canvas.getContext("2d");
        ctx.fillStyle = "#fff"
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        square.init(ctx)
        setInterval(update, '50')

    }

    function update() {
        ctx.fillStyle = "#fff"
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        console.log('update')
        square.move()
    }

    return {
        init,
        update,
    }

})()

export default gameScreen
