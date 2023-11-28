import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../rtkAPI/slice';

const UpdateNote = ({ route, navigation }) => {
  const [data, setData] = useState(route.params.data.todojob);
  const { id } = route.params.data;
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{ marginRight: 20 }}>
          <TouchableOpacity
            onPress={() => {
              dispatch(updateTodo({ id, updatedTodo: { todojob: data } }));
              navigation.navigate('NoteList');
            }}
          >
            <Text style={{ fontSize: 22, color: 'blue' }}>Save</Text>
          </TouchableOpacity>
        </View>
      ),
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#403B36',
      },
      headerTitleAlign: 'center',
      title: 'Update Note',
    });
  }, [navigation, data, id, dispatch]);

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          backgroundColor: 'rgba(255, 253, 250, 1)',
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 8,
          height: '100%',
          fontSize: 18,
          paddingHorizontal: 16,
          paddingVertical: 19,
        }}
        value={data}
        multiline={true}
        onChangeText={(text) => setData(text)}
      />
    </View>
  );
};

export default UpdateNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
