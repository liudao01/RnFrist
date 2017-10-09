/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

/*export default class first extends Component {
 render() {
 return (
 <View style={styles.container}>
 {/!*<Text style={styles.textStyle}>*!/}
 {/!*按照数组做,按照后面的有限*!/}
 <Text style={[styles.textStyle, {width: 100, backgroundColor: '#0F0'}]}>
 文本1
 </Text>
 <Text style={[styles.textStyle, {width: 110}]}>
 文本2
 </Text>
 <Text style={[styles.textStyle, {width: 250}]}>
 文本3
 </Text>
 </View>
 );
 }
 }*/
/*export default class first extends Component {
 render() {
 return (
 <View style={styles.container}>
 {/!*<Text style={styles.textStyle}>*!/}
 {/!*按照数组做,按照后面的有限*!/}
 <Text style={[styles.textStyle, {width: 100, backgroundColor: '#0F0'}]}>
 文本1
 </Text>
 <Text style={[styles.textStyle, {width: 110, height: 30, alignSelf: 'flex-end'}]}>
 文本2
 </Text>
 <Text style={[styles.textStyle, {width: 80, height: 50, backgroundColor: '#00F'}]}>
 文本3
 </Text>
 </View>
 );
 }
 }*/


// var Dimensions = require('Dimensions');
// var width = Dimensions.get('window').width;
// var boxWidth = width / 3;
// var BagView = require('./BagView');

var BagView = require('./BagView');
var MyIndex = require('./checkBox/MyIndex');
var LoginView = require('./LoginView');
// export const BagView = require('./BagView');
export default class first extends Component {
    render() {
        return <MyIndex/>
    }
}


/*
 const styles = StyleSheet.create({
 container: {
 //flexDirection 主轴方向
 // flexDirection: 'column',// 竖
 // flexDirection:'column-reverse',//
 flexDirection: 'row',//横
 // flexDirection: 'row-reverse',
 backgroundColor: '#F5FCFF',
 flexWrap: 'wrap',
 //项目在主轴上的对齐方式
 justifyContent: 'flex-start',
 // alignItems: 'flex-start'
 // justifyContent:'flex-end'
 // justifyContent:'center'
 },
 textStyle: {
 width: 100,
 height: 30,
 backgroundColor: '#F00'

 }

 });
 */

AppRegistry.registerComponent('first', () => first);
