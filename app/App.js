import { PlayersController } from "./controllers/PlayersController.js";

class App {

  playersController = new PlayersController();

  init() {

  }
}

const app = new App()
app.init()
// @ts-ignore
window.app = app
