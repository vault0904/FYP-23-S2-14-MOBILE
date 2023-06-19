import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native';

const DriverHome = () => {
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

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Today's pickup details</Text>
            <View style={styles.row}>
                <Text style={styles.label}>Time</Text>
                <TextInput style={styles.input} value={time} onChangeText={setTime} editable={false}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>School</Text>
                <TextInput style={styles.input} value={school} onChangeText={setSchool} editable={false}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Address</Text>
                <TextInput style={styles.input} value={address} onChangeText={setAddress} editable={false}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Bus Plate</Text>
                <TextInput style={styles.input} value={bus_plate} onChangeText={setBusPlate} editable={false}/>
            </View>
        </View>
    )
}
   

export default DriverHome;

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
        marginHorizontal: 40,
        color: '#616161',
        fontSize: 12,
        fontWeight: 'bold',
    }
})