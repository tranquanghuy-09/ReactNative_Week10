import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

const MainScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>AppTakeNote</Text>
                <Text style={{fontSize: 16, marginTop: 25}}>Create by Trần Quang Huy</Text>
                <Text style={{fontSize: 16, }}>StudentID - 20092731</Text>
            </View>
            <View style={{flex:1, gap: 20}}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AppUseAPI')}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>AppUseAPI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AppUseRedux')}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>AppUseRedux</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AppUseReduxToolkit')}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>AppUseReduxToolkit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:{
        width: 220,
        height: 60,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
})