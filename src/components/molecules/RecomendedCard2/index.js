import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';

const RecomendedCard2 = (props) => {
    return(
        <View style={{flexDirection:'column'}}>
        <Image source={props.Image} style={{width:210,height:75,borderRadius:4,marginHorizontal:40}}/>
            <Text style={{fontSize:14,fontWeight:'bold',position:'absolute',color:'white',paddingLeft:50,paddingTop:10}}>Bandung</Text>
        </View>
    )
}
export default RecomendedCard2