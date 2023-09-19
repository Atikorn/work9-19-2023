import react from "react";
import { View,Text,StyleSheet } from "react-native";
    
export default function FourItem(){
    const items = ['A','B','C','D']
    return(
        <View style={Styles.Container}>
            {items.map((item, i) => {
                return(
                    <View key={i} style={Styles.item}>
                        <Text style={Styles.text}>{item}</Text>
                    </View>
                )
            }

            )}
        </View>
    )
}

const Styles = StyleSheet.create({
    Container:{
        flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        marginTop:-120,
        padding:5
    },
    item:{
        height:150,
        width:150,
        backgroundColor:'#FFCC00',
        marginBottom:15,
        //paddingLeft:10,
        justifyContent:'center',
        alignItems:'center',
        margin:10
    },
    text:{
        color:'white',
        fontSize: 35
    },
    text2:{
        color:'white',
        justifyContent:'top',
        fontSize: 20
    }
})