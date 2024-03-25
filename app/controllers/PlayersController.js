import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";

export class PlayersController {
    constructor() {
        this.drawPlayers()
    }

    addPlayer(event) {
        event.preventDefault()
        let nameElm = document.querySelector('#nameInput')
        let pictureElm = document.querySelector('#pictureInput')
        playersService.addPlayer(nameElm.value, pictureElm.value)
        nameElm.value = ""
        pictureElm.value = ""
        this.drawPlayers()
    }

    addScore(playersName) {
        playersService.addScore(playersName)
        this.drawPlayers()
    }

    removeScore(playersName) {
        playersService.removeScore(playersName)
        this.drawPlayers()
    }

    drawPlayers() {
        const injectElm = document.querySelector('#playerInjections')

        let inject = ''
        AppState.players.forEach(player => {
            inject += player.HTMLInject
        })

        injectElm.innerHTML = inject
    }
}
