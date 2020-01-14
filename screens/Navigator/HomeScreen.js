import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import firebase from 'firebase';
import * as GoogleSignIn from 'expo-google-sign-in';
class HomeScreen extends React.Component {
    render() {
        return (
            /* point */
            <ScrollView style={{marginHorizontal:17, paddingTop:16}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',borderRadius: 4,padding:20}}>
                    <Text style={{fontSize: 16,fontWeight:'bold'}}>Halo! Hisyam</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/logo/money.png')} style={{height: 16,width:16}}></Image>
                        <Text style={{fontSize: 16,fontWeight:'bold',paddingLeft: 5}}>15000 points</Text>
                    </View>
                </View>
                <View style={{marginHorizontal:1,alignContent:'center',paddingTop:25}}>
                    <TouchableOpacity style={{flexDirection:'row',alignContent:'center',backgroundColor:'white',borderRadius:4,padding:20}}>
                        <Image source={require('../../assets/logo/pesawat.png')} style={{backgroundColor:'red',borderRadius:8,justifyContent:'center',width:50,height:50}}></Image>
                        <Text style={{fontSize: 16,fontWeight:'bold',paddingTop:16,paddingHorizontal:17}}>Tiket Pesawat</Text>
                        <Image source={require('../../assets/logo/panahkanan.png')} style={{justifyContent:'center',width:30,height:30,marginLeft:90,marginTop:8}}></Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{paddingTop:12,paddingBottom:10}}>
                        <Text style={{fontSize:17,fontWeight:'bold',color:'#1C1C1C'}}>Promo</Text>
                    </View>
                    <ScrollView horizontal style={{flexDirection:'row'}}>
                        <View style={{}}>
                            <Image source={require('../../assets/promo/Makassar.jpg')} style={{width:340,height:150,borderRadius:10,resizeMode:'cover'}}/>
                            <Text style={{fontSize:14,fontWeight:'bold',position:'absolute',color:'white',paddingLeft:16,paddingTop:12}}>Makassar</Text>
                        </View>
                        <View style={{}}>
                            <Image source={require('../../assets/promo/bandung.jpg')} style={{width:340,height:150,borderRadius:10,marginHorizontal:10}}/>
                            <Text style={{fontSize:14,fontWeight:'bold',position:'absolute',color:'white',paddingLeft:16,paddingTop:12}}>Bandung</Text>
                        </View>
                        <View style={{}}>
                            <Image source={require('../../assets/promo/Istana-maimun.jpg')} style={{width:340,height:150,borderRadius:10,marginHorizontal:10}}/>
                            <Text style={{fontSize:14,fontWeight:'bold',position:'absolute',color:'white',paddingLeft:16,paddingTop:12}}>Istana Maimun</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={{flexDirection:'row', paddingTop:10,justifyContent:'space-between'}}>
                    <Text style={{fontWeight:'bold'}}>Recomended</Text>
                    <Text style={{fontWeight:'bold'}}>View More</Text>
                </View>
                <View style={{paddingTop:5,flexDirection:'row'}}>
                    <Image source={require('../../assets/promo/Makassar.jpg')} style={{width:130,height:150,borderRadius:4,resizeMode:'cover',marginTop:2}}/>
                    <View style={{flexDirection:'column'}}>
                        <Image source={require('../../assets/promo/bandung.jpg')} style={{width:210,height:75,borderRadius:4,marginHorizontal:40}}/>
                        <Image source={require('../../assets/promo/Istana-maimun.jpg')} style={{width:210,height:75,borderRadius:4,marginTop:2, marginHorizontal:40}}/>
                    </View>
                </View>
            </ScrollView> 
        );
    }
}
const styles = StyleSheet.create({

});
export default HomeScreen;