import React from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Card} from 'react-native-paper'

// announcements dummy data
const announcements = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'North gate will be under renovation from 3-5 June 2023, all children from North date will be send to East gate',
        date: '1 June 2023'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: "Early dismissal on 10 Oct 2023, Children's Day. Students will be released at 12:10pm",
        date: '31 March 2023'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Time slots for child pick up after remedial classes has been updated',
        date: '31 March 2023'
    },
    {
        id: '54954b0f-3da1-471f-bd96-145571e29d72',
        title: 'Chinese New Year celebrations will be held on 10th February 2023, dismissal of children will be from 11:35am onwards',
        date: '6 February 2023'
    },
]

const Announcements = () => {

    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.upperRow}>
                    <Text style={styles.header}>Announcement History</Text> 
                </View>

                {/* announcement list */}
                <View style={styles.announcements}>
                    {announcements.map((announcements) => {
                        return (
                            <View key={announcements.id}>
                                <Card style={styles.card}>
                                    <Text style={styles.text}> {announcements.title} </Text>
                                    <Text style={styles.text} > Date: {announcements.date} </Text>
                                </Card>
                            </View>
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    )
}
   

export default Announcements;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    announcements: {
        marginHorizontal: 20
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
    card: {
        backgroundColor: 'lightgrey',
        marginVertical: 10,
        marginHorizontal: 10
    },
    text: {
        color: 'grey',
        marginHorizontal: 10,
        marginVertical: 10,
        fontSize: 14,
        fontWeight: 'bold'
    },
});