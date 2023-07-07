import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, ScrollView} from 'react-native';

// announcements dummy data
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'North gate will be under renovation from 3-5 June 2023, all children from North date will be send to East gate',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: "Early dismissal on 10 Oct 2023, Children's Day. Students will be released at 12:10pm",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Time slots for child pick up after remedial classes has been updated',
    },
]

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

// pickup dummy data
const ParentHome = ({navigation}) => {
    const pickupDetails = {
        time: '1:15pm',
        mode: 'Self pickup',
        gate: 'West gate',
        status: 'picked up',
    }

    const [time, setTime] = useState(pickupDetails.time);
    const [mode, setMode] = useState(pickupDetails.mode);
    const [gate, setGate] = useState(pickupDetails.gate);
    const [status, setStatus] = useState(pickupDetails.status);

    return(
        <ScrollView>
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
                    data={DATA}
                    renderItem={({item}) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                    />
                </View>

                {/* pickup details */}
                <Text style={styles.header}>Pickup details</Text>

                {/* pickup : time */}
                <View style={styles.row}>
                    <Text style={styles.label}>Time</Text>
                    <TextInput style={styles.input} value={time} onChangeText={setTime} editable={false}/>
                </View>

                {/* pickup : mode */}
                <View style={styles.row}>
                    <Text style={styles.label}>Mode</Text>
                    <TextInput style={styles.input} value={mode} onChangeText={setMode} editable={false}/>
                </View>

                {/* pickup : gate */}
                <View style={styles.row}>
                    <Text style={styles.label}>Gate</Text>
                    <TextInput style={styles.input} value={gate} onChangeText={setGate} editable={false}/>
                </View>

                {/* pickup : status */}
                <View style={styles.row}>
                    <Text style={styles.label}>Status</Text>
                    {/* text colour changes based on pick up status  */}
                    <TextInput style={(pickupDetails.status == 'picked up') ? styles.inputGreen : styles.inputRed} value={status} onChangeText={setStatus} editable={false}/>
                </View>
            </View>
        </ScrollView>
    )
}
   

export default ParentHome;

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