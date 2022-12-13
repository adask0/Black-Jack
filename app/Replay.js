export class Replay {
    constructor(element) {
        this.element = element;
    }

    show() {
        this.element.style.display = 'block';
    }

    hide() {
        this.element.style.display = 'hidden';
    }
}