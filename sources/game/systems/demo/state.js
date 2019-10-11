function state(entities) {

    Object.entries(entities).forEach(([name, entity]) => {

        const x = entity.get('position').x / (32 * 2);
        const y = entity.get('position').y / (32 * 2);

        const top = this.grid[(x) + 10 * (y - 1)];
        const topright = this.grid[(x + 1) + 10 * (y - 1)];
        const right = this.grid[(x + 1) + 10 * (y)];
        const rightbottom = this.grid[(x + 1) + 10 * (y + 1)];
        const bottom = this.grid[(x) + 10 * (y + 1)];
        const bottomleft = this.grid[(x - 1) + 10 * (y + 1)];
        const left = this.grid[(x - 1) + 10 * (y)];
        const lefttop = this.grid[(x - 1) + 10 * (y - 1)];

        const neighbors = [top, topright, right, rightbottom, bottom, bottomleft, left, lefttop];
        const awareness = entity.get('awareness').states;

        Object.keys(awareness).forEach((key) => {

            const state = key;
            const data = awareness[key];

            neighbors.forEach((neighbor) => {

                if (typeof neighbor !== 'undefined'
                && neighbor.has('generate') === true
                && neighbor.get('generate').states.indexOf(state) !== -1) {

                    data.elapsed += this.delta.update;
                }
            });
        });
    });
}

export {state};
