import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureFakeBackend from './configureFakeBackend';

if (process.env.NODE_ENV === 'development') {
    configureFakeBackend();
}

ReactDOM.render(<App/>, document.querySelector('#app'));