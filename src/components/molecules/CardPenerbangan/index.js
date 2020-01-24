
import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import {HighlightPrice} from '../../atoms'
import {Ionicons} from '@expo/vector-icons'
const CardPenerbangan = (props) => {
    return (
        <View style={{
            backgroundColor: "white",
            height: 130,
            marginVertical: 5,
            elevation: 0.8,
            flexDirection: "row"

        }}>
            <View style={{ flex: 1, paddingLeft: 15 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 19, fontWeight: "200" }}>Garuda</Text>
                    <Image style={{ width: 45, height: 45, resizeMode: "center", marginLeft: 5 }} source={require("../../../../assets/logo/garuda.png")} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12 }}>13:00 MJU</Text>
                    <Text style={{ fontSize: 11, color: "grey", marginLeft: 15, marginTop: 5 }}>55 Menit (Lansung)</Text>
                    <Text style={{ fontSize: 12, marginTop: 5 }}>13:55 UPG</Text>
                </View>

            </View>
            <View style={{ flex: 0.8, justifyContent: "space-evenly", alignItems: "center" }}>
                <Text style={{ color: "grey", fontSize: 10 }}>Harga Akhir / Penumpang</Text>
                <HighlightPrice />
                <TouchableOpacity style={{
                    backgroundColor: "#FF5733",
                    paddingHorizontal: 12,
                    borderRadius: 5,
                    flexDirection: "row",
                    alignItems: "center",
                
                }}
                onPress={props.onDetailPress}
                >
                    <Text style={{ color: "white", marginRight: 10 }}>Detail</Text>
                    <Ionicons name="ios-menu" color="white" size={15} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default CardPenerbangan;