import React from 'react'
import {View,Text} from 'react-native'

export default function ArrayMap(){
    const cars = ['Benz','Toyota','Honda','BMW']
    return (
        <View>
            <Text>การเเสดงข้อมูลใน Array ด้วย Method Map </Text>
            {cars.map(list => {
                return(
                    <View>
                        <Text>{list}</Text>
                    </View>
                )
            })
            }
        </View>
    )
}
