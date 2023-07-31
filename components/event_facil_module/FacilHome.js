import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import axios from 'axios';

const Item = ({message}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{message}</Text>
    </View>
);


const FacilHome = ({navigation}) => {
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

    return (
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
        <Text style={styles.gate}>NORTH GATE</Text>
    </View>
    )
};

export default FacilHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperrow: {
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
    btnText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#56844B',
        marginTop: 35,
        marginLeft: 150 
    }
});