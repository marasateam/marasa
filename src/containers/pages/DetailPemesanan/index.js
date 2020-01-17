import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class DetailPemesanan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>DetailPemesanan</Text>
            </View>
        );
    }
}
export default DetailPemesanan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});