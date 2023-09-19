import react from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight, Alert} from 'react-native'

export default function TouchableDemo(){

return(
    <View style={styles.container}>
       <TouchableOpacity activeOpacity={0.75} style={styles.Item} onPress={() =>{Alert.alert('U click button opacity')}} >
            <Text style={styles.buttonText}>Opacity</Text>
       </TouchableOpacity>

       <TouchableHighlight underlayColor={'red'} style={styles.Item} onPress={() =>{Alert.alert('U click button hightlight')}} >
    
            <Text style={styles.buttonText}>hightlight</Text>
       </TouchableHighlight>

       <TouchableHighlight underlayColor={'red'} style={styles.Item} onPress={() =>{Alert.alert('U click button hightlight')}} >
            <View style={styles.viewImgTextContainer}>
                <Image style={styles.img} source={require('./home.png')} />
                <Text style={styles.buttonText}>hightlight</Text>
            </View>
       </TouchableHighlight>
    </View>
    
)
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        marginTop: 50,
        alignItems:'center'
    },
    Item:{
        width: 250,
        height: 50,
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 15,
        backgroundColor:'royalblue',
        borderRadius: 15
    },
    buttonText:{
        fontSize: 20,
        color:'white'
    },
    img:{
        height:40,
        width:40,
        marginRight: 10
    },
    viewImgTextContainer:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    }
    
})