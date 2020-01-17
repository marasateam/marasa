import React, { Component } from "react";
import {
    View,
    Text,
} from "react-native";

const LoginMethodeIcon = (props) => {
    switch (props.loginMethod) {
        case "FACEBOOK": {
            return (
                <View style={{ paddingVertical: 5 }}>
                    <View style={{
                        borderColor: 'white',
                        borderWidth: 1,
                        justifyContent: "center",
                        alignSelf: "baseline",
                        borderRadius: 20,
                        paddingHorizontal: 7, backgroundColor: "#3b5998"
                    }}>
                        <Text style={{ color: "white" }}>Facebook</Text>

                    </View>
                </View>
            )
        }
        case "GMAIL": {
            return (
                <View style={{ paddingVertical: 5 }}>
                    <View style={{
                        borderColor: 'black',
                        borderWidth: 1,
                        justifyContent: "center",
                        alignSelf: "baseline",
                        borderRadius: 20,
                        paddingHorizontal: 7, backgroundColor: "white"
                    }}>
                        <Text style={{ color: "black" }}>Gmail</Text>
                    </View>
                </View>
            )
        }
        case "EMAIL": {
            return (
                <View style={{ paddingVertical: 5 }}>
                    <View style={{
                        borderColor: 'black',
                        borderWidth: 1,
                        justifyContent: "center",
                        alignSelf: "baseline",
                        borderRadius: 20,
                        paddingHorizontal: 7, backgroundColor: "white"
                    }}>
                        <Text style={{ color: "black" }}>Email</Text>
                    </View>
                </View>
            )
        }
        default:{
            return(
                <View style={{ paddingVertical: 5 }}>
                    <View style={{
                        borderColor: 'black',
                        borderWidth: 1,
                        justifyContent: "center",
                        alignSelf: "baseline",
                        borderRadius: 20,
                        paddingHorizontal: 7, backgroundColor: "white"
                    }}>
                        <Text style={{ color: "black" }}>Email</Text>
                    </View>
                </View>
            )
        }
    }

}
export default LoginMethodeIcon;
