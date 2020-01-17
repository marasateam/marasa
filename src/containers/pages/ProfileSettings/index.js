import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Modal,
    TextInput,
    Alert
} from "react-native";
import firebase from 'firebase';
import * as GoogleSignIn from 'expo-google-sign-in';
import { Ionicons } from '@expo/vector-icons'


const ButtonLogOff = (props) => {
    return (
        <TouchableOpacity style={{
            width: "70%",
            backgroundColor: "white",
            alignItems: "center",
            padding: 10,
            borderRadius: 20,
            elevation: 3,
            marginVertical: 10
        }} onPress={async () => {
            Alert.alert("Logoff", "yakin ingin logoff akun ini.?", [

                {
                    text: 'Batal',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'Keluar', onPress:async()=>{firebase.auth().signOut();
                    await GoogleSignIn.signOutAsync();}  },
            ],
                { cancelable: false })

            
        }}>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    )
}
const ModalGantiPassword = (props) => {
    return (
        <Modal animationType="slide"
            transparent={false}
            visible={props.visible}>
            <View style={{ marginTop: 22, alignItems: "center" }}>

                <Text>EDIT PASSWORD</Text>
                <TextInput placeholder="Password Lama" style={{ borderColor: "gray", borderWidth: 1, borderRadius: 5, paddingHorizontal: 5, width: 250, marginVertical: 10 }} />
                <TextInput placeholder="Password Baru" style={{ borderColor: "gray", borderWidth: 1, borderRadius: 5, paddingHorizontal: 5, width: 250, marginTop: 10 }} />
                <TextInput placeholder="Ulangi Password Baru" style={{ borderColor: "gray", borderWidth: 1, borderRadius: 5, paddingHorizontal: 5, width: 250, marginTop: 5 }} />
                <View style={{ width: "80%", flexDirection: "row", justifyContent: "space-around", paddingTop: 20 }}>
                    <Button title="Simpan" onPress={() => {
                        Alert.alert("Edit Password", "Yakin ingin mengubah password", [

                            {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                            },
                            { text: 'OK', onPress: props.onClose },
                        ],
                            { cancelable: false })
                    }} />
                    <Button title="Cancel" onPress={props.onClose} />
                </View>



            </View>
        </Modal>
    )
}
class ProfileSettings extends Component {
    state = {
        modalGantiPasswordVisible: false
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: "white", width: "100%", marginTop: 15, paddingBottom: 1, alignItems: "center", elevation: 2 }}>
                    <View style={{ width: "100%" }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 15, marginTop: 10 }}>Akun</Text>
                        <View style={{ borderBottomWidth: 0.5, borderColor: "#C4C4C4", width: "100%", marginTop: 10 }}></View>
                    </View>
                    <TouchableOpacity onPress={() => this.setState({ modalGantiPasswordVisible: true })} style={{ flexDirection: "row", alignItems: 'flex-start', width: "100%", paddingLeft: 15, paddingTop: 10, paddingBottom: 10, backgroundColor: "#f6f6f6" }}>
                        <Ionicons name="ios-key" size={28} style={{ marginRight: 10, }} />
                        <Text style={{ alignSelf: "center" }}>Edit Password</Text>
                    </TouchableOpacity>
                    <ButtonLogOff text="LogOff Akun" />
                    <ModalGantiPassword visible={this.state.modalGantiPasswordVisible} onClose={() => this.setState({ modalGantiPasswordVisible: false })} />

                </View>
            </View>
        );
    }
}
export default ProfileSettings;

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});