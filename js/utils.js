var utils = (function () {
    function gId(x) {
        return document.getElementById(x);
    }

    function getMainColor() {
        return document.querySelector('#cor').style.background
    }

    function test() {
        alert('teste!')
    }

    return {
        gId,
        test,
        getMainColor,
    }
})()

export default utils
