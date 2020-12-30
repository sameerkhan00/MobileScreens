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

const Fourth= () => {
  return (
    <>
  <View style={{width:'100%', height:'100%'}}>
    <View style={{width:"100%", height:"8%", }}>
      <Text style={{textAlign:'center', marginTop:18}}>LOGO</Text>
    </View>
    <View style={{width:'100%', height:'15%', borderBottomWidth:10 }}>
      <Text style={{textAlign:'center', fontSize:15, lineHeight:25}}>The more information you provide allow us to match you {('\n')} with  more relevant singles</Text>
    </View>
    <View style={{width:'100%', height:'15%', borderBottomWidth:10}}>
      <Text style={{textAlign:'center', marginTop:40}}>Logo</Text>
    </View>
    <View style={{width:'100%', height:'50%', borderBottomWidth:10}}>
      <Text style={{textAlign:"center",marginTop:25, fontWeight:'bold', fontSize:20}}>
       Your martial status
      </Text>
      <TouchableOpacity >
        <Text style={{textAlign:'center', color:'#d32121', margin:10}}>Never Married</Text>
      </TouchableOpacity>





      <TouchableOpacity >
        <Text style={{textAlign:'center', color:'#d32121', margin:10}}>Divorced</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{textAlign:'center', color:'#d32121',margin:10}}>Annulled</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{textAlign:'center', color:'#d32121',margin:10}}>Widow</Text>
      </TouchableOpacity>
    </View>


  </View>
</>
  )
};

const styles = StyleSheet.create({
  
});

export default Fourth;
