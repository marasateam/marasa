import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class PesanScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>PesanScreen</Text>
            </View>
        );
    }
}
export default PesanScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});