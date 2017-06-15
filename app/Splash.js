import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    InteractionManager,
    View
} from 'react-native';
import {StackNavigator, NavigationActions} from 'react-navigation';

var {height, width} = Dimensions.get('window');

export default class Splash extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

    _toWalkThough = () => {
        const resetActions = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'WalkThough'})]
        });
        this.props.navigation.dispatch(resetActions);
    };

    componentDidMount() {
        this.timer = setTimeout(() => {
            // InteractionManager.runAfterInteractions(() => this.props.navigation.navigate('WalkThough'));
            InteractionManager.runAfterInteractions(() => this._toWalkThough());
        }, 1000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Image
                    style={{flex: 1, width: width, height: height}}
                    source={require('./splash.jpg')}
                />
            </View>
        );
    }
}