import React, { Component } from "react";
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator'
import { Ionicons } from '@expo/vector-icons';
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

class HomeTabNavigator extends Component {
    render() {
        return (
            <HomeTabContainer />
        );
    }
}
const HomeTabNavigators = createMaterialBottomTabNavigator({
    HomeScreen: {
        screen: HomeStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="md-home" size={24} color={tintColor} />
            )
        }
    },
    ProfileScreen: {
        screen: ProfileStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Akun',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-person" size={24} color={tintColor} />
            )
        }
    }
}, { barStyle: { backgroundColor: '#EE2424' } })
const HomeTabContainer = createAppContainer(HomeTabNavigators);
export default HomeTabNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});