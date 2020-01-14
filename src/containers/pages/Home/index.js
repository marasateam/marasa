import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import firebase from 'firebase';
import * as GoogleSignIn from 'expo-google-sign-in';
import {NamePoint, ButtonMenu, RecomendedCard} from '../../../components/molecules';
import {PromoCard} from '../../../components/atoms';
import Recomended from '../../../containers/organisms/Recomended';
class HomeScreen extends React.Component {
    render() {
        return (
            /* point */
            <ScrollView style={{marginHorizontal:17, paddingTop:16}}>
                <NamePoint Image={require('../../../../assets/logo/Money.png')}/>
                <ButtonMenu ImageIcon={require('../../../../assets/logo/pesawat.png')}  ImageArrow={require('../../../../assets/logo/panahkanan.png')}/> 
                <View>
                    <View style={{paddingTop:12,paddingBottom:10}}>
                        <Text style={{fontSize:17,fontWeight:'bold',color:'#1C1C1C'}}>Promo</Text>
                    </View>
                    <ScrollView horizontal style={{flexDirection:'row'}}>
                        <PromoCard Image={require('../../../../assets/promo/Makassar.jpg')}/>
                        <PromoCard Image={require('../../../../assets/promo/bandung.jpg')}/>
                        <PromoCard Image={require('../../../../assets/promo/Istana-maimun.jpg')}/>
                    </ScrollView>
                </View>
                <View style={{flexDirection:'row', paddingTop:10,justifyContent:'space-between'}}>
                    <Text style={{fontWeight:'bold'}}>Recomended</Text>
                    <Text style={{fontWeight:'bold'}}>View More</Text>
                </View>
                   <Recomended />
            </ScrollView> 
        );
    }
}
const styles = StyleSheet.create({

});
export default HomeScreen;