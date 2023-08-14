import {FlatList } from 'react-native';
import ChatListItem from '../components/ChatItem';
import Logo from '../../picture/default.jpg'

// this page is to generate all the chats on the main chat page
// displays all past conversations between parties

// dummy chat list messages
const chat = [
    {
    id: 1,
    user: {
    id: "u2",
    name: "Mithrawnuruodo",
    image: {Logo}
    },
    lastMessage: {
        id: "m1",
        text: "Have you found the nightswan?",
        receivedAt: "7:03"
      }
    },
    {
    id: 2,
    user: {
        id: "u3",
        name: "Luke Skywalker",
        image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg"
        },
    lastMessage: {
        id: "m2",
        text: "Just found out my father is Darth Vader.",
        receivedAt: "5:47"
        }
    },
    {
        id: 3,
        user: {
            id: "u4",
            name: "Dr Aphra",
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg"
            },
        lastMessage: {
            id: "m3",
            text: "Stole another piece, wanna look?",
            receivedAt: "2:13"
            }
        },
    
]

// ChatScreen displays the ChatItem dynamically as a flatlist
const ChatsScreen = () => {
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