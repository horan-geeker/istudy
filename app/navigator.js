import React from 'react';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import TrainView from './components/Train';
import ProfileView from './components/Profile';
import GroupsView from './components/Groups';
import GamesView from './components/Games';
import CheckingTestView from './components/CheckingTest';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const MyHomeScreen = ({ navigation }) => (
    <TrainView
        navigation={navigation}
    />
);


const MyPeopleScreen = ({ navigation }) => (
    <GamesView/>
);


const MyChatScreen = ({ navigation }) => (
    <GroupsView/>
);

const MySettingsScreen = ({ navigation }) => (
    <ProfileView/>
);

const CheckingTestScreen = ({ navigation }) => (
    <CheckingTestView
        navigation={navigation}
    />
);

const SimpleTabs = TabNavigator(
    {
        Home: {
            screen: MyHomeScreen,
            path: '/',
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor, focused}) => (
                    <FontAwesome name={ 'calendar-check-o' } size={26} style={{ color: tintColor }}/>
                ),
                header: null
            }
        },
        Games: {
            screen: MyPeopleScreen,
            path: '/games',
            navigationOptions: {
                tabBarLabel: 'Games',
                tabBarIcon: ({ tintColor, focused }) => (
                    <SimpleLineIcons name={ 'ghost' } size={26} style={{ color: tintColor }}/>
                ),
                header: null
            }
        },
        Group: {
            screen: MyChatScreen,
            path: '/group',
            navigationOptions: {
                tabBarLabel: 'Group',
                tabBarIcon: ({ tintColor, focused }) => (
                    <SimpleLineIcons name={ 'people' } size={26} style={{ color: tintColor }}/>
                ),
                header: null
            }
        },
        Profile: {
            screen: MySettingsScreen,
            path: '/settings',
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor, focused }) => (
                    <FontAwesome name={ 'user-o' } size={26} style={{ color: tintColor }}/>
                ),
                header: null
            }
        },
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false, // 禁止左右滑动
        tabBarOptions: {
            activeTintColor: '#47ccfd', // 文字和图片选中颜色
            inactiveTintColor: 'gray', // 文字和图片默认颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: {
                height: 0
            }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
            style: {
                backgroundColor: '#FFFFFF', // TabBar 背景色
                height: 60
            },
            labelStyle: {
                fontSize: 12, // 文字大小
            },
            tabStyle: {
                width: 100,
            },
        },
    }
);

const styles = StyleSheet.create({
});

export default SimpleTabs;