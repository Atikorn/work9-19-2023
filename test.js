import react from 'react'
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'

export default function Test1(){
    
    let [inputNum1, setInputNum1] = react.useState(0) /* ราคารถ*/
    let [inputNum2, setInputNum2] = react.useState(0)/* เงินดาวน์*/
    let [inputNum3, setInputNum3] = react.useState(0) /* ดอกเบี้ย*/
    let [inputNum4, setInputNum4] = react.useState(0) //ผ่อนกี่ปี
    let [inputNum5, setInputNum5] = react.useState(0)
    let [result,setResult] = react.useState(0)
    let [result2,setResult2] = react.useState(0)
    let [result3,setResult3] = react.useState(0)
    let [result4,setResult4] = react.useState(0)
    let [result5,setResult5] = react.useState(0)

    const onPressButton1 = () => {
    let a=parseInt(inputNum1)
    let b=parseInt(inputNum2)
    let d=parseInt(inputNum3)
    let e=parseInt(inputNum4)
    let c=a-b //ยอดจัดไฟเเนนซ์
    setResult(c)
    let g=d/100
    let ee=e*12
    let dd=c*g //ยอดจัดไฟเเนนซ์+ดอกเบี้ย
    let ddd=dd*e //บวกตัวมันเอง
    let dddd=c+ddd
    let ddddd=dddd/ee
    let dddddd=ddddd*0.07
    let ddddddd=dddddd+ddddd
    let dddddddd=ddddddd*ee
    let ddddddddd=dddddddd-c
    //let ddd=dd/e//ดอกเบี้ยรถที่ต้องจ่าย
    //let dddd=ddd+c //ยอดทั้งหมดที่ต้องจ่ายจริง
    //let cars=dddd/e

    setResult2(ddddd.toFixed(2))
    setResult3(ddddddd.toFixed(2))
    setResult4(dddddddd.toFixed(2))
    setResult5(ddddddddd.toFixed(2))
    }

return(
    <View style={styles.container}>
        <View>
            <Text>คำนวณผ่อนรถมือสอง</Text>
        </View>
        <View style={styles.item}>
            <Text>ราคารถ</Text>
        <TextInput style={styles.TextInput} defaultValue={inputNum1} onChange={event => setInputNum1(event.nativeEvent.text)}
        keyboardType='number-pad'
        /> 
        </View>

        <View style={styles.item}>
            <Text>เงินดาวน์(บาท)</Text>
        <TextInput style={styles.TextInput} defaultValue={inputNum2} onChange={event => setInputNum2(event.nativeEvent.text)}
        keyboardType='number-pad'
        /> 
        </View>

        <View style={styles.item}>
            <Text>ดอกเบี้ย%</Text>
        <TextInput style={styles.TextInput} defaultValue={inputNum3} onChange={event => setInputNum3(event.nativeEvent.text)}
        keyboardType='number-pad'
        /> 
        </View>

        <View style={styles.item}>
            <Text>ผ่อนกี่ปี</Text>
        <TextInput style={styles.TextInput} defaultValue={inputNum4} onChange={event => setInputNum4(event.nativeEvent.text)}
        keyboardType='number-pad'
        /> 
        </View>


        <View>
            <Text>ยอดจัดไฟเเนนซ์{result}</Text>
            <Text>ผ่อนต่อเดือน{result2}</Text>
            <Text>ผ่อนต่อเดือน(vat7%){result3}</Text>
            <Text>ยอดผ่อนรวม{result4}</Text>
            <Text>ดอกเบี้ย+vat7%{result5}</Text>
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