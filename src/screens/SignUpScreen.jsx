import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import React from 'react';
import { FormArea, MyButtonText,ButtonArea,  InnerContainer, MyContainer,  PageLogo, PageTitle, SubTitle, MyTextBox, Colors, MyButton } from '../../styles';
import { Formik } from 'formik';
import axios from 'axios';


const SignUpScreen = ({navigation}) => {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {

    try {
      const response = await axios.post('http://localhost:5000/register', {
          username,
          password
      });


      console.log('Sign Up Successful', 'Welcome!');
      navigation.navigate('Home'); 
  } catch (error) {
      Alert.alert('Registration Failed', error.response?.data.message || 'Incorrect username or password');
  }
  };


  const handleLogin = async () => {

    try {
      const response = await axios.post('http://localhost:5000/login', {
          username,
          password
      });


      console.log('Login In Successful', 'Welcome!');
      navigation.navigate('Home');
  } catch (error) {
      Alert.alert('Registration Failed', error.response?.data.message || 'Incorrect username or password');
  }
  };


  return (
    <MyContainer>
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/180.png')}/>
        <PageTitle>Push Up</PageTitle>
        <SubTitle>Create Account / Login</SubTitle>
        <FormArea>

        <MyTextBox
          placeholder="Username" 
          placeholderTextColor = "#ffffff"
          value={username}
          onChangeText={setUsername}

        />

          <MyTextBox
          placeholder="Password" 
          placeholderTextColor = "#ffffff"
          value={password}
          onChangeText={setPassword}
          secureTextEntry

          />
          <ButtonArea>
            <MyButton
              onPress={handleSignUp}
            >
              <MyButtonText>Sign Up</MyButtonText>
            </MyButton>
            <MyButton onPress={handleLogin}>
              <MyButtonText>Login</MyButtonText>
            </MyButton>
          </ButtonArea>
          </FormArea>
        
      </InnerContainer>
    </MyContainer>
  );
};


export default SignUpScreen;

