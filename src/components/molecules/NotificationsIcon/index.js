import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { withNavigation } from 'react-navigation'
class NotificationsIcon extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Notifications')} style={[{ padding: 5,marginRight:10 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
                <View style={{
                    position: 'absolute', 
                    height: 25, width: 25, 
                    borderRadius: 15, 
                    backgroundColor: '#D1C144', 
                    right: 15, 
                    bottom: 15, 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    zIndex: 2000,

                }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>1</Text>
                </View>
                <Ionicons style={{ color: "white" }}  name="ios-notifications" size={30} />
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default withNavigation(NotificationsIcon);