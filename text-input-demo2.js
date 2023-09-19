import react from "react";
import { View,Text,StyleSheet,Alert,Button } from "react-native";

export default function Tid(){

    let [inputName, setInputName] = react.useState('')
    let [inputEmail, setInputEmail] = react.useState('')

    const onPressButton1 =() =>{

    }
       
return(
    <View style={Styles.container}>
        <View style={style.item}>
            <Text>name</Text>
            <Textinput style={style.textinput} dedfaultValue={inputName}
            onChange={event => setInputName(event.nativeEvent.text)}
            />
        </View>
        <View style={styles.item}>
            <Text>Email</Text>
            <Textinput style={style.textinput} dedfaultValue={inputEmail}
            onChangeText={text => setInputEmail(text)}
            keyboardType='email-address'     //number-pad
            />
        </View>

        <View style={styles.item}>
        <Button title="ตรวจสอบข้อมูล" color="red" onPress={onPressButton1}/>
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