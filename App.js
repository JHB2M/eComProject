import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Onboarding from './src/components/onboarding/Onboarding';
import SignIn from './src/components/signIn/SignIn'
import Settings from './src/components/settings/Settings'
import Search from './src/components/search/Search';
import Menu from './src/components/menu/Menu'
import Message from './src/components/message/Message'
import Element from './src/components/element/Element'
const Tab =createBottomTabNavigator()

// BU DOSYA ROUTER.JS DOSYASIDIR

const Stack = createNativeStackNavigator()





function Main(){
  return(
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name ="MenuScreen" component={Menu} />
      <Tab.Screen name ="SearchScreen" component ={Search}/>
      <Tab.Screen name ="SettingsScreen" component ={Settings}/>
      
      <Tab.Screen name = "MessageScreen" component ={Message}/>
      <Tab.Screen name = "ElementScreen" component ={Element}/>
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      
        <Stack.Screen name = "LoginScreen" component={Onboarding}/>
        <Stack.Screen name = "SignInScreen"component={SignIn} />
        <Stack.Screen name = "MainScreen"component={Main} />
      </Stack.Navigator>


    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
