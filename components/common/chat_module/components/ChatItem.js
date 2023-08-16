//import libaries
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Avatar} from 'react-native-paper'
import React from 'react';

// ChatListItem is to display the chat messages on main chat page 
// this is the page to style how each chat segment on main page looks like

const ChatListItem = ({ chat }) => {
    const navigation = useNavigation();
    // const URL = 'wss://uhzn5l19x1.execute-api.ap-southeast-1.amazonaws.com/prod';
    // const thisUser = usernameValue;
    
    // // Create a persistent reference to the WebSocket connection using useRef
    // const socketRef = useRef(null);

    // const setConnect = async () => {
    //     console.log("user is going to be connected");

    //     if (!socketRef.current) {
    //         try {
    //             const connection = {
    //                 action: 'setName',
    //                 name: thisUser,
    //             };

    //             // Initialize the WebSocket connection
    //             socketRef.current = new WebSocket(URL);

    //             socketRef.current.onopen = () => {
    //                 socketRef.current.send(JSON.stringify(connection));
    //             };
    //             socketRef.current.onerror = (error) => {
    //                 console.error("Error establishing connection with socket URL!", error);
    //             };
    //         } catch (error) {
    //             console.error("Error establishing connection", error);
    //         }
    //     }socket: socketRef.current 
    //setConnect();

    return(
        <TouchableOpacity 
        onPress={() => {  
        navigation.navigate('Chat Messages', 
        { id: chat.id, name: chat.name})}} style={styles.container}>
            <Avatar.Image
            source={require('../../picture/default.jpg')}
            size={70}
            />

            <View style={styles.content}>
                {/* user name and time */}
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1}>
                        {chat.name}
                    </Text>
                    <Text style={styles.subTitle}>
                        {chat.lastMessage.receivedAt}
                    </Text>
                </View>

                {/* message */}
                <Text numberOfLines={2} style={styles.subTitle}>
                    {chat.lastMessage.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    content: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgray'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5
    },
    name: {
        flex: 1,
        fontWeight: 'bold',
        color: '#844b5f'
    },
    subTitle: {
        color: 'gray',
        marginRight: 7
    },
})

export default ChatListItem;
