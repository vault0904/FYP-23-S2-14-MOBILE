//import libaries
import React  from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';
import {Text, Card} from 'react-native-paper'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

// subscription page
const PremiumSubscription = ({navigation}) => {
    const date = "01/01/24"
    const subscription = 'Premium'
    
  //display
  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}> Your plan </Text>
        </View>

        {/* current plan details */}
        <Card style={styles.cardDisplay}>
          <View style={styles.cardText}>
            <Text style={styles.text1}>Marsupium {subscription}</Text>
            <Text style={styles.price}>$30.99 /mth</Text>
            <Text style={styles.text2}>1 {subscription} Account</Text>
            <Text style={styles.text2}>Your plan will automatically renew on {date}</Text>
          </View>
        </Card>

        <Text style={styles.headerText} > Want to change your plan? </Text>
        <View>
            <Card style={styles.cardDisplay2}>
                    <View>
                        <Text style={styles.text3}> Marsupium Basic </Text>
                        <Text style={styles.price2}>$30.99 /mth</Text>
                        <Text style={styles.text4}>Don't worry, you can still pick up your child... on foot!</Text>

                        {/* basic plan benefits */}
                        <View style={{backgroundColor: '#5c3542'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name="check" size={24} style={{color: '#c4879d'}}/>
                                <Text style={{color: '#c4879d', fontWeight: 'bold', marginTop: 3, fontSize: 15}}> Pick up time slot selection </Text>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <Icon name="check" size={24} style={{color: '#c4879d'}}/>
                                <Text style={{color: '#c4879d', fontWeight: 'bold', marginTop: 3, fontSize: 15}}> Car pick up services </Text>
                            </View>
                        </View>
                    </View>
            </Card>
            {/* payment button */}
            <TouchableOpacity onPress={() => navigation.navigate('ParentProfile')} style={styles.paymentBtn}>
                <Text style={styles.btnText}>Cancel Premium</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

export default PremiumSubscription;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff'
  },
  headerText: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5c3542'
  },
  headerText2: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#56844B',
    marginBottom: 8
  },
  cardDisplay: {
    paddingBottom: 15,
    backgroundColor: '#56844B',
    paddingTop: 15,
  },
  cardDisplay2: {
    paddingBottom: 25,
    backgroundColor: '#5c3542',
    paddingTop: 25,
    paddingHorizontal: 15
  },
  cardText: {
    margin: 5,
    marginHorizontal: 15
  },
  text1: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  },
  price: {
    color: '#e8ffe3',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10
  },
  text2: {
    color: '#ffffff',
    marginTop: 5
  },
  text3: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 10
  },
  text4: {
    color: '#ffffff',
    marginBottom: 20,
    marginHorizontal: 5
  },
  text5: {
    color: '#56844B',
    marginBottom: 20,
    marginHorizontal: 5
  },
  price2: {
    color: '#c4879d',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  dropdownContainer: {
    marginBottom: 10
  },
  textLabel: {
    marginBottom: 5,
    fontWeight: '700'
  },
  paymentBtn:{
    backgroundColor: '#56844B',
    marginVertical: 14,
    borderRadius: 10,
    height: 50,
    alignItems:'center',
    marginTop: 10,
    marginBottom: 50,
  },
  btnText:{
    padding: 15,
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
