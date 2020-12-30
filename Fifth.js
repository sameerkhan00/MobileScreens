/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const Fifth = () => {
  return (
    <>
  <View style={{width:'100%', height:'100%'}}>
    <View style={{width:"100%", height:"8%", }}>
      <Text style={{textAlign:'center', marginTop:18}}>LOGO</Text>
    </View>
    <View style={{width:'100%', height:'10%', borderBottomWidth:10 }}>
      <Text style={{textAlign:'center', fontSize:13, lineHeight:18}}>Before we introduce your profile to single Muslims we need {('\n')} to know bit more about you </Text>
    </View>
    <View style={{width:'100%', height:'15%', borderBottomWidth:10}}>
      <Text style={{textAlign:'center', marginTop:40}}>Logo</Text>
    </View>
    <View style={{width:'100%', height:'50%', borderBottomWidth:10}}>
      <Text style={{textAlign:"center",marginTop:25, fontWeight:'bold', fontSize:20}}>
  How tall are you?
      </Text>
      <TouchableOpacity >
        <Text style={{textAlign:'center', color:'#d32121', margin:10}}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{textAlign:'center', color:'#d32121',margin:10}}>No</Text>
      </TouchableOpacity>
    </View>


  </View>
</>
  )
};

const styles = StyleSheet.create({
  
});

export default Fifth;
