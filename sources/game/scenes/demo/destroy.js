function destroy() {

    console.log('destroy demo scene');
    console.log('-------');

    delete this.camera;
    delete this.grid;
    delete this.world;
}

export {destroy};
