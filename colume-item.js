import react from "react";
import { View,Text,StyleSheet } from "react-native";

export default function ColcumItem(){
    const items = ['one','two','tree','four','fiveM']
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
        flexDirection:'colum',
        marginTop:50,
        padding:10
    },
    item:{
        height:60,
        backgroundColor:'#00CCFF',
        marginBottom:15,
        paddingLeft:10,
        justifycontent: 'center'
    },
    text:{
        color:'white',
        fontSize: 20
    }
})