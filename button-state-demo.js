import react from "react";
import { View,Text,StyleSheet,Alert,Button } from "react-native";

export default function ButtonStateDemo(){

    const  t = 'จำนวนครั้งที่คลิก :'
    let [count, setCount] = react.useState(0)
    let [text, setText] = react.useState(t+count)


    const onPressButton1 =() =>{
        const result = count+10
        setCount(result)
        setText(t+result)
    }
    const onPressButton2 =() =>{
        const result = 0
        setCount(result)
        setText(t+result)
    }

return(
    <View style={Styles.container}>

    <Button title="Clik Here" color="red" onPress={onPressButton1} />
    <Button title="Reset" color="blue" onPress={onPressButton2}/>
        <View>
            <Text>{text}</Text>
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
    }
})