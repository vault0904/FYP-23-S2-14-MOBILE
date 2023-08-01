//import new libaries
import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import axios from 'axios';
import { userVendorID } from '../Login';

const Item = ({message}) => (
  <View style={styles.item}>
      <Text style={styles.title}>{message}</Text>
  </View>
);

const DriverHome = ({ navigation }) => {
  const pickupDetails = {
    time: '1:15pm',
    school: 'Starfleet Primary School',
    address: '123 Woodlands Av 4, S123456',
    bus_plate: 'PD501X',
  }

  const [time, setTime] = useState(pickupDetails.time);
  const [school, setSchool] = useState(pickupDetails.school);
  const [address, setAddress] = useState(pickupDetails.address);
  const [bus_plate, setBusPlate] = useState(pickupDetails.bus_plate);
  const [announcements, setAnnouncements] = useState([]);
  const thisVendor = userVendorID;

  // Grab and fetch the latest 3 announcements from the database
  useEffect(() => {
    axios
      .get(`https://h4uz91dxm6.execute-api.ap-southeast-1.amazonaws.com/dev/api/driver/announcements/3/${thisVendor}`)
      .then((response) => {
        console.log('Response from server:', response.data);
        const receivedAnn = response.data;
        setAnnouncements(receivedAnn);
      })
      .catch((error) => {
        console.log('Error fetching announcements', error);
      });
  }, []);

  //display
  return(
    <View style={styles.container}>
    <View style={styles.upperRow}>
        
        {/* header */}
        <Text style={styles.header}>News & Notices</Text>
        <TouchableOpacity key='View More'
            onPress={() => navigation.navigate('DriverAnnouncementPage')}
        >
            <Text style={styles.btnText}>View More</Text>
        </TouchableOpacity> 
    </View>

    <View style={styles.list}>
        <FlatList 
        data={announcements}
        renderItem={({item}) => <Item message={item.message} />}
        keyExtractor={(item) => item.ann_ID.toString()}
        />
    </View>
        <Text style={styles.header}>Today's pickup details</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Time</Text>
          <TextInput style={styles.input} value={time} onChangeText={setTime} editable={false} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>School</Text>
          <TextInput style={styles.input} value={school} onChangeText={setSchool} editable={false} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput style={styles.input} value={address} onChangeText={setAddress} editable={false} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Bus Plate</Text>
          <TextInput style={styles.input} value={bus_plate} onChangeText={setBusPlate} editable={false} />
        </View>
      </View>
  );
}

export default DriverHome;

//styling
const styles = StyleSheet.create({
  container: {
      flex: 1, 
  },
  header: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#56844B',
      marginTop: 30,
      marginBottom: 10,
      marginLeft: 20 
  },
  upperRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
  },
  list: {
      maxHeight: 300
  },
  item: {
      backgroundColor: 'lightgrey',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 25
  },
  title: {
      fontSize: 14,
      color: 'grey',
      fontWeight: 'bold'
  },
  row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 10,
      paddingVertical: 5,
      paddingTop: 0,
      justifyContent: 'space-between'
  },
  label: {
      color: '#858585',
      fontSize: 12,
      fontWeight: 'bold',
      marginTop: 15,
      marginLeft: 10
  },
  input: {
      padding: 15,
      backgroundColor: '#E6E6E6',
      borderRadius: 8,
      height: 35,
      width: 220,
      marginVertical: 5,
      marginHorizontal: 50,
      color: '#616161',
      fontSize: 12,
      fontWeight: 'bold',
  },
  inputRed: {
      padding: 15,
      backgroundColor: '#E6E6E6',
      borderRadius: 8,
      height: 35,
      width: 220,
      marginVertical: 5,
      marginHorizontal: 50,
      color: '#FF0000',
      fontSize: 12,
      fontWeight: 'bold',
  },
  inputGreen: {
      padding: 15,
      backgroundColor: '#E6E6E6',
      borderRadius: 8,
      height: 35,
      width: 220,
      marginVertical: 5,
      marginHorizontal: 50,
      color: '#56844B',
      fontSize: 12,
      fontWeight: 'bold',
  },
  btnText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#56844B',
      marginTop: 35,
      marginLeft: 150 
  }
});