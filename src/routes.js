import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Favorites from './pages/Favorites';
import Item from './pages/Item';



function HomeTab() {
  return (
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={
            ({route}) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                  case 'Home':
                    iconName = 'ios-home';
                    break;
                  case 'Perfil':
                    iconName = 'ios-person';
                    break;
                  case 'Favorites':
                    iconName = 'ios-heart';
                  default:
                    break;
                }
           
          
    

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#95B2FC',
              inactiveTintColor: 'gray',
            }}
          >

        <Tab.Screen name="Perfil" component={Perfil}/>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Favorites" component={Favorites}/>

      </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeTab}/>
        <Stack.Screen name="Item" component={Item}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}