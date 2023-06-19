import { StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Button } from 'react-native';
import {Avatar, Title, Caption, Text, Card} from 'react-native-paper'

const PickupSelection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}> 
        <Text style={styles.header}>Pickup time-slot selection</Text>
        <Text style={styles.subheader}>Please select one of the following time-slots for child pickup</Text>
      
       {/* Pickup time slots -- need to do mapping */}
       <View style={styles.timeContainer}>
        <TouchableOpacity style={styles.timeBtn}>
          <Text style={styles.timeText}>1.15pm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeBtn}>
          <Text style={styles.timeText}>1.15pm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeBtn}>
          <Text style={styles.timeText}>1.15pm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeBtn}>
          <Text style={styles.timeText}>1.15pm</Text>
        </TouchableOpacity>
       </View>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Pickup method selection</Text>
        <Text style={styles.subheader}>Please select one of the following time-slots for child pickup</Text>
        {/* Pickup method */}
        <View style={styles.btnContainer}>
          <TouchableOpacity 
          style={styles.pickupBtn}>
            <Text style={styles.pickupText}>Self Pickup</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.pickupBtn}>
            <Text style={styles.pickupText}>Bus Pickup</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.confirmContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.confirmBtn}
        >
          <Text style={styles.btnText}>Confirm</Text>
        </TouchableOpacity> 
      </View>
    </View>
);

export default PickupSelection;

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  confirmContainer: {
    marginHorizontal: 30,
    marginTop: 20
  },
  headerContainer: {
    marginTop: 50,
    marginHorizontal: 25
  },
  header: {
    fontWeight: 'bold',
    color: '#717171',
    fontSize: 18
  },
  btnContainer: {
    marginTop: 10
  },
  subheader: {
    color: '#999999',
    fontSize: 13,
    marginTop: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10
  },
  timeBtn: {
    flexBasis: '30%',
    backgroundColor: '#56844B',
    marginTop: 15,
    borderRadius: 8,
    paddingLeft: 13,
    paddingVertical: 15,
    marginRight: 7,
  },
  timeText: {
    alignItems: 'center',
    color: '#FFFFFF',
    marginLeft: 15,
    fontWeight: 'bold'
  },
  pickupBtn: {
    backgroundColor: '#56844B',
    marginTop: 15,
    borderRadius: 8,
    paddingLeft: 15,
    paddingVertical: 15,
    width: '62%',
  },
  pickupText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  confirmBtn:{
    backgroundColor: '#56844B',
    marginVertical: 30,
    borderRadius:10,
    height:50,
    alignItems:'center',
    marginTop:140,
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