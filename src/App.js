import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import './App.css';
import Carousel from './components/Carousel';

const store = configureStore();

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="container">
                <Provider store={store}>
                    <Carousel autoPlay={true} />
                </Provider>
            </div>
        </div>
    );
  }
}

export default App;
