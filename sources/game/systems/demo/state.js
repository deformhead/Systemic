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

        const neighbors = [];

        if (y > 0) neighbors.push(top)
        if (y > 0 && (x + 1) % 10 !== 0) neighbors.push(topright)
        if ((x + 1) % 10 !== 0) neighbors.push(right)
        if (y < 9 && (x + 1) % 10 !== 0) neighbors.push(rightbottom)
        if (y < 9) neighbors.push(bottom)
        if (y < 9 && x % 10 !== 0) neighbors.push(bottomleft)
        if (x % 10 !== 0) neighbors.push(left)
        if (y > 0 && x % 10 !== 0) neighbors.push(lefttop)

        const awareness = entity.get('awareness').states;

        Object.keys(awareness).forEach((key) => {

            const state = key;
            const data = awareness[key];

            neighbors.forEach((neighbor) => {

                if (typeof neighbor !== 'undefined'
                && neighbor.has('generate') === true
                && neighbor.get('generate').states.indexOf(state) !== -1) {

                    data.modified = data.modified ? data.modified += 1 : 1;
                }
            });
        });
    });
}

export {state};
