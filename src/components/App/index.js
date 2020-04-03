import React, {Component} from 'react';
import { hot } from 'react-hot-loader/root';

import CardsPage from '../CardsPage';

class App extends Component {
    render() {
        return (
            <CardsPage />
        );
    }
}

export default hot(App);