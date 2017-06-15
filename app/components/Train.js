import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Alert,
    TouchableOpacity,
} from 'react-native';

import ThumbComponent from './ThumbComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class Train extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "hippo studio"
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.topContainer}>
                    <Text style={styles.topText}>
                        ISTUDY
                    </Text>
                    <Text style={styles.welcome}>
                        Hello,Coco!
                    </Text>
                    <Image
                        style={styles.clock}
                        source={{uri: 'http://oqngxmzlf.bkt.clouddn.com/clock.png'}}
                    />
                    <View style={{flexDirection: 'row',margin: 10}}>
                        <FontAwesome name={ 'clock-o' } size={20} color={'white'}/>
                        <Text style={{color: 'white',marginRight: 5,marginLeft: 5}}>10`</Text>
                        <MaterialCommunityIcons name={ 'puzzle' } size={20} color={'white'}/>
                        <Text style={{color: 'white'}}>4</Text>
                    </View>
                    <Text style={styles.middleText}>
                        Assessment
                    </Text>
                    <TouchableOpacity style={styles.checkBtn} onPress={() => this.props.navigation.navigate('CheckingTest')}>
                        <Text style={styles.btnText}>Checking tests</Text>
                    </TouchableOpacity>
                </View>
                <View style={{paddingTop: 10}}>
                    <Text style={{paddingLeft:10, fontSize: 15}}>
                        More activities
                    </Text>
                    <ScrollView
                        style={{paddingLeft: 12}}
                        horizontal={true}
                    >
                        <ThumbComponent
                            source={{uri: 'http://oqngxmzlf.bkt.clouddn.com/social@2x.png'}}
                        />
                        <ThumbComponent
                            source={{uri: 'http://oqngxmzlf.bkt.clouddn.com/travel@2x.png'}}
                        />
                        <ThumbComponent
                            source={{uri: 'http://oqngxmzlf.bkt.clouddn.com/shop@2x.png'}}
                        />
                        <ThumbComponent
                            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                        />
                    </ScrollView>
                    <Text style={{paddingLeft:10, fontSize: 15}}>
                        Exercise your skills
                    </Text>
                    <ScrollView
                        style={{paddingLeft: 12}}
                        horizontal={true}
                    >
                        <ThumbComponent
                            source={{uri: 'http://oqngxmzlf.bkt.clouddn.com/listen@2x.png'}}
                        />
                        <ThumbComponent
                            source={{uri: 'http://oqngxmzlf.bkt.clouddn.com/speak@2x.png'}}
                        />
                        <ThumbComponent
                            source={{uri: 'http://oqngxmzlf.bkt.clouddn.com/write@2x.png'}}
                        />
                        <ThumbComponent
                            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                        />
                    </ScrollView>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    topContainer: {
        height: 465,
        alignItems: 'center',
        backgroundColor: '#01a6e5',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color:'white',
    },
    clock: {
        marginTop: 10,
        marginBottom: 10,
        width: 200,
        height: 200,
    },
    middleText: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
        lineHeight: 44,
    },
    checkBtn: {
        height: 44,
        width: 281,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 20,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 3,
    },
    btnText: {
        color: '#01a6e5',
        fontSize: 20,
    },
    topText: {
        lineHeight: 44,
        fontSize: 28,
        textAlign:'center',
        color: 'white',
        marginTop: 5,
        marginBottom: 10,
    }
});