import React from 'react';
import { observer, inject } from 'mobx-react';

const BarController = inject('menuStore')((({ menuStore }) => (
    <div>
        <button onClick={() => menuStore.openBar()}>open</button>
        <button onClick={() => menuStore.closeBar()}>close</button>
    </div>
)));

export default BarController;