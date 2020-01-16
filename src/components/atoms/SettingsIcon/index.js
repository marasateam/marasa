import React from 'react';
import {View,StyleSheet, Alert} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'

const SettingsIcon = (props) => {
    return (
        <View style={styles.container}>
            <Ionicons name="md-settings" onPress={() => props.navigation.navigate('ProfileSettings')} size={24} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginRight:15
    }
})

export default withNavigation(SettingsIcon)