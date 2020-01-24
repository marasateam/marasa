import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class BottomLine extends Component {
    render() {
        return (
            <View style={{ alignItems: this.props.position }} >
                <View style={{ 
                    borderBottomWidth: 1, 
                    borderColor: "#C4C4C4", 
                    width: this.props.width, 
                    marginBottom: this.props.marginBottom, 
                    marginTop: this.props.marginTop }}></View>
            </View>
        );
    }
}
export default BottomLine;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});