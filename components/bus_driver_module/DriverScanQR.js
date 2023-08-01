//import libaries
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function DriverScanQR() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");

  const askForCameraPermission = () => {
    (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status == 'granted')
    })()
  }

  //Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // what happens when we scan barcode
  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    alert('Bar Code with type' + type + 'and data ' + data + ' has been scanned');

  }

  //Check permission and return the screens
  if (hasPermission === null) {
    return (
        <View style={styles.container}>
            <Text>Requesting for camera permission</Text>
        </View>
    )
  }

  if (hasPermission === false) {
    return (
        <View style={styles.container}>
            <Text style={{margin: 10}}>Requesting for camera permission</Text>
            <Button title={'Allow Camera'} onPress={() => askForCameraPermission()}/>
        </View>
    )
  }

  // Return the View
  return (
    <View style={styles.container}>
        <View style={styles.barcodebox}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style = {{ height: 400, width: 400 }} />
        </View>
        {/*<Text style={styles.maintext}>{text}</Text>*/}

        {scanned && <Button title='Scan again?' onPress={() => setScanned(false)} color='red'/>}
    </View>
  )
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    barcodebox:{
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'red',
    },
    maintext: {
        fontSize: 16,
        margin: 20,
    },
});
