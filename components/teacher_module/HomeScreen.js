import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

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

const Home = () => (
    <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.header}>Announcements</Text>
          <TouchableOpacity key='View More'>
            <Text style={styles.btnText}>View More</Text>
          </TouchableOpacity> 
        </View>
        <View style={styles.list}>
        <FlatList 
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
        </View>
        <Text style={styles.header}>Gate assignment</Text>
        <Text style={styles.gate}>WEST GATE</Text>
    </View>
);

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
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
        marginTop: 33,
        marginLeft: 160 
    }
});