function recovery(entities) {

    Object.entries(entities).forEach(([name, entity]) => {

        const x = entity.get('position').x / (32 * 2);
        const y = entity.get('position').y / (32 * 2);

        const awareness = entity.get('awareness').states;

        Object.keys(awareness).forEach((key) => {

            const data = awareness[key];

            if (data.elapsed >= data.duration) {

                data.callback(entity);
            }
        });
    });
}

export {recovery};
