import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import ProfileScreen from './ProfileScreen'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

class ProfileStackNavigator extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ProfileStackNavigator</Text>
            </View>
        );
    }
}

const ProfileNavigator = createStackNavigator({
    Profile:{screen:ProfileScreen,navigationOptions:{headerTintColor:'white'}}
},{defaultNavigationOptions:{headerTitleAlign:'center',headerStyle:{backgroundColor:'#EE2424'}}})
export default createAppContainer(ProfileNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});