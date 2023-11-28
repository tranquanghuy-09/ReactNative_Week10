import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const API_URL = 'https://6549dc73e182221f8d520173.mockapi.io/api/v1/takenote';

const UpdateNote = ({ route, navigation }) => {
  const [data, setData] = useState(route.params.data);
  const { id } = route.params;

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
          <TouchableOpacity onPress={() => {
            updateNote();
          }}>
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
  }, [navigation, data]);

  const updateNote = async () => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const updatedData = await response.json();
      setData(updatedData);
      navigation.navigate('NoteList');
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ backgroundColor: 'rgba(255, 253, 250, 1)', borderWidth: 1, borderRadius: 10, marginTop: 8, height: '100%', fontSize: 18, paddingHorizontal: 16, paddingVertical: 19 }}
        value={data.title}
        multiline={true}
        onChangeText={(text) => setData({ ...data, title: text })}
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
