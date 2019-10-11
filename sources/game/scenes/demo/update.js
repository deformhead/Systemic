import {recovery} from 'systems/demo/recovery.js';
import {state} from 'systems/demo/state.js';

function update() {

    // console.log('update demo scene');

    this.camera.update(this.delta.update);

    this.world.system(['awareness'], state);
    this.world.system(['awareness'], recovery);
}

export {update};
