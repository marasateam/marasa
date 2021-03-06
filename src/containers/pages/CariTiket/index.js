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
import { ModalHeader, HeaderModalDetail } from '../../../components/molecules'
import { Searchbar } from "react-native-paper";
import SwitchExample from '../../../components/molecules/Switch/index.js'
import Modals, { ModalContent, ModalTitle } from 'react-native-modals';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePicker from "../../../components/molecules/DatePicker"
import ReactNativePickerModule from 'react-native-picker-module'
import InputSpinner from "react-native-input-spinner";
import { Calendar } from "react-native-calendars"
import { ModalFilter, ModalUrutkanPenerbangan, ModalDetailFlight } from '../../organisms'


class CariTiket extends Component {
    state = {
        modalVisible: false,
        modalVisible1: false,
        modalVisible2: false,
        modalVisible3: false,
        modalVisible4: false,
        switch1Value: false,
        selectedValue: null,
        modalVisible5:false,
        sortFlight2: [
            { label: 'Ekonomi', value: 0 },
            { label: 'Premium Ekonomi', value: 1 },
            { label: 'Bisnis', value: 0 },
            { label: 'First', value: 1 }
        ], value: 0

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
            <View style={{ flex: 1,backgroundColor:'white' }}>
                <TouchableOpacity  onPress={() => {
                            this.setModalVisible(true);
                        }}> 
                    <Text style={{ marginLeft: 40, top: 30, left: 10, fontWeight: '100' }}>Kota Asal</Text>
                    <Image source={require('../../../../assets/promo/dari.png')} style={{ marginTop: 30, marginLeft: 15,height:25, width:25 }}></Image>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <ModalHeader title="Kota asal" onPressClose={()=> this.setState({modalVisible:false})}/>
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
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>

                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>

                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>

                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
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
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>
                            </ScrollView>
                        
                    </Modal>

                    <View>
                        <Text style={{ left: 50, bottom: 10, fontWeight: "bold" }}>Sultan Hasanuddin (UPG)</Text>
                    </View>

                </TouchableOpacity>
                <View style={{ borderStyle: 'solid', borderBottomWidth: 1, bottom: 4, borderColor: 'silver', marginLeft: 14, marginRight: 20 }}></View>

                <TouchableOpacity style={{ bottom: 20 }}  onPress={() => {
                            this.setModalVisible1(true);
                        }}>
                    <Text style={{ marginLeft: 40, top: 30, left: 10, fontWeight: '100' }}>Kota Tujuan</Text>
                    <Image source={require('../../../../assets/promo/ke.png')} style={{ marginTop: 30, marginLeft: 15,height:25, width:25 }}></Image>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible1}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                       <ModalHeader title="Kota Tujuan" onPressClose={()=> this.setState({modalVisible1:false})}/>
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
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>

                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>

                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>

                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
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
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>
                                <View style={{ bottom: -10 }}>
                                    <Text style={{ marginLeft: 40, top: 20, left: 10, fontWeight: '300', fontSize: 16 }}>Surabaya</Text>
                                    <Text style={{ marginLeft: 40, top: 25, left: 10, fontWeight: '100', fontSize: 10 }}>SUB-Juanda</Text>
                                    <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: 30, borderColor: 'silver', marginLeft: 50, marginRight: 1 }}></View>
                                    <Image source={require('../../../../assets/promo/airport.png')} style={{ top: -5, left: 15,height:25, width:25 }}></Image>
                                </View>
                            </ScrollView>
                    
                    </Modal>

                    <View>
                        <Text style={{ left: 50, bottom: 10, fontWeight: 'bold' }}>Surabaya (SUB)</Text>
                    </View>

                </TouchableOpacity>
                <View style={{ borderStyle: 'solid', borderBottomWidth: 1, bottom: 22, borderColor: 'silver', marginLeft: 14, marginRight: 20 }}></View>

                <TouchableOpacity style={{ bottom: 40 }} onPress={() => {
                            this.setModalVisible2(true);
                        }}>
                    <Text style={{ marginLeft: 40, top: 30, left: 10, fontWeight: '100' }}>Tanggal Berangkat</Text>
                    <Image source={require('../../../../assets/promo/pergi.png')} style={{ marginTop: 30, marginLeft: 15,height:25, width:25 }}></Image>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible2}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <ModalHeader title="Tanggal Berangkat" onPressClose={()=> this.setState({modalVisible2:false})}/>
                                <Calendar style={{
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    height: 350
                                }}
                                    theme={{
                                        backgroundColor: '#ffffff',
                                        calendarBackground: '#ffffff',
                                        textSectionTitleColor: 'red',
                                        selectedDayBackgroundColor: "red",
                                        selectedDayTextColor: '#ffffff',
                                        todayTextColor: 'red',
                                        dayTextColor: 'red',
                                        textDisabledColor: '#d9e1e8',
                                        dotColor: 'black',
                                        selectedDotColor: '#ffffff',
                                        arrowColor: 'orange',
                                        monthTextColor: 'red',
                                        textDayFontSize: 16,
                                        textMonthFontSize: 16,
                                        textDayHeaderFontSize: 16
                                    }}
                                />
                    </Modal>
                    <View>
                        <Text style={{ left: 50, bottom: 10, fontWeight: 'bold' }}>23 Januari 2020</Text>
                    </View>

                </TouchableOpacity>
                <View style={{ borderStyle: 'solid', borderBottomWidth: 1, bottom: 42, borderColor: 'silver', marginLeft: 14, marginRight: 20 }}></View>

                <TouchableOpacity style={{ bottom: 60 }} onPress={() => {
                            this.setModalVisible4(true);
                        }}>
                    <Text style={{ marginLeft: 40, top: 30, left: 10, fontWeight: '100' }}>Penumpang</Text>
                    <Image source={require('../../../../assets/promo/penumpang.png')} style={{ marginTop: 30, marginLeft: 15,height:25, width:25}}></Image>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible4}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                       <ModalHeader title="Penumpang" onPressClose={()=> this.setState({modalVisible4:false})} >
                       <TouchableOpacity onPress={() => {
                                        this.setModalVisible4(!this.state.modalVisible4);
                                    }}>
                                        <Text style={{ left:10, fontSize: 16, color: "white", top: 2 }}>Selesai</Text>
                                    </TouchableOpacity>
                       </ModalHeader>
                                   
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
                                    style={{ left: 210, bottom: 20 }}

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
                                    style={{ left: 210, bottom: 25 }}

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
                                    style={{ left: 210, bottom: 20 }}

                                />
                                <View style={{ borderStyle: 'solid', borderBottomWidth: 1, top: -15, borderColor: 'silver', marginLeft: 20, marginRight: 1 }}></View>
                            </View>
                    </Modal>

                    <View>
                        <Text style={{ left: 50, bottom: 10, fontWeight: 'bold' }}>1 Dewasa</Text>
                    </View>

                </TouchableOpacity>
                <View style={{ borderStyle: 'solid', borderBottomWidth: 1, bottom: 62, borderColor: 'silver', marginLeft: 14, marginRight: 20 }}></View>

                <TouchableOpacity style={{ bottom: 82 }} onPress={()=> this.setState({modalVisible5:true})}>
                    <Text style={{ marginLeft: 40, top: 30, left: 10, fontWeight: '100' }}>Kelas Kabin</Text>
                    <Image source={require('../../../../assets/promo/kelas.png')} style={{ marginTop: 20, marginLeft: 15,height:25, width:25 }}></Image>
                    <View style={styles.sortButton} >
                        <Text style={{ color: "black", marginLeft: 50, bottom:10,fontWeight:'bold' }}>Ekonomi</Text>
                    </View>
                </TouchableOpacity>
                <Modals.BottomModal
                    visible={this.state.modalVisible5}
                    onTouchOutside={() => this.setState({modalVisible5:false})}
                    height={0.5}
                    width={1}
                    onSwipeOut={this.props.onDismiss}
                    modalTitle={
                        <ModalTitle
                            title="Kelas Penerbangan"
                            hasTitleBar
                        />
                    }
                >
                    <ModalContent
                        style={{
                            flex: 1,
                            backgroundColor: 'fff',

                        }}
                    >
                        <RadioForm
                            radio_props={this.state.sortFlight2}
                            initial={0}
                            onPress={(value) => { this.setState({ value: value }) }}
                            style={{ flex: 1, justifyContent: "space-around" }}
                            animation={false}
                            buttonColor={'#F3225A'}
                            selectedButtonColor={'#F3225A'}
                            buttonSize={11}
                            buttonOuterSize={22}
                            labelStyle={{ fontSize: 16 }}
                        />
                    </ModalContent>
                </Modals.BottomModal>

                <View style={{ borderStyle: 'solid', borderBottomWidth: 1, bottom: 82, borderColor: 'silver', marginLeft: 14, marginRight: 20 }}></View>
                <TouchableOpacity style={{
                    backgroundColor: "red",
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                    borderRadius: 20,
                    alignItems: "center",
                    marginRight: 40,
                    marginLeft: 40,
                    bottom: 60
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

