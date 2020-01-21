import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Switch,
    Modal,
    TouchableHighlight
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
class CariTiket extends Component {
    state = {
        modalVisible: false,
        swichValue: false
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    toggleSwitch = Value => {
        this.setState({ swichValue: Value })
    };
    render() {
        return (
            <View style={{ marginTop: 20, marginLeft: 10, backgroundColor: 'white', paddingTop: 10, paddingRight: 10, borderRadius: 10, marginRight: 10 }}>
                <View>
                    <Text style={{ paddingLeft: 10, fontWeight: '100' }}>Dari</Text>
                    <Image source={require('../../../../assets/promo/dari.png')} style={{ marginLeft: 10, marginTop: 5, height: 20, width: 20 }} />
                    <View style={{ marginTop: -20, marginLeft: 50, marginBottom: 10 }}>
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <View style={{ marginTop: 22 }}>
                                <View>
                                    <Text>Hello World!</Text>

                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                        <Text>Hide Modal</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Modal>

                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(true);
                            }}>
                            <Text style={{ fontWeight: 'bold' }}>Sultan Hasanuddin</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10, borderColor: 'silver', marginLeft: 14,marginRight:55 }}></View>
                    
                   
                </View>
                <View style={{ marginTop: 10, borderStyle: 'solid', }}>
                    <Text style={{ paddingLeft: 10, fontWeight: '100' }}>Ke</Text>
                    <Image source={require('../../../../assets/promo/ke.png')} style={{ marginLeft: 10, marginTop: 5, height: 20, width: 20 }} />
                    <View style={{ marginTop: -20, marginLeft: 50, marginBottom: 10 }}>
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <View style={{ marginTop: 22 }}>
                                <View>
                                    <Text>Hello World!</Text>

                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                        <Text>Hide Modal</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Modal>

                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(true);
                            }}>
                            <Text style={{ fontWeight: 'bold' }}>Sultan Hasanuddin</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10, borderColor: 'silver', marginLeft: 14 }}></View>
                </View>
                <View style={{ marginTop: 10, borderStyle: 'solid', }}>
                    <Text style={{ paddingLeft: 10, fontWeight: '100' }}>Pergi</Text>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center', marginLeft:220}}>
                        <Text>{this.state.swichValue ? 'Switch is ON' : 'Switch is OFF'}</Text>
                        <Switch style={{marginTop:40}}
                        onValueChange={this.toggleSwitch}
                        value={this.state.swichValue}
                        />
                    </View>
                    <Image source={require('../../../../assets/promo/pergi.png')} style={{ marginLeft: 10, marginTop: 10, height: 20, width: 20 }} />
                    <View style={{ marginTop: -20, marginLeft: 50, marginBottom: 10 }}>
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <View style={{ marginTop: 22 }}>
                                <View>
                                    <Text>Hello World!</Text>

                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                        <Text>Hide Modal</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Modal>

                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(true);
                            }}>
                            <Text style={{ fontWeight: 'bold' }}>21 Jan 2020</Text>
                        </TouchableHighlight>
                    </View>
                    <Text style={{ position: 'absolute', marginLeft: 250, fontWeight: '100' }}>Pulang-Pergi?</Text>
                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, paddingBottom: 15, borderColor: 'silver', marginLeft: 14 }}></View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ paddingLeft: 15, fontWeight: '100' }}>Penumpang</Text>
                    <Image source={require('../../../../assets/promo/penumpang.png')} style={{ marginLeft: 12, marginTop: 10, height: 20, width: 20 }} />
                    <View style={{ marginTop: -20, marginLeft: 50, marginBottom: 10 }}>
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <View style={{ marginTop: 22 }}>
                                <View>
                                    <Text>Hello World!</Text>

                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                        <Text>Hide Modal</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Modal>

                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(true);
                            }}>
                            <Text style={{ fontWeight: 'bold' }}>1 Dewasa</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, paddingBottom: 14, borderColor: 'silver', marginLeft: 14 }}></View>
                </View>

                <View style={{ marginLeft: 12, marginBottom: 20 }}>
                    <Text style={{ marginTop: 10, paddingLeft: 2, fontWeight: '100' }}>Kelas Penerbangan</Text>
                    <Image source={require('../../../../assets/promo/kelas.png')} style={{ marginTop: 12, height: 20, width: 20 }} />
                    <TextInput style={{ position: 'absolute', marginTop: 40, marginLeft: 37, fontWeight: 'bold' }}>Ekonomi</TextInput>
                </View>
                <View style={{ borderStyle: 'solid', borderBottomWidth: 1, paddingBottom: 1, borderColor: 'silver', marginLeft: 14 }}></View>

                <TouchableOpacity style={{ marginTop: 15, alignItems: 'center', backgroundColor: 'red', borderRadius: 10, marginLeft: 50, marginRight: 50, marginBottom: 20, paddingTop: 10, paddingBottom: 10 }}>
                    <Text style={{ color: 'white' }}>CARI PENERBANGAN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1,marginLeft:300,flexDirection:'row',alignContent:'center',alignItems:'center',marginBottom:20}}>
                    <Image source={require('../../../../assets/promo/up.png')} style={{marginBottom:715}} />
                </TouchableOpacity>
            </View>
            
        );
    }
}

export default CariTiket

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        justifyContent: 'center',
        height: 1,
        color: 'black'
    },
    placeholderText: {
        color: 'black',
        marginBottom: 40,
        marginLeft: 28
    },
    text: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 20,
        fontSize: 14,
        color: 'black',
        paddingLeft: 40,
        marginBottom: 40,
        fontWeight: 'bold'
    }
})



