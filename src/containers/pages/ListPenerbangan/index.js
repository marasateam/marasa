import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ListPenerbangan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ListPenerbangan</Text>
            </View>
        );
    }
}
export default ListPenerbangan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});