import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens_useAPI/NoteList';
import UpdateNote from './src/screens_useAPI/UpdateNote';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UpdateNote" component={UpdateNote} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Ionicons, AntDesign } from '@expo/vector-icons';
// import React, { useState } from 'react';
// import { Provider } from "react-redux";
// import store from '/'

// import Home from './src/screens/Home'
// import TakeNote from './src/screens/TakeNote.js'

// const Stack = createStackNavigator()

// export default function App() {
//   const [editingMode, setEditingMode] = useState(false);
//   return (
//     <Provider store={store}>
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home'>
//         <Stack.Screen name="Home" component={TakeNote} options={{
//           headerStyle: {
//             backgroundColor: '#F8EEE2',
//           },
//           headerTitleStyle: {
//             fontWeight: 'bold',
//             fontSize: 24,
//             color: '#403B36',
//           },
//           headerLeft:()=>(
//             <View style={{marginLeft: 20}}>
//               <TouchableOpacity onPress={() => navigation.goBack()}>
//                 <AntDesign name="left" size={24} color="black" />
//               </TouchableOpacity>
//             </View>
//           ),
//           headerRight:()=>(
//             <View style={{marginRight: 20}}>
//               <Ionicons name="ellipsis-vertical" size={24} color="black" />
//             </View>
//           ),
//           headerTitleAlign: 'center',
//         }}/>
//         <Stack.Screen name="TakeNote" options={({ route }) => ({
//           headerStyle: {
//             backgroundColor: '#FFFFFF',
//           },
//           headerTitleStyle: {
//             fontWeight: 'bold',
//             fontSize: 24,
//             color: '#403B36',
//           },
//           // headerLeft: () => (
//           //   <View style={{ marginLeft: 20 }}>
//           //     <TouchableOpacity onPress={() => route.params?.goBack()}>
//           //       <AntDesign name="left" size={24} color="black" />
//           //     </TouchableOpacity>
//           //   </View>
//           // ),
//           headerRight: () => (
//             <View style={{ marginRight: 20 }}>
//               <TouchableOpacity onPress={() => setEditingMode(!editingMode)}>
//                 <Text style={{ fontSize: 22, color: 'blue' }}>
//                   {editingMode ? 'Done' : 'Edit'}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           ),
//           headerTitleAlign: 'center',
//           title: 'Note List',
//         })}>
//           {(props) => <TakeNote {...props} editingMode={editingMode} />}
//         </Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//     </Provider>
//   );
// }

