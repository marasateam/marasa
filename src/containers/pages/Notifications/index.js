import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Ionicons } from '@expo/vector-icons'
import {BottomLine} from '../../../components/atoms'
import { TouchableOpacity } from "react-native-gesture-handler";
const NotificationCard = () => {
    return (
        <TouchableOpacity style={{
            backgroundColor: "white",
            height: 100, width: "90%",
            borderRadius: 5,
            elevation: 2,
            flexDirection:"row",
            justifyContent:"space-between",
            paddingTop:10,
            paddingLeft:15

        }}>
            <View style={{flex:1,flexDirection:"column"}}>
                <Text style={{fontWeight:"700"}}>E-Tiket anda telah terbit</Text>
                <BottomLine width="90%" position="flex-start" marginTop={3} marginBottom={8}/>
                <Text style={{color:"#5C5C5C"}}>Silahkan periksa tiket anda di halaman pesanan.</Text>
            </View>
            <View style={{justifyContent:"center",marginRight:20}}>
            <Ionicons name="ios-alert" size={24}/>
            </View>
            

        </TouchableOpacity>
    )
}

class Notifications extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NotificationCard />
            </View>
        );
    }
}
export default Notifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 20

    }
});