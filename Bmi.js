import react from 'react'
import {View, Text, StyleSheet, Alert, Button, TextInput,Image} from 'react-native'

export default function CalDemo4(){
    
    let [inputNum1, setInputNum1] = react.useState(0)
    let [inputNum2, setInputNum2] = react.useState(0)
    let [result,setResult] = react.useState(0)
    let [result2,setResult2] = react.useState(0)
    let [image,setImage] = react.useState(require('./p1.jpg'))

    const onPressButton1 = () => {
        let a=parseInt(inputNum1)
        let imageName=''
        let b=parseInt(inputNum2)
        let c=b/100
        let d=c*c
        let f=a/d
        if (f>=30){ 
            msg = 'อ้วนระดับสอง'
            imageName= require('./30.jpg')
        } else if (f>=25){ 
            msg = 'อ้วนระดับหนึ่ง'
            imageName= require('./25.jpg')
        } else if (f>=23){ 
            msg = 'น้ำหนักเกิน'
            imageName= require('./23.jpg')
        }else if (f>=18){ 
            msg = 'สมส่วน'
            imageName= require('./good.jpg')
        }else{ 
            msg = 'ต่ำกว่าเกณฑ์'
            imageName= require('./low.jpg')
        } 
        setResult(f.toFixed(2))
        setResult2(msg)
        setImage(imageName)
    }
return(
    <View style={styles.container}>
        <View>
            <Text>BMI Application</Text>
        </View>
        <View style={styles.item}>
            <Text>น้ำหนัก (กิโลกรัม)</Text>
        <TextInput style={styles.TextInput} defaultValue={inputNum1} 
        onChange={event => setInputNum1(event.nativeEvent.text)}
        keyboardType='number-pad'
        /> 
        </View>
        <View style={styles.item}>
            <Text>ส่วนสูง (เซนติเมตร)</Text>
        <TextInput style={styles.TextInput} defaultValue={inputNum2} 
        onChange={event => setInputNum2(event.nativeEvent.text)}
        keyboardType='number-pad'
        /> 
        </View>

        <View>
            <Text>ค่า BMI :{result}</Text>
            <Text>อยู่ในเกณฑ์ :{result2}</Text>
            <Image source={image} style={styles.image} resizeMode='cover' />
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
        
    },
    image:{
      width: 200,
      height: 150,
      borderWidth: 1,
      borderColor: 'red',
      marginBottom: 15,
    }
})
