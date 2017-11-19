import React from 'react';
import { observer, inject } from 'mobx-react';

const Menu = inject('menuStore')(observer(({ menuStore }) => (
    <div>
        <h1 onClick={() => menuStore.toggleBar()}>Menu</h1>
        <div>{menuStore.isBarOpened ? 'sub menu' : ''}</div>
    </div>
)));

export default Menu;