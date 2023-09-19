import react from 'react'
import {View, Text, StyleSheet, Alert, Button, TextInput} from 'react-native'

export default function CalDemo4(){
    
    let [inputNum1, setInputNum1] = react.useState(0)
    let [inputNum2, setInputNum2] = react.useState(0)
    let [result,setResult] = react.useState(0)
    let [result2,setResult2] = react.useState(0)
    const onPressButton1 = () => {
        let a=parseInt(inputNum1)
        let b=parseInt(inputNum2)
        let cal=a+b
        if (cal>=75){ 
            msg = 'Good'
        } else if (cal>=50){ 
            msg = 'Pass'
        } else{ 
            msg = 'ไม่ผ่าน'
        } 
        setResult(cal)
        setResult2(msg)
    }
return(
    <View style={styles.container}>
        <View>
            <Text>โปรเเกรมคำนวณพื้นที่สามเหลี่ยม</Text>
        </View>
        <View style={styles.item}>
            <Text>คะเเนนสอบ</Text>
        <TextInput style={styles.TextInput} defaultValue={inputNum1} 
        onChange={event => setInputNum1(event.nativeEvent.text)}
        keyboardType='number-pad'
        /> 
        </View>
        <View style={styles.item}>
            <Text>คะเเนนงาน</Text>
        <TextInput style={styles.TextInput} defaultValue={inputNum2} 
        onChange={event => setInputNum2(event.nativeEvent.text)}
        keyboardType='number-pad'
        /> 
        </View>

        <View>
            <Text>คะเเนนรวม :{result}</Text>
            <Text>Grade :{result2}</Text>
        </View>
        
        <View style={styles.item}>
        <Button title="คำนวณ" color="violet" onPress={ onPressButton1 } />
        </View>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        marginTop:50,
        alignItems:'center'
    },
    item:{
        marginBottom:15,
    },
    TextInput:{
        height: 32,
        width:300,
        borderWidth: 1,
        borderColor: 'blue',
        color: 'green',
        backgroundColor: 'white',
        marginTop:5,
        paddingTop:3,
        paddingBottom:3,
        
    }
})