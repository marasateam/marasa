import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import HomeScreen from './HomeScreen'
import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

const HomeNavigator = createStackNavigator({
    Home:{screen:HomeScreen,navigationOptions:{headerTitle:'Marasa',headerTintColor:'white'}}
},{defaultNavigationOptions:{headerTitleAlign:'center',headerStyle:{backgroundColor:'#EE2424'}}})

export default createAppContainer(HomeNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});