import React from 'react';
import {TouchableOpacity,View,Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
const ItemProfil = (props) => {
    return (
        <TouchableOpacity >
            <View style={{flexDirection:"row" }}>
            <View style={{marginRight:10,justifyContent:"center"}}>
                <Ionicons name={props.IconName} size={24}/>
            </View>
            
            <View style={{ paddingVertical: 5 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold", marginVertical: 5 }}>{props.Title}</Text>
                <Text  style={{color:"#6C6C6C"}}>{props.Content}</Text>
            </View>
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: "#C4C4C4", marginBottom: 10, marginTop: 5 }}></View>
        </TouchableOpacity>
        
    )
}
export default ItemProfil;