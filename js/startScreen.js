import configs from './configs.js'

var startScreen = (function () {
    function init() {
        document.querySelector('#cor').style.background = chooseColor()
    }

    function chooseColor() {
        return configs.colors[
            Math.floor(
                Math.random() * configs.colors.length - 1
            )
        ]
    }

    return {
        init,
    }
})()
export default startScreen
