import React from 'react'
import {TouchableOpacity,Text} from 'react-native'

const ButtonSetFilter = (props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: "#FC301F",
            height: 40,
            width: "95%",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10
        }}
            onPress={props.onPress}
        >
<Text style={{ color: "white", fontSize: 16 }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonSetFilter;