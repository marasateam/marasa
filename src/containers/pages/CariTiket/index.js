import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class CariTiket extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CariTiket</Text>
            </View>
        );
    }
}
export default CariTiket;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});