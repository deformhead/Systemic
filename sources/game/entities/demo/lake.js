import {Entity} from 'modules/world.js';

import {grass} from 'entities/demo/grass.js';
import {snow} from 'entities/demo/snow.js';

import {Camera} from 'components/common/camera.js';
import {Images} from 'components/common/images.js';
import {Position} from 'components/common/position.js';

import {Awareness} from 'components/demo/awareness.js';
import {Generate} from 'components/demo/generate.js';

function lake(x, y) {

    const entity = new Entity('lake-' + x + '-' + y, [

        new Camera(this.camera),
        new Images([

            {
                'source': this.assets.images.demo.lake(),
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

                'duration': 4000,
                'elapsed': 0,
                'callback': (entity) => {

                    const x = entity.get('position').x / (32 * 2);
                    const y = entity.get('position').y / (32 * 2);

                    const a = grass.call(this, x, y);

                    this.world.add(a);
                    this.grid[x + 10 * y] = a;

                    this.world.remove(entity);
                }
            },
            'ice': {

                'duration': 10000,
                'elapsed': 0,
                'callback': (entity) => {

                    const x = entity.get('position').x / (32 * 2);
                    const y = entity.get('position').y / (32 * 2);

                    const a = snow.call(this, x, y);

                    this.world.add(a);
                    this.grid[x + 10 * y] = a;

                    this.world.remove(entity);
                }
            }
        }),
        new Generate(['water'])
    ]);

    return entity;
}

export {lake};
