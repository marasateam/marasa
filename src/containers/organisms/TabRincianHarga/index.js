import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {BottomLine} from '../../../components/atoms'
class TabRincianHarga extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:20}}>
                <Text style={{fontSize:15}}>Garuda Indonesia (Dewasa)(x1)</Text>
                <Text style={{fontSize:12,color:"grey"}}>Rp 468.400</Text>
                </View>
                <BottomLine/>

                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
                <Text style={{fontSize:15}}>Subtotal</Text>
                <Text style={{fontSize:12,color:"grey"}}>Rp 468.400</Text>
                </View >

                <View style={{flexDirection:"row",justifyContent:"space-between", marginBottom:20,marginTop:10}}>
                <Text style={{fontSize:15}}>Pajak</Text>
                <Text style={{fontSize:12,color:"grey"}}>Include</Text>
                </View>

                <BottomLine/>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
                <Text style={{fontSize:15}}>Total</Text>
                <Text style={{fontSize:12,color:"grey"}}>Rp 468.400</Text>
                
                </View>
            </View>
        );
    }
}
export default TabRincianHarga;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20,
        paddingHorizontal:15
    }
});