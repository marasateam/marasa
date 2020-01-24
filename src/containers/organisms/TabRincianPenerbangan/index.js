import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import { BottomLine } from '../../../components/atoms'
import { Ionicons } from '@expo/vector-icons'
class TabRincianPenerbangan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 12, color: "grey", marginBottom: 12 }}>Penerbangan</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 16, }}>Garuda Indonesia GA-201</Text>
                    <Image source={require("../../../../assets/logo/garuda.png")} style={{ width: 40, height: 40, resizeMode: "center" }} />

                </View>
                <BottomLine />
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }} >
                    <Image source={require('../../../../assets/icon/suitcase.png')}
                        style={{ width: 18, height: 18, resizeMode: "center", }} />
                    <Text style={{ fontSize: 11, marginLeft: 10 }} >Bagasi 20 Kg</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, marginBottom: 10 }} >
                    <Image source={require('../../../../assets/icon/dinner.png')}
                        style={{ width: 18, height: 18, resizeMode: "center", marginRight: 10 }} />
                    <Text style={{ fontSize: 11 }} >Dengan Makanan</Text>
                </View>
                <BottomLine />
                <View style={{
                    borderWidth: 0.5,
                    borderRadius: 10,
                    marginTop: 10,
                    paddingLeft: 15,
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingRight: 7,
                    flexDirection:"row"
                }}>
                    <View style={{justifyContent:"space-between",marginRight:10,paddingVertical:5}}>
                    <Image source={require("../../../../assets/icon/departure.png")} 
                    style={{width: 25, height: 25, resizeMode: "center"}}/>
                   
                    <Image source={require("../../../../assets/icon/arrival.png")} 
                    style={{width: 25, height: 25, resizeMode: "center"}}/>
                </View>
                    <View style={{}}>
                    <Text style={{ fontSize: 13 }}>Kamis 23 Jan, 13:00 MJU Mamuju</Text>
                    <Text style={{ color: "grey", fontSize: 12 }}>Bandara Tampa Padang</Text>
                    <View style={{
                        flexDirection: "row",
                        borderWidth: 1,
                        borderColor: "#ABB2B9",
                        alignSelf: "flex-start",
                        borderRadius: 16,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        marginTop: 10,
                        backgroundColor: "#EAECEE"
                    }}>
                        <Ionicons name="ios-airplane" size={18} color="#566573" />
                        <Text style={{ fontSize: 12, marginLeft: 5, color: "#566573" }}>Durasi : 55 Menit</Text>
                    </View>
                    <Text style={{ fontSize: 13, marginTop: 10 }}>Kamis 23 Jan, 13:55 UPG Makassar</Text>
                    <Text style={{ color: "grey", fontSize: 12 }}>Bandara Sultan Hasanuddin</Text>
                </View>
                
                </View>
                <View style={{flex:1,justifyContent:"flex-end", paddingBottom:10}}>
                <ButtonSetFilter title="PILIH PENERBANGAN"/>
                </View>
                
            </View>
        );
    }
}
export default TabRincianPenerbangan;
const ButtonSetFilter = (props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: "#FC301F",
            height: 40,
            width: "95%",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
        }}
            onPress={props.onPress}
        >
<Text style={{ color: "white", fontSize: 16 }}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10
    }
});