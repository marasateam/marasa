import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView
} from "react-native";
import { GiftedChat } from 'react-native-gifted-chat'

class PesanChat extends Component {
    state = {
        messages: [],
    }
    componentDidMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hai ada yang bisa kami bantu .?',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }
    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }
    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }}
            behavior="padding"
            keyboardVerticalOffset={Platform.select({
              ios: () => 0,
              android: () => 100
            })()}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
            </KeyboardAvoidingView>
        );
    }
}
export default PesanChat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});