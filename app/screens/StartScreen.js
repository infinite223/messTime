import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Pressable, TextInput, SafeAreaView  } from 'react-native';
import { Input} from '@rneui/base';
import { FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons'; 
import React, { useLayoutEffect } from 'react';


const StartScreen = ({ navigation }) => {
  useLayoutEffect(()=>{
    navigation.setOptions({
      title: false,
    })
  },[navigation])

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerConteiner}>        
          <FontAwesome5 name="people-arrows" size={50} color="black" />
          <FontAwesome name="clock-o" size={24} color="black" style={styles.clockIcon} />
          <Text style={styles.header}>messTime </Text>     
        </View>
      </View>
      <Text style={{color:"black", letterSpacing:2, margin:10}}>Login to your account</Text>
      <TextInput style={styles.input} type="email" placeholder='Type your e-mail' placeholderTextColor="#aaa" textAlign={'center'} />
      <TextInput style={styles.input} type="password" placeholder='Password' placeholderTextColor="#aaa" textAlign={'center'} />
      <TouchableOpacity style={styles.button.login}>    
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity> 
      <Text style={{margin:10, letterSpacing:1, fontSize:10}}>OR, If you don't have account</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Register')} style={styles.button.register}>
          <Text style={styles.text}>Create account</Text>
          {/* <AntDesign style={{marginLeft:5}} name="right" size={20} color="black" /> */}
        </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default StartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerConteiner: {
    alignItems:"center",
    justifyContent:"center"
  },
  clockIcon: {
    position:"absolute",
    top:-13,
  },
  header: {
    fontSize:40,
    letterSpacing:3,
    color:"black",
    fontWeight:"bold",
    marginTop:6
  },
  icon: {
    margin: 30,
  },
  button: {
    login: {
      borderColor:"black",
      borderWidth:1,
      borderRadius:20,

      paddingHorizontal:20,
      paddingVertical:5,
      marginTop: 15, 
    },
    register: {     
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems: 'center',
      justifyContent: 'center',

      borderColor:"black",
      borderWidth:1,
      borderRadius:20,

      paddingHorizontal:20,
      paddingVertical:5,
    }
  },
  text:{
    color:"black",
    textAlign:'center',
    fontSize:18,
    fontWeight:"700",
    letterSpacing:2,
  },  
  input: {
    borderBottomWidth:1,
    borderColor:"#999da3",
    fontSize:20,
    margin:3,
    paddingHorizontal:20,
    paddingVertical:2
  }
  
});
