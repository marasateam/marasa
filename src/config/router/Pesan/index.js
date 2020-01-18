import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createStackNavigator } from 'react-navigation-stack'
import {Pesan,PesanChat} from '../../../containers/pages'

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
    },
    PesanChat: {
        screen: PesanChat,
        navigationOptions: { headerTintColor: 'white' }
    }
}, {
    defaultNavigationOptions: {
        headerTitleAlign: 'center', headerStyle: {
            backgroundColor: '#EE2424'
        }
    }
})
PesanNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
};
export default PesanNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});