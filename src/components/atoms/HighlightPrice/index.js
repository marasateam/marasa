import React from 'react'
import {View,Text} from 'react-native'
const HighlightPrice = () => {
    return (
        <View style={{
            backgroundColor: "#FFCB29",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 20
        }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Rp 468.600</Text>
        </View>
    )
}
export default HighlightPrice;