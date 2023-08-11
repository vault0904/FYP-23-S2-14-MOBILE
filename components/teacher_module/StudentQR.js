import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const StudentQR = () => {
    const user = {
        name: 'Bell Zettifar'
    }

    //generate QR code
    const secretKey = "fypPickupAPP";
    //const qrData = thisChildData.child_ID + "|" +secretKey;
    
    const [name, setName] = useState(user.name);

    return (
        <View style={styles.container}>
            {/*Display selected child's name*/}
            <View>
              <Text style={styles.childHeader}>QR Code for {name}</Text>
            </View>
            {/*Display selected child's QR Code*/}
            <View style={styles.qrContainer}>
                <QRCode
                    value={secretKey}
                    color={'#56844B'}
                    backgroundColor={'white'}
                    size={160}
                    logoMargin={2}
                    logoSize={20}
                    logoBorderRadius={10}
                    logoBackgroundColor={'transparent'}
                />
            </View>
        </View>
    );
}

export default StudentQR;

{/* styling for driver list */}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    childHeader: {
        marginHorizontal: 25,
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20
      },
    qrContainer: {
        marginHorizontal: '30%',
        marginTop: 50
    }
});