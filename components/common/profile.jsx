import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import {Avatar, Title, Caption, Text, TouchableRipple, Card} from 'react-native-paper'
import Logo from './avatars/child.jpg'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        {/* Top Profile Card */}
        <Card style={styles.cardDisplay}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image 
                source={Logo}
                size={80}
                />
                <View style={{marginLeft: 20, marginTop: 10}}>
                    <Title style={styles.title}>LEOX GYASI</Title>
                    <Caption style={styles.caption}>Driver</Caption>
                </View>
            </View>
        </Card>

        {/* Profile information */}
        <View style={styles.information}>
            <Text style={{color: '#56844B', fontSize: 18, fontWeight: 'bold'}}>
                Profile Information
            </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

{/* styling for profile */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  cardDisplay: {
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 130,
    backgroundColor: '#56844B',
    paddingTop: 10,
  },
  information :{
    marginTop: 25
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    marginTop: 35
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
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
  }
});
