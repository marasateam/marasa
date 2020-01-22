import React from 'react'
import { View, TouchableOpacity,Text } from 'react-native'
import {primaryColor} from '../../../styles/colors'
import {Ionicons} from '@expo/vector-icons'
const ModalHeader = (props) => {
    return (
        <View>
        <View style={{
            height: 50,
            backgroundColor: primaryColor,
            flexDirection: "row",
            alignItems: "center",
            elevation: 1,
            marginBottom: 10,

        }}>
            <TouchableOpacity style={{ flex: 1, 
                alignItems: "center", 
                height: "100%", 
                justifyContent: "center" }} onPress={props.onPressClose}>
                <Ionicons name={'ios-close'} color="white" size={34} />
            </TouchableOpacity>
            <View style={{ flex: 5, alignItems: "center"}}>
                <Text style={{ color: "white", fontSize: 17 }}>{props.title}</Text>
            </View>
            <View style={{ flex: 2, alignItems: "center" }}>
                {props.children}
            </View>
        </View>
        </View>
    )
}
export default ModalHeader;
