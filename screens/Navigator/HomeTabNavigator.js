import React, { Component } from "react";
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator'
import PesanStackNavigator from './PesanStackNavigator'
import PesananStackNavigator from './PesananStackNavigator'
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
    },Pesanan: {
        screen: PesananStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Pesanan',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-list-box" size={24} color={tintColor} />
            )
        }
    },Pesan: {
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