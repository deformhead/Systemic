import {random} from 'modules/random.js';
import {World} from 'modules/world.js';

import {dust} from 'entities/demo/dust.js';
import {grass} from 'entities/demo/grass.js';
import {lake} from 'entities/demo/lake.js';
import {lava} from 'entities/demo/lava.js';
import {snow} from 'entities/demo/snow.js';
import {stone} from 'entities/demo/stone.js';
import {tree} from 'entities/demo/tree.js';

function start() {

    console.log('start demo scene');

    this.world = new World(this);
    this.grid = new Array(10 * 9);

    const entities = [

        dust,
        dust,
        dust,

        grass,
        grass,
        grass,

        lake,
        lake,

        lava,

        snow,

        stone,

        tree
    ];

    for (let line = 0; line < 9; line += 1) {

        for (let column = 0; column < 10; column += 1) {

            const entity = random(entities).call(this, column, line);

            this.world.add(entity);
            this.grid[column + 10 * line] = entity;
        }
    }
}

export {start};
