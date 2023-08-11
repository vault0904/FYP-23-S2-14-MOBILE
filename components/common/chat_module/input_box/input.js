import { View, Text, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react';

const InputBox = () => {

    // state data : dynamic data
    const [newMessage, setNewMessage] = useState('');

    const onSend = () => {
        console.warn('Sending a new message', newMessage);

        // resetting message to be empty
        setNewMessage('');
    }
    return(
        <View style={styles.container}>
            {/* Text Input */}
            <TextInput placeholder='type your message here'
            value={newMessage}
            onChangeText={setNewMessage}
            style={styles.input}/>

            {/* Send Icon */}
            <MaterialIcons onPress={onSend} name='send' size={18} color='white' 
            style={styles.send} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: 'white', 
        marginHorizontal: 10,
        paddingHorizontal: 10,
        padding: 5,
        
        borderRadius: 50,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth

    },
    send: {
        backgroundColor: 'royalblue',
        padding: 6,
        borderRadius: 15,
        overflow: 'hidden',
    },
});

export default InputBox;