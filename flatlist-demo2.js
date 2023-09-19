import React from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Alert,Image} from 'react-native'

export default function FlatListDemo(){
   const listData = [
    {name:'Iphone15 ProMax Plus UltarMax',price:68900,img:'./home.png'},
    {name:'Ipad ProPlus Ultar',price:86900,img:'./ipad.png'},
    {name:'Airpods Plus Plus UltarProMax',price:17500,img:'./airpods.png'},
    {name:'AppleWatch Ultar Gen150',price:35000,img:'./watch.png'}
   ]
   const onPressItem = (item)  => {
    let name = item.name
    Alert.alert(`${name} ราคา ${item.price} บาท`)
}
   const renderFlatListItem = (listData) =>{
        return (
            <TouchableOpacity onPress={() => onPressItem(listData.item)}>
                <View key={listData.item.name} style={styles.flatListItem}>
                    <Image style={styles.img} source={listData.item.name} />
                    <Text style={styles.itemName}>{listData.item.name}</Text>
                    <Text style={styles.itemPrice}>{listData.item.price}฿</Text>
                </View>
            </TouchableOpacity>
        )
    
   }
    return(
        <View style={styles.container}>
           <Text style={{alignSelf:'center', fontSize:20}}>รายการสินค้า</Text>
           <FlatList data={listData} 
           renderItem={renderFlatListItem}
           keyExtractor={(item, index) => item+index}
           style={styles.flatList}
           contentContainerStyle={styles.flatListContent}
           />
        </View>      
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 50,
    },
    flatList:{
        marginTop: 10,
        
    },
    flatListContent:{
        margin: 10,
        paddingBottom: 50, 
        alignItems:'center',

    },
    flatListItem:{
        width: 150,
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor:'#cde',
        margin: 10,
        padding:10,
        alignItems:'center',
        borderRadius:15
    },
    itemName:{
        fontSize:'18',
        fontWeight:'bold',

    },
    itemPrice:{
        fontSize:'16',
        color:'gray'
    },
    img:{
        width:50,
        height:50
    }
})