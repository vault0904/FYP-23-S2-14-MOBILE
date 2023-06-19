import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const DriverEditProfile = ({navigation}) => {
    const profileDetails = {
        name: 'Leox Gyasi',
        username: 'ctb_gyasi',
        email: 'l_gyasi@ctb.com',
        license: 'S1234567A',
        company: 'Coolidge Trucks & Buses',
    }

    const [name, setName] = useState(profileDetails.name);
    const [username, setUsername] = useState(profileDetails.username);
    const [email, setEmail] = useState(profileDetails.email);
    const [license, setLicense] = useState(profileDetails.license);
    const [company, setCompany] = useState(profileDetails.company);

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.title}>Profile Information</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Name</Text>
                <TextInput style={styles.input} value={name} onChangeText={setName}/>
                <Text style={styles.label}>Username</Text>
                <TextInput style={styles.input} value={username} onChangeText={setUsername} />
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} value={email} onChangeText={setEmail} />
                <Text style={styles.label}>Driving license</Text>
                <TextInput style={styles.input} value={license} onChangeText={setLicense} />
                <Text style={styles.label}>Company</Text>
                <TextInput style={styles.input} value={company} onChangeText={setCompany} />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Save Changes</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
    
export default DriverEditProfile;

const styles = StyleSheet.create({
    title: {
        color: 'grey',
        fontSize: 16,
        fontWeight: 'bold',
        margin: 25
    },
    form: {
        flex: 1,
        padding: 25,
        paddingTop: 0
    },
    label: {
        marginVertical: 16,
        marginBottom: 3,
        color: '#56844B',
        fontSize: 12,
        fontWeight: 'bold',
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
        marginTop: 80,
    },
    btnText:{
        padding: 12,
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});