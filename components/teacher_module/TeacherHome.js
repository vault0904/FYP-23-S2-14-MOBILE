import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import axios from 'axios';

const Item = ({message}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{message}</Text>
    </View>
);

const TeacherHome = ({navigation}) => {
    const [announcements, setAnnouncements] = useState([]);

    //grab and fetch the latest 3 announcements from database
    useEffect(() => {
        axios
        .get('https://h4uz91dxm6.execute-api.ap-southeast-1.amazonaws.com/dev/api/announcements/3')
        .then((response) => {
            console.log('Response from server:', response.data);
            const receivedAnn = response.data;
            setAnnouncements(receivedAnn);
        })
        .catch((error) => {
            console.log('Error fetching annoucements', error);
        });
    }, []);

    return(
            <View style={styles.container}>
                <View style={styles.upperRow}>
                    
                    {/* header */}
                    <Text style={styles.header}>Announcements</Text>
                    <TouchableOpacity key='View More'
                        onPress={() => navigation.navigate('AnnouncementPage')}
                    >
                        <Text style={styles.btnText}>View More</Text>
                    </TouchableOpacity> 
                </View>

                {/* NEXT STEP: add code to limit announcements to only 3 */}
                <View style={styles.list}>
                    <FlatList 
                    data={announcements}
                    renderItem={({item}) => <Item message={item.message} />}
                    keyExtractor={(item) => item.ann_ID.toString()}
                    />
                </View>

        <Text style={styles.header}>Gate assignment</Text>

        <Text style={styles.gate}>WEST GATE</Text>
    </View>
    )
};

export default TeacherHome;

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
    marginTop: 33,
    marginLeft: 145 
  }
});
