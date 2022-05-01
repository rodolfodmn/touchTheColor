import utils from './utils.js'
import events from './events.js'
import startScreen from './startScreen.js'

window.onload = function () {
    document.body.style.height = `${window.innerHeight}px`
    startScreen.init()
    events.init()
}

