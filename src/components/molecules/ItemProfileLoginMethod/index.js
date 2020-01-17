import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {LoginMethodIcon} from '../../atoms'


const ItemProfileLoginMethode = (props) => {
    return (
        <TouchableOpacity>
                <Text style={{ fontSize: 17, fontWeight: "bold", marginVertical: 5 }}>{props.Title}</Text>
                <LoginMethodIcon loginMethod={props.loginMethod}/>
            <View style={{ borderBottomWidth: 1, borderColor: "#C4C4C4", marginBottom: 10, marginTop: 5 }}>

            </View>
        </TouchableOpacity>
    )
}
export default ItemProfileLoginMethode