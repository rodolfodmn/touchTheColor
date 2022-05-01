import configs from "./configs.js";

var utils = (function () {
    function gId(x) {
        return document.getElementById(x);
    }

    function getMainColor() {
        return document.querySelector('#cor').style.background
    }

    function chooseColor() {
        return configs.colors[
            Math.floor(
                Math.random() * configs.colors.length - 1
            )
        ]
    }

    function test() {
        alert('teste!')
    }

    return {
        gId,
        test,
        getMainColor,
        chooseColor,
    }
})()

export default utils
