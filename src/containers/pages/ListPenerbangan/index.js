import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import { ModalFilter, ModalUrutkanPenerbangan,ModalDetailFlight } from '../../organisms'
import { JumlahPenerbangan } from '../../../components/atoms'


import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons'
import { FilterAndSortButton, CardPenerbangan } from '../../../components/molecules'


class ListPenerbangan extends Component {
    state = {
        modalFilter: false,
        modalSort: false,
        modalDetailFlight:false
    }
    render() {
        return (
            <View style={styles.container}>
                <JumlahPenerbangan />
                <ScrollView>
                    <CardPenerbangan onDetailPress={()=>{this.setState({modalDetailFlight:true})}}/>
                    <CardPenerbangan onDetailPress={()=>{this.setState({modalDetailFlight:true})}}/>
                </ScrollView>
                <FilterAndSortButton onClickSort={() => this.setState({ modalSort: true })} onClickFilter={() => this.setState({ modalFilter: true })} />
                <ModalUrutkanPenerbangan visible={this.state.modalSort} onDismiss={() => this.setState({ modalSort: false })} />
                <ModalFilter visible={this.state.modalFilter} onCloseModal={() => this.setState({ modalFilter: false })} onSetFilter={() => { this.setState({ modalFilter: false }) }} />
                <ModalDetailFlight visible={this.state.modalDetailFlight} onClose={() => this.setState({ modalDetailFlight: false })}/>
            </View>
        );
    }
}
export default ListPenerbangan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});