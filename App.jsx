
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
    import { NavigationContainer } from '@react-navigation/native';
    // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    // import { Text, View } from 'react-native';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  // console.log(LoginScreen)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

