import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Button,
    Image, TouchableOpacity,
    ScrollView,
    AsyncStorage,
    Alert
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';
import * as GoogleSignIn from 'expo-google-sign-in';
import { ItemProfileLoginMethod, ItemProfile } from '../../../components/molecules'



const PoinInProfile = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: "space-between",
            backgroundColor: '#E8E8E8',
            borderRadius: 10,
            padding: 14,
            elevation: 2, 
            alignItems:"center",
            width:"90%"

        }}>

            <Text style={{  margin: 2 ,fontWeight:"700",color:"black" }}>Poin</Text>
            <View style={{flexDirection:"row",alignItems:"center",marginRight:10}}>
                <Image source={require('../../../../assets/icon/coin.png')} style={{ width: 26, height: 26, margin: 2 }} />
                <Text style={{ fontWeight: "bold",marginLeft:10,color:"black"}}>135</Text>
            </View>


        </View>
    )
}
class ProfileScreen extends Component {
    state = { user: {}, loginMethod: "" };
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                this.setState({ user: user });
            }
        });
        AsyncStorage.getItem("LOGIN_METHOD").then((value) => { this.setState({ loginMethod: value }) })

    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.cardProfile}>
                        <Image
                            source={this.state.loginMethod=="EMAIL"?{uri:"https://www.jumpstarttech.com/files/2018/08/Network-Profile.png"}:  {uri: firebase.auth().currentUser.photoURL}} 
                            style={styles.imageProfile}
                        />
                        <Text style={{ marginTop: 5, fontWeight: "bold" }}>{firebase.auth().currentUser.displayName}</Text>

                        <View style={{ alignItems: "center" }}>
                            <View style={{ borderBottomWidth: 1, borderColor: "#C4C4C4", width: 250, marginBottom: 10, marginTop: 10 }}></View>

                        </View>
                    </View>
                    <View style={styles.cardIcon}>
                        <PoinInProfile />
                    </View>

                    <View style={styles.cardListProfile}>
                        <View style={{ marginBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Akun</Text>
                        </View>
                        <ItemProfile Title="Nama" Content={this.state.user.displayName} IconName="ios-person" />
                        <ItemProfile Title="Email" Content={this.state.user.email} IconName="ios-mail" />
                        <ItemProfileLoginMethod Title="Metode Login" loginMethod={this.state.loginMethod} />


                    </View>


                </View>

            </ScrollView>
        );
    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    }, cardProfile: {

        backgroundColor: "white",
        width: '100%',
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        flexDirection: 'column',
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 10,
        elevation: 1
    }, cardListProfile: {
        backgroundColor: 'white',
        marginTop: 15,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        width: '100%',
        elevation: 1
    }, cardIcon: {
        marginTop: 10,
        paddingVertical:10,
        width: "100%",
        alignItems:"center",
        backgroundColor:"white",
        elevation:1
    }
    , imageProfile: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        borderWidth: 3
    }
});