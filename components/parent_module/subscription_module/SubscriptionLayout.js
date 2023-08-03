//import libaries
import React  from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';
import BasicSubscriptionPage from './BasicSubscriptionPage'
import PremiumSubscriptionPage from './PremiumSubscriptionPage'

// return basic or premium layout
const SubscriptionLayout = () => {
    const subscription = "Premium"
    
    const Display = () => {
      if (subscription == "Basic"){
        return <BasicSubscriptionPage/>
      }
      else {
        return <PremiumSubscriptionPage/>
      }
    }
  return (
    <View>
      <Display/>
    </View>
  )
}
export default SubscriptionLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff'
  },
});
