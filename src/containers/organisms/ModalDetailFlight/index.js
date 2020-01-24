import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Modal
} from "react-native";
import {createAppContainer} from 'react-navigation'
import {HeaderModalDetail} from '../../../components/molecules'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import TabRincianPenerbangan from '../TabRincianPenerbangan'
import TabRincianHarga from '../TabRincianHarga'
class ModalDetailFlight extends Component {
    render() {
        return (
            <Modal visible={this.props.visible} animationType="slide" style={styles.container}>
                <HeaderModalDetail title="Garuda" onPressClose={this.props.onClose}/>
                <TabContainer/>
            </Modal>
        );
    }
}

const TabDetailPenerbangan = createMaterialTopTabNavigator({
    RincianPenerbangan :{screen:TabRincianPenerbangan,navigationOptions:{
        tabBarLabel:'RINCIAN PENERBANGAN'}},
    RincianHarga:{screen:TabRincianHarga,navigationOptions:{
        tabBarLabel:'RINCIAN HARGA'}}
},{tabBarOptions:{activeTintColor:"black",inactiveTintColor: 'lightgray',style:{backgroundColor:"white"},indicatorStyle: { backgroundColor: 'red' }},})
const TabContainer = createAppContainer(TabDetailPenerbangan)
export default ModalDetailFlight;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});