import React from 'react';
import {View, Text, Image} from 'react-native'

const PromoCard = (props) => {
    return (
        <View style={{}}>
            <Image source={props.Image} style={{width:340,height:150,borderRadius:10,resizeMode:'cover'}}/>
            <Text style={{fontSize:14,fontWeight:'bold',position:'absolute',color:'white',paddingLeft:16,paddingTop:12}}>Makassar</Text>
        </View>
    )
}

export default PromoCard