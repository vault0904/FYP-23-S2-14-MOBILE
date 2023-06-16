import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';


const Login = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={StyleSheet.container}>
            <Text style={styles.title}>Login Page</Text>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.inputText} 
                    placeholder='Username' 
                    placeholderTextColor='#56844B'
                    onChangeText={(username) => setUsername(username)}
                />
                <TextInput 
                    style={styles.inputText} 
                    placeholder='Password' 
                    placeholderTextColor='#56844B'
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('BottomTab')}
                style={styles.loginBtn}
            >
                <Text style={styles.btnText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        marginTop: 50,
        fontWeight: 'bold',
        fontSize: 50,
        color: '#56844B',
        marginBottom: 100,
        width: '80%',
        padding:20
    },
    inputView:{
        marginVertical: 16,
        borderRadius:25,
        height:50,
        marginBottom:50,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        borderBottomWidth: 1,
        borderBottomColor: '#56844B',
    },
    loginBtn:{
        backgroundColor: '#56844B',
        marginVertical: 14,
        borderRadius:25,
        height:50,
        alignItems:'center',
        marginLeft: 35,
        marginRight: 35,
        marginTop:100,
        marginBottom:50,
    },
    btnText:{
        padding: 15,
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center'
    }
})