/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

export default class ThumbComponent extends Component {
    render() {
        return (
            <View>
                <Image style={styles.img} source={this.props.source} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    img: {
        width: 147,
        height: 147,
    }
});

