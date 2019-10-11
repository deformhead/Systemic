import {Entity} from 'modules/world.js';

import {stone} from 'entities/demo/stone.js';

import {Camera} from 'components/common/camera.js';
import {Images} from 'components/common/images.js';
import {Position} from 'components/common/position.js';

import {Awareness} from 'components/demo/awareness.js';
import {Generate} from 'components/demo/generate.js';

function lava(x, y) {

    const entity = new Entity('lava-' + x + '-' + y, [

        new Camera(this.camera),
        new Images([

            {
                'source': this.assets.images.demo.lava(),
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

            'water': {

                'duration': 3000,
                'elapsed': 0,
                'callback': (entity) => {

                    const x = entity.get('position').x / (32 * 2);
                    const y = entity.get('position').y / (32 * 2);

                    const a = stone.call(this, x, y);

                    this.world.add(a);
                    this.grid[x + 10 * y] = a;

                    this.world.remove(entity);
                }
            },
            'ice': {

                'duration': 2000,
                'elapsed': 0,
                'callback': (entity) => {

                    const x = entity.get('position').x / (32 * 2);
                    const y = entity.get('position').y / (32 * 2);

                    const a = stone.call(this, x, y);

                    this.world.add(a);
                    this.grid[x + 10 * y] = a;

                    this.world.remove(entity);
                }
            }
        }),
        new Generate(['fire'])
    ]);

    return entity;
}

export {lava};
