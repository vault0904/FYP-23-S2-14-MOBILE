import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { Avatar } from 'react-native-paper';
import Logo from '../common/picture/driver.jpg'

const users = [
    {
       name: 'Bell Zettifar',
       plate: 'BX123Q',
       region: 'West'
    },
    {
        name: 'Vernestra Rwoh',
        plate: 'BX123Q',
        region: 'West'
    },
    {
        name: 'Imri Cantos',
        plate: 'BX123Q',
        region: 'West'
    },
    {
        name: 'Reath Silas',
        plate: 'BX123Q',
        region: 'North'
    },
];

const DriverList = ({navigation}) => (
    <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Driver Details</Text>
        </View>
        {/* Individual driver details */}
        {
                users.map((u, i) => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TeacherBusPickup')}>
                        <Card key={i} containerStyle={styles.card}>
                            <View style={{flexDirection: 'row', margin: 5}}>
                                <Avatar.Image 
                                    source={Logo}
                                    size={70}
                            />
                                <View style={{marginLeft: 20, marginTop: 5}}>
                                    <Text style={styles.title} >{u.name}</Text>
                                    <Text style={styles.caption}>{u.plate}</Text>
                                    <Text style={styles.caption}>{u.region}</Text>
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>
                );
                })
        }
    </ScrollView>
);

export default DriverList;

{/* styling for driver list */}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
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
});