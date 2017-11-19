import React from 'react';
import { observable, computed, action } from 'mobx';

class MenuStore {

    @observable show;

    constructor() {
        this.show = false;
    }

    @computed get isBarOpened() {
        return this.show;
    }

    @action
    toggleBar() {
        this.show = !this.show;
    }

    @action
    openBar() {
        this.show = true;
    }

    @action
    closeBar() {
        this.show = false;
    }

}

const menuStore = new MenuStore();

export default menuStore;