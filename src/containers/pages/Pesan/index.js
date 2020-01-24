import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import { Linking } from 'expo';
import { Ionicons } from '@expo/vector-icons'
class PesanScreen extends Component {
    _handleCall = () => {
        Linking.openURL(`tel:+6281242168000`);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: "white", width: "100%", marginTop: 15, paddingBottom: 1, alignItems: "center", elevation: 2 }}>
                    <View style={{ width: "100%" }}>
                        <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 15, marginTop: 10 }}>Hubungi Kami</Text>
                        <View style={{ borderBottomWidth: 0.5, borderColor: "#C4C4C4", width: "100%", marginTop: 10 }}></View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("PesanChat")}
                        style={styles.Button}>
                     
                        <Ionicons name="ios-text" size={28} style={{ marginRight: 10, }} />
                        <Text style={{ alignSelf: "center" }}>Pesan Chat</Text>
                        
                    </TouchableOpacity>
                    <View style={{ borderBottomWidth: 0.5, borderColor: "#C4C4C4", width: "100%" }}></View>
                    <TouchableOpacity onPress={this._handleCall} style={styles.Button}>
                        <Ionicons name="ios-call" size={28} style={{ marginRight: 10, }} />
                        <Text style={{ alignSelf: "center" }}>Panggilan Telepon</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flex:1,justifyContent:"center"}}>
                <Image style={{width:150,height:150}} source={require('../../../../assets/icon/conversation.png')} />
                </View>
                
            </View>
        );
    }
}
export default PesanScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },Button:{
        flexDirection: "row",
        alignItems: 'flex-start',
        width: "100%",
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#f6f6f6"
    }
});