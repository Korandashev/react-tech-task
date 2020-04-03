import React from 'react';
import ReactDOM from 'react-dom';
import configureFakeBackend from './configureFakeBackend';

import './styles/main.scss';

import App from './components/App';

if (process.env.NODE_ENV === 'development') {
    configureFakeBackend();
}

ReactDOM.render(<App/>, document.querySelector('#app'));