import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Modal,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView

} from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { primaryColor } from '../../../styles/colors'
import { ModalHeader } from '../../../components/molecules'
import { Searchbar } from "react-native-paper";
import SwitchExample from '../../../components/molecules/Switch/index.js'
import Modals, { ModalContent, ModalTitle } from 'react-native-modals';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePicker from "../../../components/molecules/DatePicker"
import ReactNativePickerModule from 'react-native-picker-module'
import InputSpinner from "react-native-input-spinner";
import {Calendar} from "react-native-calendars"

class CariTiket extends Component {
    state = {
        modalVisible: false,
        modalVisible1: false,
        modalVisible2: false,
        modalVisible3: false,
        modalVisible4: false,
        switch1Value: false,
        selectedValue: null,
        data: [
            "Ekonomi",
            "Premium Ekonomi",
            "Bisnis",
            "First"
        ],

    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    setModalVisible1(visible1) {
        this.setState({ modalVisible1: visible1 });
    }
    setModalVisible2(visible2) {
        this.setState({ modalVisible2: visible2 });
    }
    setModalVisible3(visible3) {
        this.setState({ modalVisible3: visible3 });
    }
    setModalVisible4(visible4) {
        this.setState({ modalVisible4: visible4 });
    }
    toggleSwitch1 = (value) => {
        this.setState({ switch1Value: value })
        console.log('Switch 1 is: ' + 10)
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View >
                    <Text style={{ marginLeft: 40, top: 30, left: 10, fontWeight: '100' }}>Kota Asal</Text>
                    <Image source={require('../../../../assets/promo/dari.png')} style={{ marginTop: 20, marginLeft: 10 }}></Image>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ marginTop: 22 }}>
                            <View style={{
                                height: 50,
                                backgroundColor: primaryColor,
                                flexDirection: "row",
                                alignItems: "center",
                                elevation: 1,
                                marginBottom: 10,

                            }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Ionicons name={'ios-close'} color="white" size={34} style={{ left: 20 }} />
                                </TouchableOpacity>
                                <View style={{ flex: 5, alignItems: "center" }}>
                                    <Text style={{ color: "white", fontSize: 17 }}>Kota Asal</Text>
                                </View>
                            </View>
                            <Searchbar style={{ borderRadius: 20, height: 40, marginHorizontal: 10 }}>
                                <Text style={{ fontWeight: '100' }}>Cari Bandara</Text>
                            </Searchbar>
                            <ScrollView>
                                <View style={{
                                    backgroundColor: "#E6E6E6",
                                    height: 15,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    top: 8
                                }}>
                                    <Text style={{ color: "#6C6C6C", fontSize: 11, fontWeight: '100' }}>Populer</Text>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Makassar</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>UPG-Hasanuddin</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>

                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>

                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>

                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>
                                <View style={{
                                    backgroundColor: "#E6E6E6",
                                    height: 15,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    top: 15
                                }}>
                                    <Text style={{ color: "#6C6C6C", fontSize: 11, fontWeight: '100' }}>Semua Bandara/Kota</Text>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>
                            </ScrollView>
                        </View>
                    </Modal>

                    <TouchableOpacity
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>
                        <Text style={{ left: 50, bottom: 10, fontWeight: "bold" }}>Sultan Hasanuddin (UPG)</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ borderStyle: 'solid', borderBottomWidth: 1, bottom: 4, borderColor: 'silver', marginLeft: 14, marginRight: 20 }}></View>

                <View style={{ bottom: 20 }}>
                    <Text style={{ marginLeft: 40, top: 30, left: 10, fontWeight: '100' }}>Kota Tujuan</Text>
                    <Image source={require('../../../../assets/promo/ke.png')} style={{ marginTop: 20, marginLeft: 10 }}></Image>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible1}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ marginTop: 22 }}>
                            <View style={{
                                height: 50,
                                backgroundColor: primaryColor,
                                flexDirection: "row",
                                alignItems: "center",
                                elevation: 1,
                                marginBottom: 10,

                            }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setModalVisible1(!this.state.modalVisible1);
                                    }}>
                                    <Ionicons name={'ios-close'} color="white" size={34} style={{ left: 20 }} />
                                </TouchableOpacity>
                                <View style={{ flex: 5, alignItems: "center" }}>
                                    <Text style={{ color: "white", fontSize: 17 }}>Kota Tujuan</Text>
                                </View>
                            </View>
                            <Searchbar style={{ borderRadius: 20, height: 40, marginHorizontal: 10 }}>
                                <Text style={{ fontWeight: '100' }}>Cari Bandara</Text>
                            </Searchbar>
                            <ScrollView>
                                <View style={{
                                    backgroundColor: "#E6E6E6",
                                    height: 15,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    top: 8
                                }}>
                                    <Text style={{ color: "#6C6C6C", fontSize: 11, fontWeight: '100' }}>Populer</Text>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Makassar</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>UPG-Hasanuddin</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>

                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>

                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>

                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>
                                <View style={{
                                    backgroundColor: "#E6E6E6",
                                    height: 15,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    top: 15
                                }}>
                                    <Text style={{ color: "#6C6C6C", fontSize: 11, fontWeight: '100' }}>Semua Bandara/Kota</Text>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -2, left: 15 }}></Image>
                                </View>
                            </ScrollView>
                        </View>
                    </Modal>

                    <TouchableOpacity
                        onPress={() => {
                            this.setModalVisible1(true);
                        }}>
                        <Text style={{ left: 50, bottom: 10, fontWeight: 'bold' }}>Surabaya (SUB)</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ borderStyle: 'solid', borderBottomWidth: 1, bottom: 22, borderColor: 'silver', marginLeft: 14, marginRight: 20 }}></View>

                <View style={{ bottom: 40 }}>
                    <Text style={{ marginLeft: 40, top: 30, left: 10, fontWeight: '100' }}>Tanggal Berangkat</Text>
                    <Image source={require('../../../../assets/promo/pergi.png')} style={{ marginTop: 20, marginLeft: 10, width: 30, height: 30 }}></Image>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible2}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ marginTop: 22 }}>
                            <View style={{
                                height: 50,
                                backgroundColor: primaryColor,
                                flexDirection: "row",
                                alignItems: "center",
                                elevation: 1,
                                marginBottom: 10,

                            }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setModalVisible2(!this.state.modalVisible2);
                                    }}>
                                    <Ionicons name={'ios-close'} color="white" size={34} style={{ left: 20 }} />
                                </TouchableOpacity>
                                <View style={{ flex: 5, alignItems: "center" }}>
                                    <Text style={{ color: "white", fontSize: 17 }}>Tanggal Berangkat</Text>
                                </View>
                            </View>
                            <View>
                                <Calendar style={{
                                    borderWidth:1,
                                    borderColor:'gray',
                                    height: 350
                                }}
                                theme={{
                                    backgroundColor:'#ffffff',
                                    calendarBackground:'#ffffff',
                                    textSectionTitleColor:'red',
                                    selectedDayBackgroundColor:"red",
                                    selectedDayTextColor:'#ffffff',
                                    todayTextColor:'red',
                                    dayTextColor:'red',
                                    textDisabledColor:'#d9e1e8',
                                    dotColor:'black',
                                    selectedDotColor:'#ffffff',
                                    arrowColor:'orange',
                                    monthTextColor:'red',
                                    textDayFontSize:16,
                                    textMonthFontSize:16,
                                    textDayHeaderFontSize:16
                                }}
                                />
                            </View>
                        </View>
                    </Modal>
                    <TouchableOpacity
                        onPress={() => {
                            this.setModalVisible2(true);
                        }}>
                        <Text style={{ left: 50, bottom: 10, fontWeight: 'bold' }}>23 Januari 2020</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ borderStyle: 'solid', borderBottomWidth: 1, bottom: 42, borderColor: 'silver', marginLeft: 14, marginRight: 20 }}></View>

                <View style={{ bottom: 60 }}>
                    <Text style={{ marginLeft: 40, top: 30, left: 10, fontWeight: '100' }}>Penumpang</Text>
                    <Image source={require('../../../../assets/promo/penumpang.png')} style={{ marginTop: 20, marginLeft: 10, width: 30, height: 30 }}></Image>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible4}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ marginTop: 22 }}>
                            <View style={{
                                height: 50,
                                backgroundColor: primaryColor,
                                flexDirection: "row",
                                alignItems: "center",
                                elevation: 1,
                                marginBottom: 10,

                            }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setModalVisible4(!this.state.modalVisible4);
                                    }}>
                                    <Ionicons name={'ios-close'} color="white" size={34} style={{ left: 20 }} />
                                </TouchableOpacity>
                                <View style={{ flex: 5, alignItems: "center" }}>
                                    <Text style={{ color: "white", fontSize: 17 }}>Penumpang</Text>
                                </View>
                                <View>
                                    <TouchableOpacity  onPress={() => {
                                        this.setModalVisible4(!this.state.modalVisible4);
                                    }}>
                                        <Text style={{ right: 14, fontSize: 16, color: "white", top: 2 }}>Selesai</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 10, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Dewasa</Text>
                                <Text style={{ marginLeft: 10, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>12 tahun ke atas</Text>
                                <InputSpinner
                                    max={7}
                                    min={1}
                                    step={1}
                                    colorMax={"red"}
                                    colorMin={"red"}
                                    value={this.state.number}
                                    onChange={(num) => {
                                        console.log(num);
                                    }}
                                    style={{left:210,bottom:20}}

                                />
                                <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: -10, borderColor: 'silver', marginLeft: 20, marginRight: 1 }}></View>
                            </View>
                            <View style={{ top: -10 }}>
                                <Text style={{ marginLeft: 10, top: 10, left: 10, fontWeight: '300', fontSize: 16 }}>Anak</Text>
                                <Text style={{ marginLeft: 10, top: 15, left: 10, fontWeight: '100', fontSize: 10 }}>2 - 11 tahun</Text>
                                <InputSpinner
                                    max={6}
                                    min={0}
                                    step={0}
                                    colorMax={"red"}
                                    colorMin={"red"}
                                    value={this.state.number}
                                    onChange={(num) => {
                                        console.log(num);
                                    }}
                                    style={{left:210,bottom:25}}

                                />
                                <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: -15, borderColor: 'silver', marginLeft: 20, marginRight: 1 }}></View>
                            </View>
                            <View style={{ top: -30 }}>
                                <Text style={{ marginLeft: 10, top: 10, left: 10, fontWeight: '300', fontSize: 16 }}>Bayi</Text>
                                <Text style={{ marginLeft: 10, top: 15, left: 10, fontWeight: '100', fontSize: 10 }}>Di bawah 2 tahun</Text>
                                <InputSpinner
                                    max={1}
                                    min={0}
                                    step={0}
                                    colorMax={"red"}
                                    colorMin={"red"}
                                    value={this.state.number}
                                    onChange={(num) => {
                                        console.log(num);
                                    }}
                                    style={{left:210,bottom:20}}

                                />
                                <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: -15, borderColor: 'silver', marginLeft: 20, marginRight: 1 }}></View>
                            </View>
                        </View>
                    </Modal>

                    <TouchableOpacity
                        onPress={() => {
                            this.setModalVisible4(true);
                        }}>
                        <Text style={{ left: 50, bottom: 10, fontWeight: 'bold' }}>1 Dewasa</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ borderStyle: 'solid', borderBottomWidth: 1, bottom: 62, borderColor: 'silver', marginLeft: 14, marginRight: 20 }}></View>

                <View style={{ bottom: 82 }}>
                    <Text style={{ marginLeft: 40, top: 30, left: 10, fontWeight: '100' }}>Kelas Kabin</Text>
                    <Image source={require('../../../../assets/promo/kelas.png')} style={{ marginTop: 20, marginLeft: 10, width: 30, height: 30 }}></Image>
                    <TouchableOpacity onPress={() => { this.pickerRef.show() }}>
                        <Text style={{ color: "black", marginLeft: 50, bottom: 10, fontWeight: 'bold' }}>Ekonomi</Text>
                    </TouchableOpacity>
                </View>
                <ReactNativePickerModule
                    pickerRef={e => this.pickerRef = e}
                    value={this.state.selectedValue}
                    title={"Kelas Penerbangan"}
                    items={this.state.data}
                    onValueChange={(index) => {
                        this.setState({
                            selectedValue: index
                        })
                    }} />
                <View style={{ borderStyle: 'solid', borderBottomWidth: 1, bottom: 82, borderColor: 'silver', marginLeft: 14, marginRight: 20 }}></View>
                <TouchableOpacity>
                    <Image source={require('../../../../assets/promo/up.png')} style={{ bottom: 430, left: 330 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: "red",
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                    borderRadius: 20,
                    alignItems: "center",
                    marginRight: 40,
                    marginLeft: 40,
                    bottom: 80
                }}
                onPress={()=>{this.props.navigation.navigate("ListPenerbangan")}}
                >
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: 'white' }}>Cari Penerbangan</Text>
                </TouchableOpacity>
            </View >

        );
    }
}




export default CariTiket

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, filterButton: {
        flexDirection: "row",
        height: 35,
        width: 100,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 5
    }, changeDateButton: {

        flexDirection: "row",
        height: 35,
        width: 100,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 5
    }
});

