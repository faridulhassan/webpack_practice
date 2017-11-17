import allModels from './model';

class Menu {
    constructor () {
        this.open();
    }
    open() {
        console.log('open');
        console.log(`testModel from menu`);
        console.log(allModels);
    }

    close() {
        console.log('close');
    }
}

export default Menu;