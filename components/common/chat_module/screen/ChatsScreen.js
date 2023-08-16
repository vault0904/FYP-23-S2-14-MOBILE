import {FlatList } from 'react-native';
import ChatListItem from '../components/ChatItem';

// this page is to generate all the chats on the main chat page
// displays all past conversations between parties

// ChatScreen displays the ChatItem dynamically as a flatlist
const ChatsScreen = () => {
    //hard coded public channel
    const chat = [
        {
            id: 1,
            name: 'Public Chat',
            lastMessage: {
                id: 1,
                text: 'This is the public chat channel!',
                receivedAt: '',
            }
        }
    ]
    return (
        // calls the styled chat box from chat item and passes through a flat list
        // with params to display above past chat details
        <FlatList
            data={chat}
            renderItem={({item}) => <ChatListItem chat={item} />} // how to render every item in array
            style={{marginTop: 10}}
        />
    );
};

export default ChatsScreen;