import utils from './utils.js'

var square = (function () {
    var x = 0
    var y = 0
    var squareCtx

    function init(ctx) {
        squareCtx = ctx
        drawn()
    }

    function drawn() {
        squareCtx.fillStyle = utils.getMainColor()
        squareCtx.fillRect(x, y, 100, 100);
    }

    function move() {
        x++
        console.log(x)
        drawn()
    }

    return {
        init,
        move,
    }

})()
export default square
