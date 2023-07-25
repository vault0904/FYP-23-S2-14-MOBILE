import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, TextInput, ScrollView} from 'react-native';
import {Avatar, Title, Caption, Text, Card} from 'react-native-paper';
import Logo from '../common/avatars/child.jpg';
import QRCode from 'react-native-qrcode-svg';
import React, { useState, useEffect, useLayoutEffect} from "react";
import axios from 'axios';
import {useRoute} from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";


const ChildProfile = () => {
    //grab the childID
    const route = useRoute();
    //this childID is based on the GUI ID
    const {thisChild} = route.params;
    console.log("thisID", thisChild);
    const iSFocused = useIsFocused();
    const[thisChildData, setThisData] = useState(null);
  
    const fetchData = () => {
      //axios to get child data
      console.log("current child id", thisChild)
      axios
        .get(`https://h4uz91dxm6.execute-api.ap-southeast-1.amazonaws.com/dev/api/thischild/${thisChild}`)
        .then((response) => {
          const recData = response.data;
          setThisData(recData);
        })
        .catch((error) => {
          console.log('Error fetching child data:', error);
        });
      };

      useEffect(() => {
        console.log("thischildData:", thisChildData);
      }, [thisChildData]);

      useEffect(() => {
        fetchData();
      }, []);
    
      useLayoutEffect(() => {
        if (iSFocused)  { 
          fetchData();
        }
      }, [iSFocused]);
      
      if (!thisChildData) {
        return (
          <View style={styles.loadingContainer}>
            <Text>Loading...</Text>
          </View>
        );
      }
      //generate QR code
      const secretKey = "fypPickupAPP";
      const qrData = thisChildData.child_ID + "|" +secretKey;


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        
        <View style={styles.userInfoSection}>
          {/* Top Profile Card */}
          <Card style={styles.cardDisplay}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image 
                  source={Logo}
                  size={80}
                />

                {/* child name & level */}
                <View style={{marginLeft: 20, marginTop: 10}}>
                    <Title style={styles.title}>{thisChildData.firstName} {thisChildData.lastName}</Title>
                    <Caption style={styles.caption}>{thisChildData.grade}</Caption>
                </View>
              </View>
          </Card>

          {/* Profile Information */}
          <View style={styles.information}>
              <Text style={styles.profileInfo}>
                  Profile Information
              </Text>
          </View>

          <View>
            <View style={styles.profileContainer}>
              <Text style={styles.profileTag}>School Name</Text>
              <TextInput 
                style={styles.profileText} 
                value = {thisChildData.school_Name}
                placeholderTextColor='#56844B'
                editable = {false}
              />
            </View>

            <View style={styles.profileContainer}>
              <Text style={styles.profileTag}>Form Class</Text>
              <TextInput 
                style={styles.profileText} 
                value = {thisChildData.formClass}
                placeholderTextColor='#56844B'
                editable = {false}
              />
            </View>

            <View style={styles.profileContainer}>
              <Text style={styles.profileTag}>Dismissal gate</Text>
              <TextInput 
                style={styles.profileText} 
                value = 'Temporary' 
                placeholderTextColor='#56844B'
                editable = {false}
              />
            </View>

            <View style={styles.profileContainer}>
              <Text style={styles.profileTag}>Form Teacher</Text>
              <TextInput 
                style={styles.profileText} 
                value={`${thisChildData.teacherFirstName} ${thisChildData.teacherLastName}`}
                placeholderTextColor='#56844B'
                editable = {false}
              />
            </View>

            <View style={styles.profileContainer}>
              <Text style={styles.profileTag}>Teacher Email</Text>
              <TextInput 
                style={styles.profileText} 
                value = {thisChildData.teacherEmail}
                placeholderTextColor='#56844B'
                editable = {false}
              />
            </View>
          </View>

              {/* Displaying QR code */}
              <View style={styles.qrContainer}>
                {/* Move QRCode component here */}
                {thisChildData && (
                  <QRCode
                    value={qrData}
                    color={'#56844B'}
                    backgroundColor={'white'}
                    size={160}
                    // logo={require('../../../embed_logo_file_path')} // or logo={{uri: base64logo}}
                    logoMargin={2}
                    logoSize={20}
                    logoBorderRadius={10}
                    logoBackgroundColor={'transparent'}
                  />
                )}
              </View>
            </View>
          
          </ScrollView>
        </SafeAreaView>
      );
    }

export default ChildProfile;

{/* styling for profile */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  cardDisplay: {
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 130,
    backgroundColor: '#56844B',
    paddingTop: 10,
  },
  profileInfo: {
    color: '#56844B',
    fontSize: 18,
    fontWeight: 'bold',
  },
  information :{
    marginTop: 35,
    marginBottom: 10,
  },
  profileContainer: {
    marginTop: 10,
    flexDirection: 'row'
  },
  profileTag:{
    color: '#707070',
    fontWeight: 'bold',
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 22,
    fontSize: 15,
    marginRight: 15
  },
  profileText:{
    height:50,
    borderBottomWidth: 1,
    borderBottomColor: '#56844B',
    flex: 2.5,
    justifyContent: 'flex-end',
    color: '#56844B',
    marginTop: 8,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    marginTop: 35
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  caption: {
    fontSize: 15,
    lineHeight: 14,
    fontWeight: '500',
    color: '#ffffff'
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  btnText:{
      padding: 15,
      color: '#FFFFFF',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold'
  },
  qrContainer: {
    marginHorizontal: '25%',
    marginTop: 35
  }
});
