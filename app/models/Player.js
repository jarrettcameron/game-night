export class Player {
    constructor(name, picture) {
        this.name = name
        this.picture = picture
        this.score = 0
    }

    get HTMLInject() {
        return `
        <div class="mb-3 col-md-4 fs-1 fw-bold">
            <img src="${this.picture}" class="player-picture rounded rounded-pill border border-warning border-3 me-3">
             ${this.name}
        </div>
        <div class="mb-3 col-md-4">
            <div class="row align-items-center justify-content-end">
                <div class="col-2">
                    <button class="text-warning btn p-0 btn-size text-warning fs-1" onclick="app.playersController.removeScore('${this.name}')">
                        <i class="mdi mdi-minus-circle-outline"></i>
                    </button>
                </div>
                <div class="col-2 text-center">
                    <span class="fw-bold fs-1 text-light">${this.score}</span>
                </div>
                <div class="col-2">
                    <button class="text-warning btn p-0 btn-size text-warning fs-1" onclick="app.playersController.addScore('${this.name}')">
                        <i class="mdi mdi-plus-circle-outline"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="w-100"></div>`;
    }
}