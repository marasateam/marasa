import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

const RecomendedCard2 = (props) => {
    return (
        <View style={{flex:1,alignItems:"flex-end"}}>
            <Image source={props.Image} style={{
                width: "95%",
                height: "95%",
                borderRadius: 4
            }} />
            <Text style={{
                fontSize: 14,
                fontWeight: 'bold',
                position: 'absolute',
                color: 'white',alignSelf:"flex-start",
                marginLeft:15,marginTop:4
            }}>Bandung</Text>
        </View>

    )
}
export default RecomendedCard2