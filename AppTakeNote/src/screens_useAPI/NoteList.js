import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput} from 'react-native'
import React, {useState, useEffect, } from 'react'
import { Ionicons, MaterialIcons} from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

const API_URL = 'https://6549dc73e182221f8d520173.mockapi.io/api/v1/takenote';

const Home = ({navigation}) => {
    const [notes, setNotes] = useState([]);
    const isFocused = useIsFocused();
    const [editingMode, setEditingMode] = useState(false);
    const [writeNote, setWriteNote] = useState('');

    const fetchNotes = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setNotes(data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    useEffect(() => {

        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#FFFFFF',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
                color: '#403B36',
            },
            headerRight: () => (
                <View style={{ marginRight: 20 }}>
                    <TouchableOpacity onPress={() => setEditingMode(!editingMode)}>
                        <Text style={{ fontSize: 22, color: 'blue' }}>
                        {editingMode ? 'Done' : 'Edit'}
                        </Text>
                    </TouchableOpacity>
                    </View>
                ),
            headerTitleAlign: 'center',
            title: 'Note List',
        });
    }, [editingMode]);

    useEffect(() => {
        fetchNotes();
    }, [isFocused]);

    const addNote = async () => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: writeNote, priority: 'low', type: 'short-term' }),
            });
            const data = await response.json();
            setNotes([...notes, data]);
            setWriteNote('');
            } catch (error) {
            console.error('Error adding note:', error);
        }
    };

    const deleteNote = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });
            setNotes(notes.filter((note) => note.id !== id));
            } catch (error) {
            console.error('Error deleting note:', error);
        }
    };

    return (
    <View style={styles.container}>
        <View style={{}}>
                <View style={{width: '100%', marginTop: 10, paddingBottom: 100}}>
                <FlatList
                    data={notes}
                    scrollEnabled={true}
                    renderItem={({ item, index }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginLeft: 15, paddingRight: 25, height: 60, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: 'silver' }}>
                            {editingMode && (
                                    <TouchableOpacity onPress={() => deleteNote(item.id)}>
                                        <Ionicons name="remove-circle" size={30} color="red" />
                                    </TouchableOpacity>
                                    )}
                            <TouchableOpacity style={{width: '100%', paddingRight: 5}} onPress={()=>{navigation.navigate("UpdateNote", { id: item.id, data: item})}}>
                                <View style={{ flexDirection: 'row', height: 40, borderWidth: 0, alignItems: 'center', justifyContent: 'space-between', width: '100%', borderWidth: 0}}>
                                    {/* <Text style={{ fontSize: 18, fontWeight: '500', color: 'red'}}>{index}  |</Text> */}
                                    <Text style={{ fontSize: 18, fontWeight: '500', marginLeft: 10 }}>{item.title}</Text>
                                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
                </View>
            </View>
            <View style={styles.style3}>
                <TouchableOpacity onPress={addNote}>
                    <Ionicons name="add-circle-outline" size={80} color="#D9614C" />
                </TouchableOpacity>
                
            </View>
            <View style={styles.style4}>
                    <View style={{flexDirection: 'row', borderWidth: 1, alignItems: 'center', width: '90%', height: 60, justifyContent: 'center', padding: 20
                        , borderColor: 'rgba(217, 217, 217, 1)', borderRadius: 17, marginVertical: 13,}}>
                        <TextInput style={{width: '100%', height: 40, borderRadius: 10, paddingLeft: 7, fontSize: 16}} placeholder='Nhập nội dung' onChangeText={(text) => setWriteNote(text)}/>
                    </View>
            </View>
    </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    style1:{
        flex: 1
    },
    style2:{
        flex: 9
    },
    style3:{
        position: 'fixed',
        alignItems: 'center',
        width: '100%',
        bottom: 110,
        justifyContent: 'center',
    },
    style4:{
        width: '100%',
        position: 'fixed',
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
})