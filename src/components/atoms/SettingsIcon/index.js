import React from 'react';
import {View,StyleSheet, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'

const SettingsIcon = (props) => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('ProfileSettings')} style={styles.container}>
            <Ionicons name="md-settings"  size={24} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginRight:10,
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    }
})

export default withNavigation(SettingsIcon)