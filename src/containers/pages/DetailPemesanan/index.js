import React, { Component } from "react";
import { Dropdown } from 'react-native-material-dropdown'
import {Hoshi} from 'react-native-textinput-effects'
import { TextInput } from 'react-native-paper';
import { Picker } from 'react-native';
import { 
    View,
    Text,
    StyleSheet,
    Icons,
    Image,
    ScrollView,
    Button,
    KeyboardAvoidingView,
    keyboardVerticalOffset,
    Modal,
    TouchableHighlight

} from "react-native";

class DetailPemesanan extends Component {
    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    
    render() {
        let data = [{
            value: 'Tuan',
          }, {
            value: 'Nyonya',
          }, {
            value: 'Nona',
          }];

          
        return (
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={keyboardVerticalOffset}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <View style={{marginHorizontal:12,flexDirection:'row',flex:1, marginTop:15, borderRadius:5, alignContent:'center',alignItems:'center', marginBottom:12}}>
                    <Image source={require('../../../../assets/icon/buku.png')} style={{height:30, width:30}} ></Image>
                    <Text style={{fontSize:15,fontWeight:'bold',color:'#9B9B9B',marginHorizontal:9}}>Informasi Kontak</Text>
                </View> 
                {/* untuk Modal dropdown*/}
                <View style={{marginHorizontal:12,backgroundColor:'#FFFFFF', marginTop:6,borderRadius:5}}>
                <View>
                    <Dropdown style={{marginHorizontal:9, borderRadius:30}}
                        label='Titel'
                        data={data}
                    />
                </View>
                   <View>
                        <Hoshi
                        style={{backgroundColor:'#fffff',}}
                        label='Nama Depan'
                        />
                        <Hoshi
                        style={{backgroundColor:'#fffff',}}
                        label='Nama Belakang'
                        />
                    </View>

                    <View>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{width:80,height:1}}>
                            <Hoshi Dropdown 
                                label='+62'
                                data={data}
                            />
                        </View>
                        <Hoshi style={{flex:1}}
                        label={"Nomor Telpon"}
                        />
                        </View>
                    </View>
                    <View>
                        <Hoshi
                        style={{backgroundColor:'#fffff',}}
                        label='Nama Email'
                        />
                    </View>
                </View> 
                <View style={{marginHorizontal:17, flex:1, flexDirection:'row', marginTop:20, alignItems:'center'}}>
                    <Image source={require('../../../../assets/icon/buku.png')} style={{height:30, width:30}} ></Image>
                    <Text style={{fontSize:15,fontWeight:'bold',color:'#9B9B9B', marginHorizontal:9}}>Pesawat</Text>
                </View>

                {/* Untuk Penumpang */}
                <View style={{backgroundColor:'#ffffff', marginTop:20, borderRadius:5,height:90}}>
                    <View style={{marginHorizontal:12,alignItems:'center', flexDirection:'row'}}>
                        <Image source={require('../../../../assets/logo/lion.png')} style={{width:100,height:25}}/>
                        <Text style={{fontSize:12, marginHorizontal:12}}>Mamuju - Makassar</Text>
                    </View>
                        <Text style={{fontSize:12, marginHorizontal:12, color:'#9B9B9B',marginBottom:8}}>Rabu, 12 Oktober 2019, 18:06 MJU - 19:00 UPG</Text>
                    <View style={{marginHorizontal:12,borderWidth:1, borderColor:'red', borderRadius:8, height:40,flexDirection:'row', 
                    flex:1, alignContent:'center', alignItems:'center'}}>
                        <Text style={{ marginHorizontal:10 }}>Data Penumpang</Text>
                        <TouchableHighlight
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>
                        <Image source={require('../../../../assets/logo/plus.png')} style={{width:20,height:20, marginLeft:170}}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{marginTop: 22}}>
                    <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                        <View style={{marginTop: 22}}>
                            <View>
                            <View style={{marginHorizontal:12,backgroundColor:'#FFFFFF', marginTop:6,borderRadius:5}}>
                <View>
                    <Dropdown style={{marginHorizontal:9, borderRadius:30}}
                        label='Titel'
                        data={data}
                    />
                </View>
                   <View>
                        <Hoshi
                        style={{backgroundColor:'#fffff',}}
                        label='Nama Depan'
                        />
                        <Hoshi
                        style={{backgroundColor:'#fffff',}}
                        label='Nama Belakang'
                        />
                    </View>
                    <View>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{width:80,height:1}}>
                            <Hoshi Dropdown 
                                label='+62'
                                data={data}
                            />
                        </View>
                        <Hoshi style={{flex:1}}
                        label={"Nomor Telpon"}
                        />
                        </View>
                    </View>
                    <View>
                        <Hoshi
                        style={{backgroundColor:'#fffff',}}
                        label='Nama Email'
                        />
                    </View>
                    </View>
                </View>
                        <View style={{paddingTop:12,alignContent:'center',flexDirection:'row',marginHorizontal:17}}>
                        <TouchableHighlight
                            onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text style={{borderWidth:0.5,}}>Close</Text>
                        </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <Button
                    title = "Lanjutkan"
                    color = "red" style={{}}
                />
                </View>
            </View>
            </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

export default DetailPemesanan;