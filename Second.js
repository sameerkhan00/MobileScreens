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

const Second = () => {
  return (
    <>
  <View style={{width:'100%', height:'100%'}}>
    <View style={{width:"100%", height:"8%", }}>
      <Text style={{textAlign:'center', marginTop:18}}>LOGO</Text>
    </View>
    <View style={{width:'100%', height:'8%', borderBottomWidth:10 }}>
      <Text style={{textAlign:'center', fontSize:15}}>This help us connect you to your ideal partner</Text>
    </View>
    <View style={{width:'100%', height:'15%', borderBottomWidth:10}}>
      <Text style={{textAlign:'center', marginTop:40}}>Logo</Text>
    </View>
    <View style={{width:'100%', height:'50%', borderBottomWidth:10}}>
      <Text style={{textAlign:"center",marginTop:55, fontWeight:'bold', fontSize:20}}>
      We are looking to get married?
      </Text>
      <TouchableOpacity >
        <Text style={{textAlign:'center', color:'#d32121', margin:10}}>As soon as possible</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{textAlign:'center', color:'#d32121',margin:10}}>1-2 years</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{textAlign:'center', color:'#d32121',margin:10}}>3-4 years</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{textAlign:'center', color:'#d32121',margin:10}}>4+ years</Text>
      </TouchableOpacity>
    </View>


  </View>
</>
  )
};

const styles = StyleSheet.create({
  
});

export default Second;
