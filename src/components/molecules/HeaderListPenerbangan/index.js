import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Ionicons } from '@expo/vector-icons'



class HeaderListPenerbangan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{justifyContent:"center",flexDirection:"row",alignItems:"center"}}>
                    <Text style={styles.text}>Mamuju</Text>
                    <Ionicons name="ios-airplane" color="white" size={24} style={{marginHorizontal:10}}/>
                    <Text style={styles.text}>Makassar</Text>
                </View>
                <View>
                    <Text style={{color:"white", fontSize:12}}>Senin 20 Jan - 1 Dewasa - Ekonomi</Text>
                </View>

            </View>
        );
    }
}
export default HeaderListPenerbangan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center"
        
    }, text: {
        color: "white",
        fontSize: 15,
        fontWeight:"bold"

    }
});