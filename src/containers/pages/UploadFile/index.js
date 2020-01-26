import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import ImagePicker from "react-native-image-picker";

// const options = {
//         title: 'Pilih Foto',
//         takePhotoButtonTitle:'ambil Gambar',
//         chooseFromLibraryButtonTitle: 'Pilih Fofo dipenyimpanan',
//         quality:1
// };

class UploadFile extends Component {
    render() {
        return (
                // Untuk Background
                <View style={{flex:1,backgroundColor:'#9B9B9B'}}>
                    {/* Untuk Border*/}
                    <TouchableOpacity>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:60,
                    borderWidth:1, marginHorizontal:50, borderRadius:5, height:60, borderColor:'#ffffff'}}>
                        <Image source={require('../../../../assets/icon/upload.png')} style={{width:20,height:20}}/>
                        <Text style={{marginLeft:12, fontSize:10, fontWeight:'bold'}}>Upload Surat Jalan</Text>
                    </View>
                    </TouchableOpacity>
                    {/* Untuk gambar */}
                    <View style={{marginTop:30, marginHorizontal:50,}}>
                        <View style={{flexDirection:'row', }}>
                            <View style={{backgroundColor:'#fd5e53', borderRadius:5, height:150, alignContent:'center',
                            alignItems:'center', flex:1}}>
                                <Image source={require('../../../../assets/logo/file2.jpg')} style={{width:70,height:90, marginTop:19}}/>
                                <Text style={{fontSize:10, fontWeight:'bold',
                                marginTop:10, color:'#ffffff'
                                }}> Surat Jalan</Text>
                            </View>
                            <View style={{ flex:1, marginLeft:19,backgroundColor:'#fd5e53', borderRadius:5, height:150, alignContent:'center',
                            alignItems:'center'}}>
                                <Image source={require('../../../../assets/logo/file2.jpg')} style={{width:70,height:90, marginTop:19}}/>
                                <Text style={{fontSize:10, fontWeight:'bold',
                                marginTop:12, color:'#ffffff'
                                }}> Surat Jalan</Text>
                            </View>
                        </View>
                    </View>
                </View>
        );
    }
}
export default UploadFile;
