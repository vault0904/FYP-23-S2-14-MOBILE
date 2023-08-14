//import libaries
import { View, ImageBackground, StyleSheet, FlatList} from 'react-native';
import { useEffect } from 'react';
import bg from '../../picture/BG.png';
import Message from '../message/message';
import InputBox from '../input_box/input';
import { useRoute, useNavigation } from '@react-navigation/native';

// dummy messages data
import messages from '../message/messages.json'

// this page is for one - one person chat page
// displays conversations between parties 

const ChatScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    // update the user's name at the top of chat page
    useEffect(() => {
        navigation.setOptions({ title: route.params.name });
    }, [route.params.name]);

    return (
        // <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
        // keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90}
        // >
            <ImageBackground source={bg} style={styles.bg}>
                <FlatList
                    data={messages}
                    renderItem={( {item} ) => 
                    <Message message = { item }/> }
                    style={styles.list}
                    //inverted
                />

                {/* display input box for messages */}
                <View style={{paddingTop: 5}}>
                    <InputBox/>
                </View>
            </ImageBackground>

        // </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    list: {
        padding: 10,
    },
})

export default ChatScreen;