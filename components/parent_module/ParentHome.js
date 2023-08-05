// import libaries
import React, { useEffect, useState, useLayoutEffect } from "react";
import {View,Text,StyleSheet,TextInput,FlatList,TouchableOpacity,ScrollView,} from "react-native";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
import { userSchoolID } from "../Login";
import { usernameValue } from '../Login';

const Item = ({ message }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{message}</Text>
  </View>
);

const ParentHome = ({ navigation }) => {
  // pickup dummy data
  //update this to display dynamic data after gui update
  const pickupDetails = {
    time: "1:15pm",
    mode: "Self pickup",
    gate: "West gate",
    status: "picked up",
  };
  const [time, setTime] = useState(pickupDetails.time);
  const [mode, setMode] = useState(pickupDetails.mode);
  const [gate, setGate] = useState(pickupDetails.gate);
  const [status, setStatus] = useState(pickupDetails.status);

  //set and display annoucements
  const [announcements, setAnnouncements] = useState([]);
  const thisSchool = userSchoolID;
  const thisParent = usernameValue;
  const iSFocused = useIsFocused();

  //date setting for current date
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const todayDate = year + "-" + month + "-" + day;

  //self pickup data
  const[thisSelfData, setSelfPickup] = useState([]);
  //bus pickup data
  const[thisBusData, setBusPickup] = useState([]);
  // console.log("This self data:", thisSelfData);
  // console.log("This bus data:", thisBusData);

  // grab and fetch all the needed data for display
  const fetchData = () => {
    axios
      .get( //grabbing announcement data
        `https://h4uz91dxm6.execute-api.ap-southeast-1.amazonaws.com/dev/api/parent/announcements/3/${thisSchool}`
      )
      .then((response) => {
        const receivedAnn = response.data;
        setAnnouncements(receivedAnn);
      })
      .catch((error) => {
        console.log("Error fetching annoucements", error);
      });

    axios //grabbing self pickup data
      .get(`https://h4uz91dxm6.execute-api.ap-southeast-1.amazonaws.com/dev/api/get/selfpickup`, {
        params: {
          parent_ID: thisParent,
          datetime: todayDate,
        },
      })
      .then((response) => {
        const recSelfPickUp = response.data;
        setSelfPickup(recSelfPickUp);
      })
      .catch((error) => {
        console.log("Error fetching self pickup data", error);
      });
    
    axios //grabbing bus pickup data
      .get(`https://h4uz91dxm6.execute-api.ap-southeast-1.amazonaws.com/dev/api/get/buspickup` , {
        params: {
          parent_ID: thisParent,
          datetime: todayDate,
        },
      })
      .then((response) => {
        const recBusPickUp = response.data;
        setBusPickup(recBusPickUp);
      })
      .catch((error) => {
        console.log("Error fetching bus pickup data", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useLayoutEffect(() => {
    if (iSFocused)  { 
      fetchData();
    }
  }, [iSFocused]);
  
  if (!announcements && !thisSelfData && !thisBusData) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // display
  //update displaying to display dynamic data after GUI
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        {/* header */}
        <Text style={styles.header}>News & Notices</Text>
        <TouchableOpacity
          key="View More"
          onPress={() => navigation.navigate("ParentAnnouncementPage")}
        >
          <Text style={styles.btnText}>View More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList
          data={announcements}
          renderItem={({ item }) => <Item message={item.message} />}
          keyExtractor={(item) => item.ann_ID.toString()}
        />
      </View>

      {/* pickup details */}
      <Text style={styles.header}>Pickup details {'\t\t\t\t'}{todayDate}</Text>

      {/* pickup : time */}
      <View style={styles.row}>
        <Text style={styles.label}>Time</Text>
        <TextInput
          style={styles.input}
          value={thisSelfData.length > 0 ? thisSelfData[0].timeslot : ""}
          //value={time}
          editable={false}
        />
      </View>

      {/* pickup : mode */}
      <View style={styles.row}>
        <Text style={styles.label}>Mode</Text>
        <TextInput
          style={styles.input}
          value={mode}
          editable={false}
        />
      </View>

      {/* pickup : gate */}
      <View style={styles.row}>
        <Text style={styles.label}>Gate</Text>
        <TextInput
          style={styles.input}
          value={gate}
          editable={false}
        />
      </View>

      {/* pickup : status */}
      <View style={styles.row}>
        <Text style={styles.label}>Status</Text>
        {/* text colour changes based on pick up status  */}
        <TextInput
          style={
            pickupDetails.status == "picked up"
              ? styles.inputGreen
              : styles.inputRed
          }
          value={status}
          editable={false}
        />
      </View>
    </View>
  );
};   
export default ParentHome;

//styling
const styles = StyleSheet.create({
    container: {
        flex: 1, 
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
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 10,
        paddingVertical: 5,
        paddingTop: 0,
        justifyContent: 'space-between'
    },
    label: {
        color: '#858585',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 10
    },
    input: {
        padding: 15,
        backgroundColor: '#E6E6E6',
        borderRadius: 8,
        height: 35,
        width: 220,
        marginVertical: 5,
        marginHorizontal: 50,
        color: '#616161',
        fontSize: 12,
        fontWeight: 'bold',
    },
    inputRed: {
        padding: 15,
        backgroundColor: '#E6E6E6',
        borderRadius: 8,
        height: 35,
        width: 220,
        marginVertical: 5,
        marginHorizontal: 50,
        color: '#FF0000',
        fontSize: 12,
        fontWeight: 'bold',
    },
    inputGreen: {
        padding: 15,
        backgroundColor: '#E6E6E6',
        borderRadius: 8,
        height: 35,
        width: 220,
        marginVertical: 5,
        marginHorizontal: 50,
        color: '#56844B',
        fontSize: 12,
        fontWeight: 'bold',
    },
    btnText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#56844B',
        marginTop: 35,
        marginLeft: 150 
    }
});