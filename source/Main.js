import { Paths } from './night/Paths.js';

export class Main {
    static config = {
        width: 1280,
        height: 720,
        fps: 60,
        initialState: 'MainMenu',
        debug: false
    };

    static currentState = null;

    static init() {
        this.setupCanvas();
        this.setupEvents();
        this.loadInitialAssets();
        this.switchState(this.config.initialState);
    }

    static setupCanvas() {
        this.canvas = document.getElementById('gameCanvas') || document.createElement('canvas');
        this.canvas.id = 'gameCanvas';
        this.canvas.width = this.config.width;
        this.canvas.height = this.config.height;

        if (!document.body.contains(this.canvas)) {
            document.body.appendChild(this.canvas);
        }

        this.ctx = this.canvas.getContext('2d');
    }

    static setupEvents() {
        window.addEventListener('resize', () => this.onResize());
        window.addEventListener('keydown', (e) => this.onKeyDown(e));
        window.addEventListener('keyup', (e) => this.onKeyUp(e));
    }

    static loadInitialAssets() {
        Paths.setCurrentLevel('shared');
    }

    static switchState(stateName) {
        if (this.currentState && typeof this.currentState.destroy === 'function') {
            this.currentState.destroy();
        }

        this.currentState = {
            name: stateName,
            update: (dt) => {},
            render: (ctx) => {}
        };
    }

    static onResize() {}

    static onKeyDown(event) {}

    static onKeyUp(event) {}
}

window.addEventListener('DOMContentLoaded', () => {
    Main.init();
});
