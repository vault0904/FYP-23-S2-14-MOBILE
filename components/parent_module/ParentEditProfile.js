import axios from 'axios';
import React, { useState } from 'react';
import { ScrollView, View,  Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { usernameValue } from '../Login';

export default class ParentEditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            email: "",
            contact: "",
            subscription: "",
            address: "",
            oldPassword : "",   //to store old password
            oldPasswordErrorMessage : "",   //old password error msg
            password: "",  //to store new password
            passwordErrorMessage: "",  //new password error msg
            confirmPassword: "",      //to store new confirmed password
            confirmPasswordErrorMessage: "",    //confirmed password error msg
            successChangePassMessage: "",   //success change password msg
            successUpdatePassMessage: "",   //success update profile msg
            loading: false,    //manage loader
        }
    }

    //display user data from userdata object
    componentDidMount() {
        const userID = usernameValue;
      
        axios
          .get(`https://h4uz91dxm6.execute-api.ap-southeast-1.amazonaws.com/dev/api/parent/${userID}`)
          .then((response) => {
            const userData = response.data;
            console.log("user data: ", userData);
            this.setState({
              name: userData.firstName + " " + userData.lastName,
              username: userData.parent_ID,
              email: userData.email,
              contact: userData.contactNo,
              subscription: userData.subscription,
              address: userData.address,
            });
          })
          .catch((error) => {
            console.log('Error fetching data', error);
          });
      }
      
    //form to validate and change details
    formValidationDetails = async () => {
        this.setState({ successUpdatePassMessage: "" });
        const userID = usernameValue;
        const {
            contact,
            address,
        } = this.state;

        const newDetails = {
            parent_ID: userID,
            newContact : contact,
            newAddress : address,
        };

        console.log("new details: ", newDetails);
        axios
            .put("https://h4uz91dxm6.execute-api.ap-southeast-1.amazonaws.com/dev/api/parent/updateDetails", newDetails)
            .then((response) => {
                console.log("Response from server:", response.data);
                this.setState({ successUpdatePassMessage: "Successfully updated profile" });
            })
            .catch((error) => {
                console.log("Error during update profile", error);
            }
        );
    }

    //validate password function to change password
    formValidationPass = async () => {
        this.setState({ successChangePassMessage: "" });
        const userID = usernameValue;
        axios
          .get(`https://h4uz91dxm6.execute-api.ap-southeast-1.amazonaws.com/dev/api/parent/${userID}`)
          .then((response) => {
            const DBPassword = response.data.password;
            console.log("password from DB real time", DBPassword);
      
            const {
              oldPassword,
              password,
              confirmPassword,
            } = this.state;
      
            if (oldPassword !== DBPassword) {
              console.log("old password: ", oldPassword, "old password from DB: ", DBPassword);
              this.setState({ oldPasswordErrorMessage: "Old password is incorrect" });
              return;
            }
            this.setState({ oldPasswordErrorMessage: "" });
      
            if (!password && !confirmPassword) {
              console.log("password: ", password, "confirm password: ", confirmPassword);
              this.setState({ passwordErrorMessage: "Please enter new password", confirmPasswordErrorMessage: "Please enter new password" });
              return;
            }
            this.setState({ passwordErrorMessage: "", confirmPasswordErrorMessage: "" });
      
            if (password !== confirmPassword) {
              console.log("password: ", password, "confirm password: ", confirmPassword);
              this.setState({ confirmPasswordErrorMessage: "Password does not match" });
              return;
            }
            this.setState({ confirmPasswordErrorMessage: "" });
      
            const newPass = {
              parent_ID: userID,
              password: confirmPassword,
            };
      
            axios
              .put("https://h4uz91dxm6.execute-api.ap-southeast-1.amazonaws.com/dev/api/parent/updatePass", newPass)
              .then((response) => {
                console.log("Response from server:", response.data);
                this.setState({ successChangePassMessage: "Password changed successfully" });
              })
              .catch((error) => {
                console.log("Error block in password", error);
              });
          })
          .catch((error) => {
            console.log("Error fetching data", error);
          });
      }
      
    //display
    render() {
        return  (
            <View style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView style={styles.form}>
                    {/*Profile Information*/}
                    <View style={styles.profileView}>
                        <Text style={styles.title}>Profile Information</Text>
                        <Text style={styles.label}>Name</Text>
                        <TextInput style={styles.uneditInput} value={this.state.name} onChangeText={name => this.setState({name})} editable= {false}/>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.uneditInput} value={this.state.email} onChangeText={email => this.setState({email})} editable = {false}/>
                        <Text style={styles.label}>Contact</Text>
                        <TextInput style={styles.input} value={this.state.contact} onChangeText={contact => this.setState({contact})}/>
                        <Text style={styles.label}>Address</Text>
                        <TextInput style={styles.input} value={this.state.address} onChangeText={address => this.setState({address})}/>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.formValidationDetails()}
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Change Details</Text>
                        {this.state.successUpdatePassMessage.length > 0 && <Text style={styles.textSuccess}>{this.state.successUpdatePassMessage}</Text>}
                    </TouchableOpacity>
                    {/*Password information*/}
                    <View>
                        <Text style={styles.title}>Account Information</Text>
                        <Text style={styles.label}>Username</Text>
                        <TextInput style={styles.uneditInput} value={this.state.username} onChangeText={username => this.setState({username})} editable={false}/>
                        <Text style={styles.label}>Old Password</Text>
                        <TextInput style = {styles.input} value={this.state.oldPassword} secureTextEntry={true} onChangeText={oldPassword => this.setState({oldPassword})}/>
                        {this.state.oldPasswordErrorMessage.length > 0 && <Text style={styles.textDanger}>{this.state.oldPasswordErrorMessage}</Text>}

                        <Text style={styles.label}>New Password</Text>
                        <TextInput style={styles.input} value={this.state.password} secureTextEntry={true} onChangeText={password => this.setState({password})}/>
                        {this.state.passwordErrorMessage.length > 0 && <Text style={styles.textDanger}>{this.state.passwordErrorMessage}</Text>}
                        <Text style={styles.label}>Confirm New Password</Text>
                        <TextInput style={styles.input} value={this.state.confirmPassword} secureTextEntry={true} onChangeText={confirmPassword => this.setState({confirmPassword})}/>
                        {this.state.confirmPasswordErrorMessage.length > 0 && <Text style={styles.textDanger}>{this.state.confirmPasswordErrorMessage}</Text>}
                    </View>
                    <TouchableOpacity
                        onPress={() => this.formValidationPass()}
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Change Password</Text>
                        {this.state.successChangePassMessage.length > 0 && <Text style={styles.textSuccess}>{this.state.successChangePassMessage}</Text>}
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}


//css styles
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
    },
    textDanger: {
        color: "#dc3545"
    },
    textSuccess: {
        color: "#28a745"
    }
});