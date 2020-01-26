import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';

 class UploadFile extends Component {
    render() {
        return (
            <View style={{styles}}>
                <Text>UploadFile Screen</Text>
            </View>
        )
        }
    }
export default UploadFile
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });