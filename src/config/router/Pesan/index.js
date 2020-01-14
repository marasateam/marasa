import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createStackNavigator } from 'react-navigation-stack'
import {Pesan} from '../../../containers/pages'

class PesanStackNavigator extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>PesanStackNavigator</Text>
            </View>
        );
    }
}
const PesanNavigator = createStackNavigator({
    Pesan: {
        screen: Pesan,
        navigationOptions: { headerTintColor: 'white' }
    }
}, {
    defaultNavigationOptions: {
        headerTitleAlign: 'center', headerStyle: {
            backgroundColor: '#EE2424'
        }
    }
})
export default PesanNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});