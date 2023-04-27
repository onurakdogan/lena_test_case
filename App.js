import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UsersList from './screens/user/UsersList';
import UserDetail from './screens/user/UserDetail';
import { APIContextProvider } from './contexts/apiContext';

const Stack = createNativeStackNavigator();

export default App = () => {
  
  return (
    <APIContextProvider>
      <NavigationContainer>
        <Stack.Navigator
            lazy={true}
            optimizationsEnabled={true}
            screenOptions={{
              headerMode: 'screen',
              headerTintColor: '#fff',
              headerTitleAlign:"center",
              headerStyle: { backgroundColor: '#5e9cf9', },
            }}
        >
          <Stack.Screen name="UsersList" component={UsersList} options={{title: 'User List'}} />
          <Stack.Screen name="UserDetail" component={UserDetail} options={{title: 'User Detail'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </APIContextProvider>
  );
}