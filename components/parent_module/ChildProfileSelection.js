import { StyleSheet, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import {Avatar, Title, Caption, Text, Card} from 'react-native-paper'
import Logo from '../common/avatars/child.jpg'

// child data 
const child = [
    {
        id: 1,
        image: {Logo},
        name: "Bell Zettifar",
        level: "Primary 1"
    },
    {
        id: 2,
        image: {Logo},
        name: "Geralt Zettifar",
        level: "Primary 3"
    },
    {
        id: 3,
        image: {Logo},
        name: "Toto Zettifar",
        level: "Primary 4"
    }
]

const ChildProfileSelection = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>

        <View style={styles.headerContainer}>
            <Text style={styles.header}>Child Profile</Text>
            <Text style={styles.subheader}>Please select a profile you would like to view</Text>
        </View>
        
            <View>
                {child.map((child) => {
                    return(
                        <TouchableOpacity
                        onPress={() => navigation.navigate('ChildDetails')}
                        style={styles.logoutBtn}
                        key={child.id}
                        >
                            <Card style={styles.cardDisplay}>
                                <View style={{flexDirection: 'row', marginTop: 15}}>
                                <Avatar.Image 
                                    source={child.image}
                                    size={80}
                                />
                                <View style={{marginLeft: 20, marginTop: 10}}>
                                    <Title style={styles.title}>{child.name}</Title>
                                    <Caption style={styles.caption}>{child.level}</Caption>
                                </View>
                                </View>
                            </Card>
                    </TouchableOpacity>
                    )
                })}
            </View>
      </View>
    </SafeAreaView>
  );
}

export default ChildProfileSelection;

{/* styling for profile */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginBottom: 20
  },
  header: {
    fontWeight: 'bold',
    color: '#56844B',
    fontSize: 18
  },
  subheader: {
    color: '#999999',
    fontSize: 13,
    marginTop: 5,
  },
  cardDisplay: {
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 130,
    backgroundColor: '#56844B',
    paddingTop: 10,
    marginBottom: 20
  },
  profileInfo: {
    color: '#56844B',
    fontSize: 18,
    fontWeight: 'bold',
  },
  information :{
    marginTop: 35,
    marginBottom: 10,
  },
  profileContainer: {
    marginTop: 10,
    flexDirection: 'row'
  },
  profileTag:{
    color: '#707070',
    fontWeight: 'bold',
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 22,
    fontSize: 15,
    marginRight: 15
  },
  profileText:{
    height:50,
    borderBottomWidth: 1,
    borderBottomColor: '#56844B',
    flex: 2.5,
    justifyContent: 'flex-end',
    color: '#56844B',
    marginTop: 8,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    marginTop: 25
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textTransform: 'uppercase'
  },
  caption: {
    fontSize: 15,
    lineHeight: 14,
    fontWeight: '500',
    color: '#ffffff'
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  btnText:{
      padding: 15,
      color: '#FFFFFF',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold'
  }
});
