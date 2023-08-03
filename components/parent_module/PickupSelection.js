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
    //set child data
    const [thisChildData, setThisData] = useState(null);

    //set button data for self or bus pickup
    const [buttonselected, setButton] = useState(null);

    //this is needed to set the state of a select list
    const [selected, setSelected] = React.useState(null);
    const [selected2, setSelected2] = React.useState(null);
    const [selected3, setSelected3] = React.useState(null);
    const thisTime = selected;
    const thisTime2 = selected2;
    const thisGate = selected3;
    console.log("this self time", thisTime);
    console.log("this bus time", thisTime2);
    console.log("this gate", thisGate);
    const subscriptionCheck = parentSub === 'normal';

    //timing for self pickup 
    const selfTiming = [
      {key:'1', value:'Select a time slot', disabled: true},
      {key:'2', value:'1:30pm'},
      {key:'3', value:'2:00pm'},
      {key:'4', value:'2:30pm'},
      {key:'5', value:'3:00pm'},
      {key:'6', value:'3:30pm'},
      {key:'7', value:'4:00pm'},
      {key:'8', value:'4:30pm'},
      {key:'9', value:'5:00pm'},
      {key:'10', value:'5:30pm'},
    ]
    //timing for bus pickup
    const busTiming = [
      {key:'1', value:'2:30pm'},
      {key:'2', value:'5:30pm'},
    ]

    const defaultData1 = [
      {key: "1", value: "Please select a pickup type first", disabled: true}
      
    ]

    const defaultData2 = [
      {key: "1", value: "Please select a timeslot first", disabled: true}
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
      {key:'1', value:'west gate'},
      {key:'2', value:'north gate'},
      {key:'3', value:'south gate'},
      {key:'4', value:'main gate'},
      {key:'5', value:'central'}
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
    
    const confirmButton = () => {
      if (buttonselected === 'self') {
        if( !selected || !selected3) {
          alert("Please select both timeslot and gate");
        } else {
          alert("ok pass");
          //add in logic to submit backend later
        }
      } else if (buttonselected === 'bus') {
        if (!selected2) {
          alert("Please select a timeslot");
        } else {
          alert("ok pass");
          //add in backend to submit backend later
        }
      } else {
        alert("Please select a pickup method");
      }
    };
    
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.childHeader}>Pickup Selection for {thisChildData.firstName} {thisChildData.lastName}</Text>
          </View>
          
          {/* pickup method selection - bus / self etc*/}
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Pickup selection methods</Text>
            <Text style={styles.subheader}>Please select one of the following methods for child pickup</Text>
            
            {/* Pickup method */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={[styles.pickupBtn, styles.leftButton, buttonselected === 'self' && styles.buttonSelect]}
                onPress={() => {
                  if (buttonselected !== 'self') {
                    setButton('self');
                    setSelected2(null);
                    //setSelected3(null);
                    //setSelected(null);
                  }  
                }}
              >
                <Text style={styles.pickupText}>Self Pickup</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.pickupBtn, styles.rightButton, buttonselected === 'bus' && styles.buttonSelect, subscriptionCheck && styles.disabledButton]}
                disabled={subscriptionCheck}
                onPress={() => {
                  if (buttonselected !== 'bus') {
                    setButton('bus');
                    setSelected(null);
                    setSelected3(null);
                  }
                }}
              >
                <Text style={styles.pickupText}>Bus Pickup</Text>
              </TouchableOpacity>
            </View>
          </View>
    
          {/* pickup timeslot selection */}
          <View style={styles.headerContainer}> 
            <Text style={styles.header}>Pickup time-slot selection</Text>
            <Text style={styles.subheader}>
              {buttonselected ? "Please choose a timeslot below" : "Please select a pickup type first"}
            </Text>
          
            {/* drop down for timing selection */}
            {buttonselected === "self" && (
              <View style={styles.dropdownContainer}>
                <SelectList
                  setSelected={setSelected}
                  data={selfTiming}
                  save="value"
                />
              </View>
            )}
    
            {buttonselected === 'bus' && (
              <View style={styles.dropdownContainer}>
                <SelectList
                  setSelected={setSelected2}
                  data={busTiming}
                  save="value"
                />
              </View>
            )}
    
            {buttonselected === null && (
              <View style={styles.dropdownContainer}>
                <SelectList
                  data={defaultData1}
                  save="value"
                />
              </View>
            )}
          </View>
    
          {/* pickup gate selection */}
          {buttonselected === 'self' && (
            <View style={styles.headerContainer}> 
              <Text style={styles.header}>Pickup gate selection</Text>
              <Text style={styles.subheader}>Please choose a gate below</Text>
            
              {/* drop down for gate selection */}
              <View style={styles.dropdownContainer}>
                <SelectList 
                  setSelected={setSelected3}
                  data={thisTime === null ? defaultData2 : gatedata} 
                  save="value"
                />
              </View>
            </View>
          )}
    
          {/* confirm button  */}
          <View style={styles.confirmContainer}>
            <TouchableOpacity
              style={styles.confirmBtn}
              onPress={confirmButton}
            >
              <Text style={styles.btnText}>Confirm</Text>
            </TouchableOpacity> 
          </View>
    
        </ScrollView>
      </View>
    );
};    

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