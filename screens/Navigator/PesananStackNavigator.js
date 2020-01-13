import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import PesananScreen from '../PesananScreen'
import {createStackNavigator} from 'react-navigation-stack'
class PesananStackNavigator extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>PesananStackNavigator</Text>
            </View>
        );
    }
}

const PesananNavigator = createStackNavigator({
    Pesanan:{screen:PesananScreen,navigationOptions:{headerTintColor:'white'}}
}, {
    defaultNavigationOptions: {
        headerTitleAlign: 'center', headerStyle: {
            backgroundColor: '#EE2424'
        }
    }
})

export default PesananNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});