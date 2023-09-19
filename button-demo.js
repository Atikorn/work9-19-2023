import react from "react";
import { View,Text,StyleSheet,Alert,Button } from "react-native";

export default function ButtonDemo(){

    const onPressButton2 = () => {
        Alert.alert('คุณกดปุ่มที่ 2')
    }
    const onPressButton3 = () => {
        Alert.alert(
            'การลบข้อมูล',
            'ต้องการลบข้อมูลนี้ใช่หรือไม่',
            [
                {
                    text:'ใช่',
                    onPress:() => {}
                },
                {
                    text:'ยกเลิก',
                    onPress:() => {}
                },
                {
                    text:'ไม่อ่ะไม่ออก',
                    onPress:() => {}
                }
            ]
        )
    }

return(
    <View style={Styles.container}>
    <View style={Styles.item}>
    <Button title="ปุ่มที่ 1" color="red" onPress={() => Alert.alert('คุณกดปุ่มที่ 1')} />
    </View>

    <Button title="ปุ่มที่ 2" color="#00FFFF" onPress={onPressButton2} />
    <Button title="ปุ่มที่ 3" color="#778899" onPress={onPressButton3} />

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