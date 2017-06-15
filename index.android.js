/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
    AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import WalkThoughScreen from './app/walkThough';
import SplashScreen from './app/Splash';
import RootScreen from './app/root';
import CheckingTest from './app/components/CheckingTest';
import TrainScreen from './app/components/Train';
import Navigator from './app/navigator';

const App = StackNavigator({
    Splash: { screen: SplashScreen },
    WalkThough: { screen: WalkThoughScreen },
    Navigator: {screen: Navigator},
    //Root: {screen: RootScreen},
    CheckingTest: {
        screen: CheckingTest,
    },
},{
    headerMode: 'none',
});

AppRegistry.registerComponent('HippoStudio', () => App);