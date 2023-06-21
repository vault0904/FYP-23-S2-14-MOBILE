import React, { useState } from 'react';
import { ScrollView, View,  Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';



const ParentEditProfile = ({navigation}) => {
    const profileDetails = {
        name: 'Mell Zettifar',
        username: 'gvps_zettifar',
        email: 'mZettifar@gmail.com',
        contact: '98765432',
        subscription: 'Self Pick Up',
        address: '11 Serangoon North Avenue 5 06-01',
    }

    const [name, setName] = useState(profileDetails.name);
    const [username, setUsername] = useState(profileDetails.username);
    const [email, setEmail] = useState(profileDetails.email);
    const [contact, setContact] = useState(profileDetails.contact);
    const [subscription, setSubscription] = useState(profileDetails.subscription);
    const [address, setAddress] = useState(profileDetails.address);
    const [newpassword, setNewPassword] = useState('');
    const [confirmpass, setConfirmPass] = useState('');

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView style={styles.form}>
                {/*Profile Information*/}
                <View style={styles.profileView}>
                    <Text style={styles.title}>Profile Information</Text>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.uneditInput} value={name} onChangeText={setName} editable={false}/>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.uneditInput} value={email} onChangeText={setEmail} editable={false}/>
                    <Text style={styles.label}>Contact</Text>
                    <TextInput style={styles.input} value={contact} onChangeText={setContact}/>
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={styles.input} value={address} onChangeText={setAddress}/>
                </View>
                {/*Account Information*/}
                <View>
                    <Text style={styles.title}>Account Information</Text>
                    <Text style={styles.label}>Username</Text>
                    <TextInput style={styles.uneditInput} value={username} onChangeText={setUsername} editable={false}/>
                    <Text style={styles.label}>New Password</Text>
                    <TextInput style={styles.input} value={newpassword} onChangeText={setNewPassword}/>
                    <Text style={styles.label}>Confirm New Password</Text>
                    <TextInput style={styles.input} value={confirmpass} onChangeText={setConfirmPass}/>
                </View>
                {/*onPress={() => navigation.navigate('Profile')}*/}
                <TouchableOpacity
                    onPress={() => navigation.navigate('ParentProfile')}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Save Changes</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
    
export default ParentEditProfile;

const styles = StyleSheet.create({
    title: {
        color: 'grey',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30
    },
    form: {
        flex: 1,
        padding: 25,
        paddingTop: 0
    },
    profileView: {
        marginBottom: 16
    },
    label: {
        marginVertical: 16,
        marginBottom: 3,
        color: '#56844B',
        fontSize: 12,
        fontWeight: 'bold',
    },
    uneditInput: {
        padding: 8,
        backgroundColor: '#CCCCCC',
        borderRadius: 8,
        height: 40
    },
    input: {
        padding: 8,
        backgroundColor: '#E6E6E6',
        borderRadius: 8,
        height: 40
    },
    btn:{
        backgroundColor: '#56844B',
        borderRadius: 8,
        height:50,
        textAlign: 'auto',
        marginTop: 50,
    },
    btnText:{
        padding: 12,
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})