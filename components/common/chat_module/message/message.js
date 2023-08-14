//import libaries
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Message = ({ message }) => {
    
    // define function for whose message it is
    const isMyMessage = () => {
        return message.user.id === 'u1';
    };

    return (
        <View style={[styles.container, {
            backgroundColor: isMyMessage() ? '#85b678' : '#bc8095',
            alignSelf:isMyMessage() ? 'flex-end' :'flex-start'
        }]}>
            <Text> {message.text} </Text>
            <Text style={styles.time}> {message.createdAt} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',

        // text shadows
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.0,
        elevation: 1
    },
    time: {
        color: 'white',
        alignSelf: 'flex-end',
        fontSize: 13,
        marginTop: 2
    },
})

export default Message