import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'; // Import Provider
import store from '../rtk/store'; // Import store

import NoteList from './NoteList';
import UpdateNote from './UpdateNote';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
        <Stack.Navigator initialRouteName='NoteList'>
          <Stack.Screen name="NoteList" component={NoteList} />
          <Stack.Screen name="UpdateNote" component={UpdateNote} />
        </Stack.Navigator>
    </Provider>
  );
}
