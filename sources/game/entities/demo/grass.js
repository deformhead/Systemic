import {Entity} from 'modules/world.js';

import {dust} from 'entities/demo/dust.js';
import {tree} from 'entities/demo/tree.js';

import {Camera} from 'components/common/camera.js';
import {Images} from 'components/common/images.js';
import {Position} from 'components/common/position.js';

import {Awareness} from 'components/demo/awareness.js';

function grass(x, y) {

    const entity = new Entity('grass-' + x + '-' + y, [

        new Camera(this.camera),
        new Images([

            {
                'source': this.assets.images.demo.grass(),
                'frames': [

                    [0, 0, 32, 32]
                ],
                'frame': 0,
                'destination': [0, 0, 0, (32 * 2), (32 * 2)]
            }
        ]),
        new Position(

            x * (32 * 2),
            y * (32 * 2),
            0
        ),
        new Awareness({

            'fire': {

                'duration': 2000,
                'elapsed': 0,
                'callback': (entity) => {

                    const x = entity.get('position').x / (32 * 2);
                    const y = entity.get('position').y / (32 * 2);

                    const a = dust.call(this, x, y);

                    this.world.add(a);
                    this.grid[x + 10 * y] = a;

                    this.world.remove(entity);
                }
            },
            'water': {

                'duration': 10000,
                'elapsed': 0,
                'callback': (entity) => {

                    const x = entity.get('position').x / (32 * 2);
                    const y = entity.get('position').y / (32 * 2);

                    const a = tree.call(this, x, y);

                    this.world.add(a);
                    this.grid[x + 10 * y] = a;

                    this.world.remove(entity);
                }
            }
        })
    ]);

    return entity;
}

export {grass};
