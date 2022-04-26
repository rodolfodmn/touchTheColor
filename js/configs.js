var configs = (function () {

    var screenH = (document.body.clientHeight)
    var screenW = (document.body.clientWidth)

    var colors = [
        "#1abc9c", "#3498db", "#9b59b6", "#34495e", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#c0392b", "#d35400", "#f39c12", "#ecf0f1"
    ];

    return {
        colors,
        screenH,
        screenW,
    }
})();

export default configs
