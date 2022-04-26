import utils from './utils.js'
import events from './events.js'

window.onload = function () {
    document.body.style.height = `${window.innerHeight}px`
    events.init()
}

