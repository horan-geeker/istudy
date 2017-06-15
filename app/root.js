/**
 * Created by hejunwei on 5/26/2017.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TrainView from './components/Train';
import ProfileView from './components/Profile';
import GroupsView from './components/Groups';
import GamesView from './components/Games';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'train'
        };
    }
    static navigationOptions = {
        header: null
    };
    render() {
        return (
                <TabNavigator tabBarStyle={{height: 49}}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'train'}
                        title="Train"
                        renderIcon={() => <FontAwesome name={ 'calendar-check-o' } size={28} color={'gray'}/>}
                        renderSelectedIcon={() => <FontAwesome name={ 'calendar-check-o' } size={28}
                                                               color={'#47ccfd'}/>}
                        onPress={() => this.setState({selectedTab: 'train'})}>
                        <TrainView/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'games'}
                        title="Games"
                        renderIcon={() => <FontAwesome name={ 'gamepad' } size={28} color={'gray'}/>}
                        renderSelectedIcon={() => <FontAwesome name={ 'gamepad' } size={28} color={'#47ccfd'}/>}
                        onPress={() => this.setState({selectedTab: 'games'})}>
                        <GamesView/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'groups'}
                        title="Groups"
                        renderIcon={() => <SimpleLineIcons name={ 'people' } size={28} color={'gray'}/>}
                        renderSelectedIcon={() => <SimpleLineIcons name={ 'people' } size={28} color={'#47ccfd'}/>}
                        onPress={() => this.setState({selectedTab: 'groups'})}>
                        <GroupsView/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="Profile"
                        renderIcon={() => <FontAwesome name={ 'user-o' } size={28} color={'gray'}/>}
                        renderSelectedIcon={() => <FontAwesome name={ 'user-o' } size={28} color={'#47ccfd'}/>}
                        onPress={() => this.setState({selectedTab: 'profile'})}>
                        <ProfileView/>
                    </TabNavigator.Item>
                </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
});