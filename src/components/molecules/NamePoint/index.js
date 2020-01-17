import React from 'react';
import { View, Text, Image } from 'react-native';

const NamePoint = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: "space-between", backgroundColor: 'white', borderRadius: 4, padding: 14, elevation: 1 }}>
            <View style={{ flexDirection: "row"}}>
                <Image source={require("../../../../assets/icon/user.png")} style={{ width: 24, height: 24 }} />
                <Text style={{ fontSize: 16, fontWeight: '600',marginLeft:10 }}>{props.name}</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={props.Image} style={{ height: 16, width: 16 }}></Image>
                <Text style={{ fontSize: 16, fontWeight: 'bold', paddingLeft: 5 }}>{props.Poin}</Text>
            </View>
        </View>
    )
}
export default NamePoint