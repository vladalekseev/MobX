import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import './App.css';

import menuStore from './stores/menuStore';
import Menu from './components/Menu/';
import BarController from './components/BarController/';

const stores = { menuStore };

const App = props => (
    <Provider { ...stores }>
        <div>
            <Menu />
            <BarController />
        </div>
    </Provider>
);

export default App;
