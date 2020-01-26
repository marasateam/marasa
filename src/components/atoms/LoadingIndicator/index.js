import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, Modal,
    ActivityIndicator
} from "react-native";
import Modals, { ModalContent } from 'react-native-modals';
const LoadingIndicator = (props) => {

    return (
        <Modals
            visible={props.visible}>
            <ActivityIndicator size="large" color="#0000ff" />
        </Modals>
    )
}
export default LoadingIndicator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});