import react from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default function ImageDemo(){
    
    const imgSrc = require('./p1.jpg')

return(
    <View style={styles.container}>
       <Image source={imgSrc} style={styles.img} />
       <Image source={require('./assets/p1.jpg')} style={styles.img} />
       <Image source={require('./assets/image/p2.jpg')} style={styles.img} />
       <Image source={{uri:'https://img.freepik.com/premium-vector/hand-drawn-nature-scenes-illustration_23-2150081125.jpg?w=740'}} style={styles.img} />
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        marginTop:50,
        alignItems:'center'
        //container:{ แสดงแนวนอน
        //flex: 1,
        //flexDirection: 'row',
        //flexWrap: 'wra',
        //justifyContent: 'space-evenly',
        //marginTop: 50
        
    },
    img:{
      width: 200,
      height: 150,
      borderWidth: 1,
      borderColor: 'red',
      marginBottom: 15,
    }
})