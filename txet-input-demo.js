import react from "react";
import { View,Text,StyleSheet,Alert,Button,TextInput, ImageBackground } from "react-native";

export default function TextInputDemo(){

let [count, setCount] = react.usestate(0)

const onPressButton1= () =>{

}

return(
    <View style={Styles.container}>
    <View>
        <Text>Name</Text>
        <TextInput style={Styles.textInput}/>
    </View>
        <View>
        <Button title="ตรวจสอบข้อมูล" color="red" onPress={onPressButton1} />
        </View>
    </View>
)
}

const Styles = StyleSheet.create({
    container:{
            flex: 1,
            flexDirection:'colum',
            marginTop:50,
            alignItems:'center'
    },
    item:{
        width: 150,
        alignItems:'center'
    },
    textInput:{
        height: 32,
        width:300,
        borderWidth:1,
        borderColor:'#aaa', //สีด้านนอก
        color:'black',
        backgroundcolcor:'#fff',
        marginTop:5,
        paddingBottom:3,
        paddingTop:3
    }
})