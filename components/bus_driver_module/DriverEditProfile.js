import React from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class DriverEditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Leox Gyasi',
            username: 'ctb_gyasi',
            email: 'l_gyasi@ctb.com',
            password: "",  //to store password
            passwordErrorMessage: "",  //password error msg
            confirmPassword: "",      //to store password
            confirmPasswordErrorMessage: "",    //confirm password error msg
            loading: false,    //manage loader
        }
    }
    /* Authenticate User */
    formValidation = async () => {
        const {navigate} = this.props.navigation;
        this.setState({ loading: true })
        let errorFlag = false

        // input validation
        if (this.state.password !==  this.state.confirmPassword ) {
            errorFlag = true;
            this.setState({ passwordErrorMessage: "Passwoad and confirm password should be same."});
        }

        if (errorFlag) {
            console.log("errorFlag");
        } else {
            this.setState({ loading: false });
            navigate('DriverProfile');
        }
    
    }
    render() {
        return  (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ScrollView style={styles.form}>
                    {/*Profile Information*/}
                    <View style={styles.profileView}>
                        <Text style={styles.title}>Profile Information</Text>
                        <Text style={styles.label}>Name</Text>
                        <TextInput style={styles.uneditInput} value={this.state.name} onChangeText={name => this.setState({name})} editable={false}/>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.uneditInput} value={this.state.email} onChangeText={email => this.setState({email})} editable={false}/>
                    </View>
                    {/*Account Information*/}
                    <View>
                        <Text style={styles.title}>Account Information</Text>
                        <Text style={styles.label}>Username</Text>
                        <TextInput style={styles.uneditInput} value={this.state.username} onChangeText={username => this.setState({username})} editable={false}/>
                        <Text style={styles.label}>New Password</Text>
                        <TextInput style={styles.input} value={this.state.password} secureTextEntry={true} onChangeText={password => this.setState({password})}/>
                        {this.state.passwordErrorMessage.length > 0 && <Text style={styles.textDanger}>{this.state.passwordErrorMessage}</Text>}
                        <Text style={styles.label}>Confirm New Password</Text>
                        <TextInput style={styles.input} value={this.state.confirmPassword} secureTextEntry={true} onChangeText={confirmPassword => this.setState({confirmPassword})}/>
                        {this.state.confirmPasswordErrorMessage.length > 0 && <Text style={styles.textDanger}>{this.state.confirmPasswordErrorMessage}</Text>}
                    </View>
                    <TouchableOpacity
                        onPress={() => this.formValidation()}
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Save Changes</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

/*
const DriverEditProfile = ({navigation}) => {
    const profileDetails = {
        name: 'Leox Gyasi',
        username: 'ctb_gyasi',
        email: 'l_gyasi@ctb.com',
    }

    const [name, setName] = useState(profileDetails.name);
    const [username, setUsername] = useState(profileDetails.username);
    const [email, setEmail] = useState(profileDetails.email);
    const [newpassword, setNewPassword] = useState('');
    const [confirmpass, setConfirmPass] = useState('');

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.form}>
                {/*Profile Information*//*}
                <View style={styles.profileView}>
                    <Text style={styles.title}>Profile Information</Text>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.uneditInput} value={name} onChangeText={setName} editable={false}/>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.uneditInput} value={email} onChangeText={setEmail} editable={false}/>
                </View>
                {/*Account Information*//*}
                <View>
                    <Text style={styles.title}>Account Information</Text>
                    <Text style={styles.label}>Username</Text>
                    <TextInput style={styles.uneditInput} value={username} onChangeText={setUsername} editable={false}/>
                    <Text style={styles.label}>New Password</Text>
                    <TextInput style={styles.input} value={newpassword} onChangeText={setNewPassword}/>
                    <Text style={styles.label}>Confirm New Password</Text>
                    <TextInput style={styles.input} value={confirmpass} onChangeText={setConfirmPass}/>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('DriverProfile')}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Save Changes</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
    
export default DriverEditProfile;
*/

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
    input: {
        padding: 8,
        backgroundColor: '#E6E6E6',
        borderRadius: 8,
        height: 40
    },
    uneditInput: {
        padding: 8,
        backgroundColor: '#CCCCCC',
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
    },
    textDanger: {
        color: "#dc3545"
    }
});