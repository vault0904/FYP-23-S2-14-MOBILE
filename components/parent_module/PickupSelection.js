import { StyleSheet, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import {Avatar, Title, Caption, Text, Card} from 'react-native-paper'
import React, { useState, useEffect, useLayoutEffect} from "react";
import axios from 'axios';
import { useIsFocused } from "@react-navigation/native";
import { Button } from 'react-native'
import {useRoute} from "@react-navigation/native";
import { SelectList } from 'react-native-dropdown-select-list'


const PickupSelection = () => {
  const route = useRoute();
  const {thisChild} = route.params;
  console.log("this child", thisChild);
  const iSFocused = useIsFocused();
  const[thisChildData, setThisData] = useState(null);

 // const [selected, setSelected] = React.useState("");
  // const [date, setDate] = useState(new Date())
  // const [open, setOpen] = useState(false)

  const data = [
      // disabled param : to show the timeslot is fully booked
      {key:'1', value:'1:15pm', disabled:true},
      {key:'2', value:'1:25pm', disabled:true},
      {key:'3', value:'1:35pm'},
      {key:'4', value:'1:45pm'},
  ]
  const gatedata = [
    // disabled param : to show the timeslot is fully booked
    {key:'1', value:'west gate'},
    {key:'2', value:'north gate'},
    {key:'3', value:'south gate'},
    {key:'4', value:'main gate'},
]

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* header for specified child profile chosen */}
        
        {/* i'm not sure how to pass props from childselectionpage to this, 
        so that we can get the child's name based on profile chosen */}

        <View>
          <Text style={styles.childHeader}>Pickup Selection for rex</Text>
        </View>

        {/* pickup date selection */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Pickup date selection</Text>
          <Text style={styles.subheader}>Please select one of the following dates for child pickup</Text>
          
          {/* Pickup date */}
          {/* <Button title="Open" onPress={() => setOpen(true)} style={{backgroundColor: '#56844B', marginTop: '10px'}} /> */}
          {/* <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          /> */}
        </View>
        
        {/* pickup method selection - bus / self etc*/}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Pickup method selection</Text>
          <Text style={styles.subheader}>Please select one of the following methods for child pickup</Text>
          
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

        {/* pickup gate selection */}
        <View style={styles.headerContainer}> 
          <Text style={styles.header}>Pickup gate selection</Text>
          <Text style={styles.subheader}>If you selected "Self Pickup", please choose a gate below</Text>
        
          {/* drop down for gate selection */}
          <View style={styles.dropdownContainer}>
            <SelectList 
            setSelected={(val) => setSelected(val)} 
            data={gatedata} 
            save="value"
            />
          </View>
        </View>

        {/* pickup timeslot selection */}
        <View style={styles.headerContainer}> 
          <Text style={styles.header}>Pickup time-slot selection</Text>
          <Text style={styles.subheader}>If you selected "Self Pickup", please choose a timeslot below</Text>
        
          {/* drop down for timing selection */}
          <View style={styles.dropdownContainer}>
            <SelectList 
            //setSelected={(val) => setSelected(val)} 
            data={data} 
            save="value"
            />
          </View>
        </View>

        {/* confirm button  */}
        <View style={styles.confirmContainer}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('Login')}
            style={styles.confirmBtn}
          >
            <Text style={styles.btnText}>Confirm</Text>
          </TouchableOpacity> 
        </View>

      </ScrollView>
    </View>
  );
}

export default PickupSelection;

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  dropdownContainer: {
    marginTop: 15
  },
  childHeader: {
    marginHorizontal: 25,
    color: '#56844B',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
  },
  confirmContainer: {
    marginHorizontal: 30,
  },
  headerContainer: {
    marginTop: 20,
    marginHorizontal: 25
  },
  header: {
    fontWeight: 'bold',
    color: '#717171',
    fontSize: 18
  },
  subheader: {
    color: '#999999',
    fontSize: 13,
    marginTop: 5,
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
    marginBottom:30,
  },
  btnText:{
    padding: 15,
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  }

});