//import libaries
import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import axios from 'axios';
import { userSchoolID } from '../Login';

const Item = ({message}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{message}</Text>
    </View>
);

const TeacherHome = ({navigation}) => {
    const pickupDetails = {
        id: '01',
        gate: "North gate",
        time: "1:15pm",
    }

    const [announcements, setAnnouncements] = useState([]);
    const [id, setId] = useState(pickupDetails.id);
    const [gate, setGate] = useState(pickupDetails.gate);
    const [time, setTime] = useState(pickupDetails.time);
    const thisSchool = userSchoolID;

    //grab and fetch the latest 3 announcements from database
    useEffect(() => {
        axios
        .get(`https://h4uz91dxm6.execute-api.ap-southeast-1.amazonaws.com/dev/api/teacher/announcements/3/${thisSchool}`)
        .then((response) => {
            console.log('Response from server:', response.data);
            const receivedAnn = response.data;
            setAnnouncements(receivedAnn);
        })
        .catch((error) => {
            console.log('Error fetching annoucements', error);
        });
    }, []);

    //display
    return(
            <View style={styles.container}>
                <View style={styles.upperRow}>
                    
                    {/* header */}
                    <Text style={styles.header}>News & Notices</Text>
                    <TouchableOpacity key='View More'
                        onPress={() => navigation.navigate('TeacherAnnouncementPage')}
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

        <View>
          {/* pickup : id */}
          <View style={styles.row}>
            <Text style={styles.label}>id</Text>
            <TextInput
              style={styles.input}
              value={id}
              onChangeText={setId}
              editable={false}
            />
          </View>
        </View>
        <View>
          {/* pickup : gate name */}
          <View style={styles.row}>
            <Text style={styles.label}>Gate</Text>
            <TextInput
              style={styles.input}
              value={gate}
              onChangeText={setGate}
              editable={false}
            />
          </View>
        </View>
        <View>
          {/* pickup : time */}
          <View style={styles.row}>
            <Text style={styles.label}>Time</Text>
            <TextInput
              style={styles.input}
              value={time}
              onChangeText={setTime}
              editable={false}
            />
          </View>
        </View>
    </View>
    )
};

export default TeacherHome;

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
  gate: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'grey',
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
    marginTop: 33,
    marginLeft: 145 
  }
});
