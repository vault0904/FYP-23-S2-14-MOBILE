import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Button } from 'react-native';
import {Avatar, Title, Caption, Text, Card} from 'react-native-paper'
import Logo from '../common/picture/default.jpg'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DriverProfile = () => {
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
                  <Title style={styles.title}>Leox Gyasi</Title>
                  <Caption style={styles.caption}>Driver</Caption>
              </View>
            </View>
        </Card>

        {/* Profile Information */}
        <View style={styles.information}>
            <Text style={styles.profileInfo}>
                Profile Information
            </Text>
        </View>

        <View>
          <View style={styles.profileContainer}>
            <Text style={styles.profileTag}>Username</Text>
            <TextInput 
              style={styles.profileText} 
              value = 'ctb_gyasi' 
              placeholderTextColor='#56844B'
              editable = {false}
            />
          </View>

          <View style={styles.profileContainer}>
            <Text style={styles.profileTag}>Email</Text>
            <TextInput 
              style={styles.profileText} 
              value = 'l_gyasi@ctb.com' 
              placeholderTextColor='#56844B'
              editable = {false}
            />
          </View>

          <View style={styles.profileContainer}>
            <Text style={styles.profileTag}>Driving license</Text>
            <TextInput 
              style={styles.profileText} 
              value = 'S1234567A' 
              placeholderTextColor='#56844B'
              editable = {false}
            />
          </View>

          <View style={styles.profileContainer}>
            <Text style={styles.profileTag}>Company</Text>
            <TextInput 
              style={styles.profileText} 
              value = 'Coolidge Trucks & Buses' 
              placeholderTextColor='#56844B'
              editable = {false}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DriverProfile;

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
  profileInfo: {
    color: '#56844B',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 2,
    justifyContent: 'flex-start',
  },
  editProfileBtn:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  information :{
    marginTop: 35,
    marginBottom: 10,
    flexDirection: 'row'
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
    fontSize: 15
  },
  profileText:{
    height:50,
    borderBottomWidth: 1,
    borderBottomColor: '#56844B',
    flex: 2.5,
    justifyContent: 'flex-end',
    color: '#56844B',
    marginTop: 5
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
  },
  logoutBtn:{
    backgroundColor: '#FFA500',
    marginVertical: 14,
    borderRadius:10,
    height:50,
    alignItems:'center',
    marginTop:110,
    marginBottom:50,
},
btnText:{
    padding: 15,
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
}
});