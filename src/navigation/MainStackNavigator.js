import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContainer from '../containers/HomeContainer';
import PersonContainer from '../containers/PersonContainer';

const Stack = createStackNavigator();


const MainStackNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeContainer} />
          <Stack.Screen name="Person" component={PersonContainer} options={({ route }) => ({ title: route.params.person })} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default MainStackNavigator;
