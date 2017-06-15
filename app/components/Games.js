import React, {Component} from 'react'
import {StyleSheet, View, WebView, Text} from 'react-native'

export default class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.isError ?
                        <View style={styles.errorInfo}>
                            <Text>网络有问题？请尝试刷新</Text>
                        </View>
                        :
                        <WebView
                            onError={this._showError.bind(this)}
                            source={{uri: 'http://majialichen.com:8081/map.html'}}
                            style={{marginTop: -20}}
                            startInLoadingState={true}
                        />
                }
            </View>
        )
    }

    _showError() {
        this.setState({
            isError: true
        });
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    errorInfo: {
        flex: 1,
        //水平居中
        alignItems: 'center',
        //垂直居中
        justifyContent: 'center',
    }
});
