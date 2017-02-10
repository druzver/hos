import React, { Component } from 'react';
import {bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

import {setText} from './../actions/'

const portraiteImage = require('./../../recource/splashscreen/portrait.png');
const landscapeImage = require('./../../recource/splashscreen/landscape.png');
//const image = require('./../../recource/splashscreen/portrait.png');

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    image:{
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    }
});

var {height, width} = Dimensions.get('window');

const PORTRAIT = 'portrait';
const LANDSCAPE = 'landscape';

function getOrientation(width, height) {
    if(width > height) {
        return LANDSCAPE;
    } else {
        return PORTRAIT;
    }
}

function getImageByType(orientation) {
    if (orientation === PORTRAIT) {
        return portraiteImage
    } else {
        return landscapeImage;
    }
}


class WelcomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            layout:{
                height:height,
                width:width,

            }
        };
    }

    onClick = () => {
        this.props.setText((new Date()).toString())
    };

    getImage = () => {
        let orientation = getOrientation(this.state.layout.width, this.state.layout.height);
        return getImageByType(orientation);
    }

    _onLayout = event => {
        console.log('------------------------------------------------' + JSON.stringify(event.nativeEvent.layout));
        this.setState({
            //image: getImage(event.nativeEvent.layout.width, event.nativeEvent.layout.height),
            layout:{
                height: event.nativeEvent.layout.height,
                width: event.nativeEvent.layout.width,

            }
        });
    };

    render() {
        return (
            <View style={styles.container} onLayout={this._onLayout} >
                <Image source={this.getImage() } style={styles.image}  >
                    <Text >{this.props.text}</Text>

                    <TouchableHighlight onPress={this.onClick} style={{padding:10}} activeOpacity={.5} underlayColor={'beige'} >
                        <Text>Welcome screen 1</Text>
                    </TouchableHighlight>

                </Image>

            </View>



        );
    }
}


function mapProps(state) {
    return state;
}

function mapActions (dispatch) {
    return bindActionCreators({
        setText
    }, dispatch );
}

export default connect(mapProps, mapActions)(WelcomeScreen);