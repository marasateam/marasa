import React from 'react';
import {View,Text,Image} from 'react-native';

const NamePoint = (props) => {
    return(
        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',borderRadius: 4,padding:20,elevation:1}}>
                    <Text style={{fontSize: 16,fontWeight:'bold'}}>{props.name}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image source={props.Image} style={{height: 16,width:16}}></Image>
                        <Text style={{fontSize: 16,fontWeight:'bold',paddingLeft: 5}}>{props.point}</Text>
                    </View>
                </View>
    )
}
export default NamePoint