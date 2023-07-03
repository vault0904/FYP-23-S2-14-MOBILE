import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import React, { useState } from "react";

const users = [
    {
       name: 'Bell Zettifar',
       address: '858 Yishun Ave 2, S123456'
    },
    {
        name: 'Vernestra Rwoh',
        address: '411 Sembawang Dr, S173411'
    },
    {
      name: 'Imri Cantos',
      address: '82A Sembawang Cove, S293821'
    },
    {
      name: 'Reath Silas',
      address: '765 Sengkang Street 71, S027765 '
    },
];

const DriverPickup = ({navigation}) => {
  const pickupDetails = {
    time: '1:15pm',
  }

  const [time, setTime] = useState(pickupDetails.time);

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <View style={styles.header_row}>
              <Text style={styles.header}>Student Passenger Details</Text>
              <Icon style={styles.icon} 
                        name='qrcode-scan'
                        type='material-community'
                        onPress={() => navigation.navigate('DriverScanQR')}
              />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Today's Pickup Time</Text>
                <TextInput style={styles.input} value={time} editable={false}/>
            </View>
                
            {/* Individual passenger details */}
            <View >
            {
                users.map((u, i) => {
                return (
                  <Card key={i}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: '2'}}>
                            <Text style={styles.name}>{u.name}</Text>
                            <Text style={styles.address}>{u.address}</Text>
                        </View>
                        <View style={{justifyContent: 'flex-end', flex: '1'}}>
                            <TouchableOpacity key='dropped-off' style={styles.droppedOffBtn}>
                            <Text style={styles.droppedOffText}>Dropped off</Text>
                            </TouchableOpacity> 
                        </View>
                    </View>
                  </Card>
                );
                })
            }
            </View>
        </View>
    </SafeAreaView>
  );
}

export default DriverPickup;

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
  name: {
    fontSize: 17,
    color: '#56844B',
    fontWeight: '500'
  },
  address: {
    paddingTop: 5
  },
  header_row:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon:{
    paddingTop: 15,
    paddingLeft:90,
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
    marginTop: 15,
  },
  droppedOffText: {
    color: '#FFFFFF',
    fontWeight: '500',
    textAlign: 'center'
  },
});
