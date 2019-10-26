function recovery(entities) {

    Object.entries(entities).forEach(([name, entity]) => {

        const x = entity.get('position').x / (32 * 2);
        const y = entity.get('position').y / (32 * 2);

        const awareness = entity.get('awareness').states;

        Object.keys(awareness).forEach((key) => {

            const data = awareness[key];

            if (data.modified && data.modified > 0) {

                data.elapsed += this.delta.update * (1 + (2 * (data.modified - 1) / 10));

                delete data.modified;
            }

            if (data.elapsed >= data.duration) {

                data.callback(entity);
            }
        });
    });
}

export {recovery};
