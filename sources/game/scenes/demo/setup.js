import {Camera} from 'modules/camera.js';

function setup() {

    console.log('setup demo scene');

    this.camera = new Camera(this.context, this.size.width, this.size.height);
}

export {setup};
