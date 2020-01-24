import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class UploadFile extends Component {
    render() {
        return (
                <View style={{flex:1,backgroundColor:'#9B9B9B',}}>
                    <View style={{backgroundColor:'#FFFFFF',borderRadius:7, height:180, 
                        marginHorizontal:12, marginTop:12 }}>
                        <Text style={{fontSize:15,
                        marginTop:16, marginHorizontal:12,
                        borderStyle:'solid' }}>Upload Surat Jalan</Text>
                        <View style={{borderStyle:'solid', borderBottomWidth:1, borderColor:'#B8B8B8', marginHorizontal:12,}}></View>
                        
                        <View style={{marginLeft:12}}>
                            <Text style={{fontSize:10, color:'#B8B8B8',}}
                            >Upload Surat jalan Untuk di Verifikasi Oleh admin</Text>
                        </View>

                        <TouchableOpacity>
                            <View style={{alignItems:'center', justifyContent:'center', marginTop:30, }}>
                                <Image source={require('../../../../assets/logo/upload.png')} style={{width:50,height:50}}/>
                                <Text style={{marginTop:10,fontSize:10, }}>Upload File</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                    {/* <View style={{marginTop:315,}} >
                        <Button
                            title = ""
                            color = "red" style={{}}
                        />
                    </View> */}
                </View>
        );
    }
}
export default UploadFile;
