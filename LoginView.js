/**
 * Created by liuml on 2017/5/16.
 */
import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity

} from 'react-native'

class LoginView extends Component {
    render() {
        return <View style={styles.container}>
            <Image source={require('./images/icon.png')} style={styles.iconStyle}></Image>
            <View style={styles.inputWarpperStyle}>
                <TextInput style={styles.inputStyle} textAlign="center" placeholder={'请输入qq号码'}></TextInput>
            </View>
            <View style={styles.inputWarpperStyle}>
                <TextInput style={styles.inputStyle} textAlign="center" secureTextEntry={true} keyboardType="numeric"
                           placeholder={'请输入密码'}></TextInput>
            </View>

            {/*可以用button 用Text尝试
             TouchableOpacity 透明度变化
             */}
            <TouchableOpacity
                activeOpacity={0.5}
            >
                <View style={styles.textWrapperStyle}>
                    <Text style={{color: '#FFFF', flex: 1, textAlign: 'center', alignSelf: 'center'}}>登录</Text>
                </View>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    iconStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: 50,
        marginBottom: 50
    },
    inputWarpperStyle: {
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1//填满父容器
    },
    textWrapperStyle: {
        flexDirection: 'row',
        backgroundColor: '#87CEFA',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 20,
        height: 30,
        width: 300

    }
});
module.exports = LoginView;