import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Avatar } from 'react-native-paper';
import React, { useState } from "react";
import Logo from '../common/picture/default.jpg'
import StudentProfile from './StudentProfile';

const users = [
    {
       name: 'Bell Zettifar',
       status: 'picked up',
       time: '1:25pm'
    },
    {
        name: 'Vernestra Rwoh',
        status: 'picked up',
        time: '1:25pm'
    },
    {
      name: 'Imri Cantos',
      status: 'not picked up',
      time: '1:25pm'
    },
    {
      name: 'Reath Silas',
      status: 'not picked up',
      time: '1:25pm'
    },
];

const TeacherBusPickUp = ({navigation}) => {
  const pickup = {
    gate: 'Main foyer',
  }
  const [gate, setGate] = useState(pickup.gate);
  
  return (
    <ScrollView style={styles.container}>
        <View>
            <View style={styles.header_row}>
                <Text style={styles.header}>Student Pick-Up Details</Text>
                <Icon style={styles.icon} 
                      name='qrcode-scan'
                      type='material-community'
                      onPress={() => navigation.navigate('TeacherScanQR')}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Gate Assignment</Text>
                <TextInput style={styles.input} value={gate} editable={false}/>
            </View>
            <Text style={styles.driverLabel}>Driver Assignment</Text>
            {/* Driver Card */}
            <TouchableOpacity
                onPress={() => navigation.navigate('DriverDetails')}
            >
                <Card containerStyle = {styles.card}>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Avatar.Image 
                        source={Logo}
                        size={60}
                    />
                    <View style={{marginLeft: 20, marginTop: 10}}>
                        <Text style={styles.title} >LEOX GYASI</Text>
                        <Text style={styles.caption}>BX3921G</Text>
                    </View>
                    </View>
                </Card>    
            </TouchableOpacity>
            {/* Individual passenger details */}
            <View >
            {
                users.map((u, i) => {
                return (
                    <Card key={i}>
                      <TouchableOpacity 
                     // onPress={() => navigation.navigate('StudentProfile')}
                      >
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: '2', marginTop: 5}}>
                                <Text style={styles.name}>{u.name}</Text>
                                <Text style={styles.time}>{u.time}</Text>
                            </View>
                            <View style={{justifyContent: 'flex-end', flex: '1'}}>
                                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                    <Text>status:</Text>
                                    <Text style={{color:'#56844B'}}>{u.status}</Text>
                                </View>
                                <TouchableOpacity key='dropped-off' style={styles.droppedOffBtn}>
                                <Text style={styles.droppedOffText}>Picked up</Text>
                                </TouchableOpacity> 
                            </View>
                        </View>
                      </TouchableOpacity>
                    </Card>
                );
                })
            }
            </View>
        </View>
    </ScrollView>
  );
}

export default TeacherBusPickUp;

{/* styling for profile */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
  },
  header: {
    color: '#56844B',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingHorizontal: 15
  },
  card: {
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 130,
    backgroundColor: '#56844B',
    paddingTop: 5,
    borderRadius: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  caption: {
    paddingTop: 5,
    fontSize: 15,
    lineHeight: 14,
    fontWeight: '500',
    color: '#ffffff'
  },
  name: {
    fontSize: 17,
    color: '#56844B',
    fontWeight: '500'
  },
  time: {
    paddingTop: 5
  },
  otp:{
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 23,
    color: '#e27602',
  },
  header_row:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon:{
    paddingTop: 15,
    paddingLeft:110,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingTop: 15
  },
  label: {
      color: '#808080',
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 15,
      marginLeft: 5
  },
  driverLabel: {
      color: '#808080',
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 15,
      marginLeft: 15
  },
  input: {
      padding: 15,
      backgroundColor: '#E6E6E6',
      borderRadius: 8,
      height: 35,
      width: '53%',
      marginVertical: 5,
      marginHorizontal: 7,
      color: '#616161',
      fontSize: 15,
      fontWeight: 'bold',
      paddingTop: '3.5%'
  },
  droppedOffBtn: {
    backgroundColor: '#56844B',
    width: '100%',
    borderRadius: 5,
    padding: 4,
    paddingVertical: 5,
    marginTop: 5,
  },
  droppedOffText: {
    color: '#FFFFFF',
    fontWeight: '500',
    textAlign: 'center'
  },
});