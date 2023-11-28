import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppUseAPI from './src/screens_useAPI/Navigator';
import AppUseRedux from './src/screens_useRedux/Navigator';
import AppUseReduxToolkit from './src/screens_useReduxToolkit/Navigator';
import AppUseReduxAPI from './src/screens_useReduxAPI/Navigator';

import MainScreen from './src/MainScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainScreen'>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{
          headerTitleAlign: 'center',
          headerShown: false,
        }}/>
        <Stack.Screen name="AppUseAPI" component={AppUseAPI} options={{headerShown: false}}/>
        <Stack.Screen name="AppUseRedux" component={AppUseRedux} options={{headerShown: false}}/>
        <Stack.Screen name="AppUseReduxToolkit" component={AppUseReduxToolkit} options={{headerShown: false}}/>
        <Stack.Screen name="AppUseReduxAPI" component={AppUseReduxAPI} options={{headerShown: false}}/>
      </Stack.Navigator>  
    </NavigationContainer>
  );
}