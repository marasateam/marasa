import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, SafeAreaView, Button
} from "react-native";
import firebase from 'firebase';
import * as GoogleSignIn from 'expo-google-sign-in';
class ProfileScreen extends Component {
    state = { user: {} };
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                this.setState({ user: user });
            }
        })
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text>{firebase.auth().currentUser.displayName}</Text>
                    <Text>{this.state.user.email}</Text>
                    <Button title="Log Off" onPress={async () => {
                        firebase.auth().signOut();
                        await GoogleSignIn.signOutAsync();
                    }} />
                </View>
            </SafeAreaView>
        );
    }
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});