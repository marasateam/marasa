import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';

const RecomendedCard = (props) => {
    return(
        <View style={{paddingTop:5,flexDirection:'row'}}>
            <Image source={props.Image} style={{width:130,height:150,borderRadius:4,resizeMode:'cover',marginTop:2}}/>
            <Text style={{fontSize:14,fontWeight:'bold',position:'absolute',color:'white',paddingLeft:10,paddingTop:10}}>Makassar</Text>
        </View>
    )
}
export default RecomendedCard