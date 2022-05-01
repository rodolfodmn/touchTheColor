import utils from './utils.js'

var square = (function () {
    var x = 0
    var y = 0
    var squareCtx
    var squares = [1, 2, 3]
    var height = window.innerHeight / 3
    var width = window.innerWidth / 3

    function init(ctx) {
        squareCtx = ctx
        drawnAll()
    }

    function drawnAll() {
        squares.forEach(function (i) {
            console.log(i - 1)
            squareCtx.fillStyle = utils.chooseColor()
            squareCtx.fillRect(x + width * (i - 1), y + height * (i - 1),
                width, height);
        })
    }

    function move() {
        y += 3
        drawnAll()
    }

    return {
        init,
        move,
    }

})()
export default square
