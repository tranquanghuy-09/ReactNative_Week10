import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput} from 'react-native'
import React, {useState, useEffect, } from 'react'
import { Ionicons, MaterialIcons} from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

import { addNote, deleteNote,} from '../redux/actions';
import store from '../redux/stores';

const Home = ({navigation}) => {
    const isFocused = useIsFocused();
    const [editingMode, setEditingMode] = useState(false);
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
        setData1(store.getState().notes);
        console.log(store.getState());
    }, [store.getState().notes, isFocused]);
    const [data1, setData1] = useState([]);
    const [writeNote, setWriteNote] = useState('');
    return (
    <View style={styles.container}>
        <View style={{}}>
                <View style={{width: '100%', marginTop: 10, paddingBottom: 100}}>
                <FlatList
                    data={data1}
                    scrollEnabled={true}
                    renderItem={({ item, index }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginLeft: 15, paddingRight: 25, height: 60, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: 'silver' }}>
                            {editingMode && (
                                    <TouchableOpacity onPress={() => {
                                        store.dispatch(deleteNote(index));
                                        setData1(store.getState().notes);
                                    }}>
                                        <Ionicons name="remove-circle" size={30} color="red" />
                                    </TouchableOpacity>
                                    )}
                            <TouchableOpacity style={{width: '100%', paddingRight: 5}} onPress={()=>{navigation.navigate("UpdateNote", {index: index,data: item})}}>
                                <View style={{ flexDirection: 'row', height: 40, borderWidth: 0, alignItems: 'center', justifyContent: 'space-between', width: '100%', borderWidth: 0}}>
                                    {/* <Text style={{ fontSize: 18, fontWeight: '500', color: 'red'}}>{index}  |</Text> */}
                                    <Text style={{ fontSize: 18, fontWeight: '500', marginLeft: 10 }}>{item}</Text>
                                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
                </View>
            </View>
            <View style={styles.style3}>
                <TouchableOpacity onPress={() => {
                            store.dispatch(addNote(writeNote)); // Dispatch directly the value of writeNote
                            setData1(store.getState());
                        }}>
                    <Ionicons name="add-circle-outline" size={80} color="#D9614C" />
                </TouchableOpacity>
                
            </View>
            <View style={styles.style4}>
                    <View style={{flexDirection: 'row', borderWidth: 1, alignItems: 'center', width: '90%', height: 60, justifyContent: 'center', padding: 15
                        , borderColor: 'rgba(217, 217, 217, 1)', borderRadius: 17, marginVertical: 13,}}>
                        <TextInput style={{width: '100%', height: 40, borderRadius: 10, paddingLeft: 7, }} placeholder='Nhập nội dung' onChangeText={(text) => setWriteNote(text)}/>
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
    },
})