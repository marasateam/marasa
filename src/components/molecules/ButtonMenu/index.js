import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

const ButtonMenu = (props) => {
    return (
        <View style={{ marginHorizontal: 1, alignContent: 'center', paddingTop: 12 }}>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignContent: 'center',
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 10,
                elevation:1
            }}>
                <Image source={props.ImageIcon} style={{ backgroundColor: 'red', borderRadius: 8, justifyContent: 'center', width: 50, height: 50 }}></Image>
                <Text style={{ fontSize: 16, fontWeight: 'bold', paddingTop: 16, paddingHorizontal: 17 }}>Tiket Pesawat</Text>
                <Image source={props.ImageArrow} style={{ justifyContent: 'center', width: 30, height: 30, marginLeft: 90, marginTop: 8 }}></Image>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonMenu
