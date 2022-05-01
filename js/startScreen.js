import configs from './configs.js'
import utils from './utils.js'

var startScreen = (function () {
    function init() {
        document.querySelector('#cor').style.background = utils.chooseColor()
    }

    return {
        init,
    }
})()
export default startScreen
