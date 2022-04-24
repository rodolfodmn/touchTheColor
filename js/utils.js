var utils = (function(){
    function gId(x){
        return document.getElementById(x);
    }

    function test(){
        alert('teste!')
    }

    return {
        gId,
        test,
    }
})()

export default utils
