/**
 * Created by linyufeng on 2016/8/27.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ViewPagerAndroid,
    Image,
    ToastAndroid,
}from 'react-native';

export default class CheckingTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
        }
    }

    static navigationOptions = {
        header: null
    }

    render() {
        let page = this.state.page;
        return (
            <View>
                <Text>123</Text>
            </View>
        );
    }
}
