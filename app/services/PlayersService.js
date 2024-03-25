import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"

class PlayersService {
    findPlayer(playerName) {
        return AppState.players.find(player => player.name == playerName)
    }

    addScore(playerName) {
        const foundPlayer = this.findPlayer(playerName)
        foundPlayer.score++
    }

    removeScore(playerName) {
        const foundPlayer = this.findPlayer(playerName)
        foundPlayer.score = Math.max(foundPlayer.score - 1, 0)
    }

    addPlayer(name, picture) {
        AppState.players.push(new Player(name, picture))
    }
}

export const playersService = new PlayersService()