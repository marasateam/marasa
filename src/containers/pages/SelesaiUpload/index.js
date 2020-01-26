import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import {ButtonSetFilter} from '../../../components/atoms'
import {StackActions,NavigationActions} from 'react-navigation'
const CardSelesaiUpload = ()=>{
    return(
        <View style={{height:120,
        borderRadius:10,
        backgroundColor:"white",
        elevation:1,
        paddingTop:8,
        paddingLeft:13,
        paddingBottom:8,
        justifyContent:"space-around",
        marginBottom:12
        }}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Ionicons name="ios-alert"/>
            <Text style={{fontSize:12,marginLeft:5}}>Data perjalanan anda telah dikirim ke Admin dan butuh waktu 10-30 menit untuk diverifikasi (di jam kerja).</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Ionicons name="ios-alert"/>
            <Text style={{fontSize:12,marginLeft:5}}>Jika lebih dari waktu tersebut belum ada pemberitahuan. silahkan hubungi kami di tab Pesan</Text>
            </View>
        </View>
    )
}
const resetAction = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Home' })
    ],
  });
class SelesaiUpload extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={{color:"grey",marginBottom:5}}>Pesan</Text>
                <CardSelesaiUpload/>
                <ButtonSetFilter title="Ke Pesanan" onPress={()=>{
                    this.props.navigation.dispatch(resetAction)
                    this.props.navigation.navigate("Pesanan")
            
            }}/>
            </View>
        );
    }
}
export default SelesaiUpload;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:10,
        paddingHorizontal:10
    }
});