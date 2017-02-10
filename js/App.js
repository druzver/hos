import React, { Component } from 'react';
import {Provider, connect} from 'react-redux'
import store from './store'
import {AppRegistry,StyleSheet,Text,View} from 'react-native';
import styles from './App.style'

import Page from './page';

const WelcomeScreen = Page.WelcomeScreen;

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <WelcomeScreen />
            </Provider>
        );
    }
}


const mapProps = (state) => state;
const mapActions = () => {};

export default App; //connect(mapProps, mapActions)(App);