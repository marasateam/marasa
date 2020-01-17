import React, { Component } from "react";
import {
    HomeStackNavigator,
    PesananStackNavigator,
    PesanStackNavigator,
    ProfileStackNavigator
} from '../../config/router'
import { Ionicons } from '@expo/vector-icons';
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import ScreenTabNavigator from '../ScreenTabNavigator'

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
    }, Pesanan: {
        screen: PesananStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Pesanan',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-list-box" size={24} color={tintColor} />
            )
        }
    }, Pesan: {
        screen: PesanStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Pesan',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-chatbubbles" size={24} color={tintColor} />
            )
        }
    },
    ProfileScreen: {
        screen: ProfileStackNavigator,
        navigationOptions: {
            tabBarPosition: 'top',
            swipeEnable: true,
            tabBarLabel: 'Akun',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-person" size={24} color={tintColor} />
            )
        }
    }
}, { barStyle: { backgroundColor: '#FF201D' } })
const HomeTabContainer = createAppContainer(HomeTabNavigators);
export default HomeTabNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});