import React from 'react'
import { View, TouchableOpacity,Text } from 'react-native'
import {primaryColor} from '../../../styles/colors'
import {Ionicons} from '@expo/vector-icons'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
const ModalHeader = (props) => {
    return (
        <View>
        <View style={{
            height: 60,
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
            <View style={{ flex: 3}}>
                <Text style={{ color: "white", fontSize: 17 }}>{props.title}</Text>
                <Text style={{ color: "white", fontSize: 12 }}>1 Orang</Text>
            </View>
            <View style={{ flex: 2, alignItems: "center" }}>
                {props.children}
            </View>
        </View>
        </View>
    )
}
export default ModalHeader;
