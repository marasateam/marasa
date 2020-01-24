import React from 'react';
import {View,Text} from 'react-native'
const CardFilter = (props) => {
    return (
        <View style={{ width: "100%", backgroundColor: "white", paddingTop: 12, paddingLeft: 25, paddingBottom: 18, marginBottom: 12 }}>
            <Text style={{ marginBottom: 12, fontSize: 13, color: "grey" }}>{props.title}</Text>
            {props.children}
        </View>
    )
}
export default CardFilter;