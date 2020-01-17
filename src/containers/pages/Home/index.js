import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import {NamePoint, ButtonMenu, RecomendedCard} from '../../../components/molecules';
import {PromoCard} from '../../../components/atoms';
import Recomended from '../../../containers/organisms/Recomended';
import firebase from 'firebase';
import * as GoogleSignIn from 'expo-google-sign-in';
class HomeScreen extends React.Component {
    state = { user: {}, loginMethod: ""};
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                this.setState({ user: user });
            }
        })}
    render() {
        return (
            /* point */
            <ScrollView style={{marginHorizontal:17, paddingTop:12}} showsVerticalScrollIndicator={false}>
                <NamePoint name={this.state.user.displayName} point="250" Image={require('../../../../assets/icon/coin.png')}/>
                <ButtonMenu ImageIcon={require('../../../../assets/logo/pesawat.png')}  /> 
                <View>
                    <View style={{paddingTop:12,paddingBottom:10}}>
                        <Text style={{fontSize:17,fontWeight:'bold',color:'grey'}}>Promo</Text>
                    </View>
                    <ScrollView horizontal style={{flexDirection:'row'}}>
                        <PromoCard Image={require('../../../../assets/promo/Makassar.jpg')}/>
                        <PromoCard Image={require('../../../../assets/promo/bandung.jpg')}/>
                        <PromoCard Image={require('../../../../assets/promo/Istana-maimun.jpg')}/>
                    </ScrollView>
                </View>
                <View style={{flexDirection:'row', paddingTop:10,justifyContent:'space-between'}}>
                    <Text style={{fontWeight:'bold',color:'grey'}}>Rekomendasi</Text>
                </View>
                   <Recomended />
            </ScrollView> 
        );
    }
}
const styles = StyleSheet.create({

});
export default HomeScreen;