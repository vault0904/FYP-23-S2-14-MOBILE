//import libaries
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../picture/default.jpg'
import { useNavigation } from '@react-navigation/native';

// ChatListItem is to display the chat messages on main chat page 
// this is the page to style how each chat segment on main page looks like

const ChatListItem = ({ chat }) => {
    const navigation = useNavigation(); 

    return(
        <TouchableOpacity onPress={() => navigation.navigate('Chat Messages', { id: chat.id, name: chat.user.name})} style={styles.container}>
            <Image source={Logo} 
            style={styles.image}
            />

            <View style={styles.content}>
                {/* user name and time */}
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1}>
                        {chat.user.name}
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
