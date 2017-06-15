/**
 * Created by hejunwei on 6/3/2017.
 */
/**
 * Created by linyufeng on 2016/8/27.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    InteractionManager,
    View,
    ViewPagerAndroid,
    Image,
    ToastAndroid,
}from 'react-native';
import utilities from './utilities'
import {StackNavigator, NavigationActions} from 'react-navigation';

export default class WalkThough extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
        }
    }

    _toRoot = () => {
        const resetActions = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Navigator'})]
        });
        this.props.navigation.dispatch(resetActions);
    };

    //监听页面变化
    onPageSelected(e) {
        //默认从0开始，0是第一页
        this.setState({page: e.nativeEvent.position});
        // ToastAndroid.show('CurrentPage: '+e.nativeEvent.position, ToastAndroid.SHORT);
        if(e.nativeEvent.position == 3){
            this.timer = setTimeout(() => {
                // InteractionManager.runAfterInteractions(() => this.props.navigation.navigate('Navigator'));
                InteractionManager.runAfterInteractions(() => this._toRoot());
            }, 1000);
        }
    }

    render() {
        let page = this.state.page;
        return (
            <View style={styles.bg}>
                <ViewPagerAndroid
                    /*左右翻页组件*/
                    style={styles.container}
                    //绑定事件，引用时要在函数末尾加bind(this)
                    onPageSelected={this.onPageSelected.bind(this)}
                    //初始化页面为第一个页面，从0开始
                    initialpage={0}>
                    <View>
                        <Image style={styles.image} source={{uri: 'http://oqngxmzlf.bkt.clouddn.com/UpLayers0.jpg'}}/>
                    </View>
                    <View style={styles.container}>
                        <Image style={styles.image} source={{uri: 'http://oqngxmzlf.bkt.clouddn.com/UpLayers1.jpg'}}/>
                    </View>
                    <View style={styles.container}>
                        <Image style={styles.image} source={{uri: 'http://oqngxmzlf.bkt.clouddn.com/UpLayers2.jpg'}}/>
                    </View>
                    <View style={styles.container}>
                        <Image style={styles.image} source={{uri: 'http://oqngxmzlf.bkt.clouddn.com/UpLayers3.jpg'}}>
                        </Image>
                    </View>
                </ViewPagerAndroid>
                <View style={styles.slider}>
                    <View style={styles.ol}>
                        <View style={page==0?styles.current:styles.li}/>
                        <View style={page==1?styles.current:styles.li}/>
                        <View style={page==2?styles.current:styles.li}/>
                        <View style={page==3?styles.current:styles.li}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    image: {
        width: utilities.size.width,
        height: utilities.size.height,
    },
    welcome: {
        fontSize: 16,
        textAlign: 'center',
    },
    slider: {
        backgroundColor:'#32cdfe',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ol: {
        height:20,
        width:80,
        justifyContent:'space-around',
        alignItems: 'center',
        flexDirection:'row',
        borderRadius:10,
        margin:20,
    },
    li: {
        backgroundColor:'#258fb7',
        height:10,
        width:10,
        borderRadius:5,
    },
    current: {
        backgroundColor:'rgba(255,255,255,1.0)',
        height:10,
        width:10,
        borderRadius:5,
    },
});
