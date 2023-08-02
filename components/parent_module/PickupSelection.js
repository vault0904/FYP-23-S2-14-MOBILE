//import libaries
import { StyleSheet, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import {Avatar, Title, Caption, Text, Card} from 'react-native-paper'
import React, { useState, useEffect, useLayoutEffect} from "react";
import axios from 'axios';
import { useIsFocused } from "@react-navigation/native";
import { Button } from 'react-native'
import {useRoute} from "@react-navigation/native";
import { SelectList } from 'react-native-dropdown-select-list'
import { parentSub } from '../Login';

const PickupSelection = () => {
    //grab the childID based on which GUI selected
    const route = useRoute();
    const {thisChild} = route.params;
    const iSFocused = useIsFocused();
    const[thisChildData, setThisData] = useState(null);
    const[buttonselected, setButton] = useState(null);
    //console.log("Button clicked", buttonselected);
    const subscriptionCheck = parentSub === 'normal';
    console.log("subscriptionCheck" , subscriptionCheck);

    const data = [
        // disabled param : to show the timeslot is fully booked
        {key:'1', value:'1:30pm'},
        {key:'2', value:'2:00pm'},
        {key:'3', value:'2:30pm'},
        {key:'4', value:'3:00pm'},
        {key:'5', value:'3:30pm'},
        {key:'6', value:'4:00pm'},
        {key:'7', value:'4:30pm'},
        {key:'8', value:'5:00pm'},
        {key:'9', value:'5:30pm'},
    ]
    //create new function to use school_ID and grab all the gates in that school
    // display gate number + capacity (reminding)
    //reminding = grab gate capcity
    //           then grab total jobs for self pickup = that gate
    //            gate capacity - that 

    //select time slot first
    //grab time slot check database, find capacity = this timeslot
    //then do the above
    const gatedata = [
      // disabled param : to show the timeslot is fully booked
      {key:'1', value:'west gate'},
      {key:'2', value:'north gate'},
      {key:'3', value:'south gate'},
      {key:'4', value:'main gate'},
    ]

    //fetch child data based on childID that is received from GUI
    const fetchData = () => {
      //axios to get child data
      console.log("current child id befeore grab", thisChild)
      axios
        .get(`https://h4uz91dxm6.execute-api.ap-southeast-1.amazonaws.com/dev/api/pickupchild/${thisChild}`)
        .then((response) => {
          const recData = response.data;
          setThisData(recData);
        })
        .catch((error) => {
          console.log('Error fetching child data:', error);
        });
      };

      useEffect(() => {
        console.log("receive data1", thisChildData);
      }, [thisChildData]);

      useEffect(() => {
        fetchData();
      }, []);
    
      useLayoutEffect(() => {
        if (iSFocused)  { 
          fetchData();
        }
      }, [iSFocused]);
      
      if (!thisChildData) {
        return (
          <View style={styles.loadingContainer}>
            <Text>Loading...</Text>
          </View>
        );
      }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.childHeader}>Pickup Selection for {thisChildData.firstName} {thisChildData.lastName}</Text>
        </View>

        {/* pickup date selection */}
         {/*<View style={styles.headerContainer}>
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
          /> 
        </View> */}
        
        {/* pickup method selection - bus / self etc*/}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Pickup selection methods</Text>
          <Text style={styles.subheader}>Please select one of the following methods for child pickup</Text>
          
          {/* Pickup method */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
            style={[styles.pickupBtn, styles.leftButton
            ,buttonselected === 'self' && styles.buttonSelect
            ]}
            onPress= {() => {
              setButton('self');
              //console.log("Button clicked", buttonselected);
            }}>
              <Text style={styles.pickupText}>Self Pickup</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
            style={[styles.pickupBtn, styles.rightButton, 
            buttonselected === 'bus' && styles.buttonSelect,
            subscriptionCheck && styles.disabledButton]}
            disabled = {subscriptionCheck}
            onPress = {() => {
                setButton('bus');
            }
            }>
              <Text style={styles.pickupText}>Bus Pickup</Text>
            </TouchableOpacity>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
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
    flex: 1,
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
  leftButton: {
    marginRight: 5,
  },
  rightButton: {
    marginLeft: 5,
  },
  buttonSelect: {
    backgroundColor: '#535353',
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
  },
  disabledButton : {
    backgroundColor: '#CCCCCC',
  },
});