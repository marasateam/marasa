import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { NamePoint, ButtonMenu } from '../../../components/molecules';
import { PromoCard } from '../../../components/atoms';
import Recomended from '../../../containers/organisms/Recomended';
import firebase from 'firebase';
class HomeScreen extends React.Component {
    state={
        user:{}
    }
    componentDidMount(){
        
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                this.setState({ user: user });
            }
        });
    }
    render() {
        return (
            <ScrollView style={{ marginHorizontal: 17, paddingTop: 16 }} showsVerticalScrollIndicator={false}>
                <NamePoint name={this.state.user.displayName} Image={require('../../../../assets/icon/coin.png')} Poin="120" />
                <ButtonMenu ImageIcon={require('../../../../assets/logo/pesawat.png')} ImageArrow={require('../../../../assets/promo/ic.png')} onPress={() => { this.props.navigation.navigate("CariTiket") }} />
                <View>
                    <View style={{ paddingTop: 12, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1C1C1C' }}>Promo</Text>
                    </View>
                    <ScrollView horizontal style={{ flexDirection: 'row' }}>
                        <PromoCard Image={require('../../../../assets/promo/Makassar.jpg')} />
                        <PromoCard Image={require('../../../../assets/promo/bandung.jpg')} />
                        <PromoCard Image={require('../../../../assets/promo/Istana-maimun.jpg')} />
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 10, justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold' }}>Recomended</Text>
                    <Text style={{ fontWeight: 'bold' }}>View More</Text>
                </View>
                <Recomended />
                <View style={{ height: 200, justifyContent: "space-around" }}>
                    <Button title="List Penerbangan" onPress={() => { this.props.navigation.navigate("ListPenerbangan") }} />
                    <Button title="Upload File" onPress={() => { this.props.navigation.navigate("UploadFile") }} />
                    <Button title="Detail Pemesanan" onPress={() => { this.props.navigation.navigate("DetailPemesanan") }} />
                </View>
            </ScrollView>


        );
    }
}
const styles = StyleSheet.create({

});
export default HomeScreen;