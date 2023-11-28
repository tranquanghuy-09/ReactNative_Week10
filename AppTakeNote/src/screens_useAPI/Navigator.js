import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NoteList from './NoteList';
import UpdateNote from './UpdateNote';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName='NoteList'>
        <Stack.Screen name="NoteList" component={NoteList} />
        <Stack.Screen name="UpdateNote" component={UpdateNote} />
      </Stack.Navigator>  
  );
}