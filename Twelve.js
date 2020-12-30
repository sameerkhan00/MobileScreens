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

const Twelve = () => {
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
      <Text style={{textAlign:"center",marginTop:25, fontWeight:'bold', fontSize:20}}>
     What sect are you?
      </Text>
      <TouchableOpacity >
        <Text style={{textAlign:'center', color:'#d32121', margin:10}}>Sunni</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{textAlign:'center', color:'#d32121',margin:10}}>Shia</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{textAlign:'center', color:'#d32121',margin:10}}>Other</Text>
      </TouchableOpacity>
      
    </View>


  </View>
</>
  )
};

const styles = StyleSheet.create({
  
});

export default Twelve ;
