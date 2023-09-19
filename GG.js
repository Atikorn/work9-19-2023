import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default function Gg(){
    return (
        <View>
            <Text style={AA.Text}>Question</Text>
        </View>
    )
}
const AA = StyleSheet.create({
    Text:{
        textAlign:'center',
        marginTop:50,
        fontSize:30
    }
})
