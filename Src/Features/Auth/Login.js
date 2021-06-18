import React,{useState} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import {ms} from "react-native-size-matters"
import ButtonAuth from "../../Component/ButtonAuth"
export default function Login(props) {
  const { navigation } = props;
  const [visibility, setVisibility] = useState(true);
  const [iconName, setIconName] = useState("eye-with-line");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const setPasswordVisibility = () => {
    setVisibility(!visibility);
    setIconName(iconName === "eye" ? "eye-with-line" : "eye");
  };
  const validateEmail = (text) => {
    setUserName(text);
  };

  const validatePassword = (text) => {
    setPassword(text);
  };
  const loginSubmit = () => {
    if(userName==='admin' && password==='password123'){
      navigation.navigate("BottomNav");
    }
  }
  return (
    <View style={styles.container}>

      <Text style={styles.text1}>CRYPTO CURRENCY</Text>
      <View style={styles.bodyInput}>
      <Input
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        onChangeText={text => validateEmail(text)}
        inputContainerStyle={{
          width: ms(330),
          height: ms(50),
          borderStyle: 'solid',
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 10,
          paddingLeft: ms(15),
        }}
        placeholder="Username"
      />
      <Input
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        onChangeText={text => validatePassword(text)}
        inputContainerStyle={{
          width: ms(330),
          height: ms(50),
          borderStyle: 'solid',
          borderColor: 'black',
          borderWidth: 1,
          paddingLeft: ms(15),
          borderRadius: 10,
        }}
        placeholder="Password"
        secureTextEntry={visibility}
        rightIcon={
          <TouchableOpacity
            onPress={setPasswordVisibility}
            style={{paddingRight: ms(10)}}>
            <Entypo name={iconName} size={ms(20)} />
          </TouchableOpacity>
        }
      />
      </View>
      <ButtonAuth buttonName="Login" onPress={loginSubmit}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:"100%",
    alignItems:'center',
    paddingTop:ms(220),
    backgroundColor:'white'
  },
  text1:{
    fontSize:ms(24),
    alignItems:'center',
    color:"gold",
    fontWeight:'700'
  },
  bodyInput:{
    marginTop:ms(10)
  }

});
