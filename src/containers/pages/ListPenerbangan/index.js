import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    Modal,
    TouchableOpacity
} from "react-native";
import { BottomLine } from '../../../components/atoms'
import { ModalHeader } from '../../../components/molecules'
import CheckBox from '@react-native-community/checkbox';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Modals, { ModalContent, ModalTitle } from 'react-native-modals';
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons'
import { primaryColor } from '../../../styles/colors'


const HighlightHarga = () => {
    return (
        <View style={{
            backgroundColor: "#FFCB29",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 20
        }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Rp 468.600</Text>
        </View>
    )
}

const CardPenerbangan = () => {
    return (
        <View style={{
            backgroundColor: "white",
            height: 130,
            marginVertical: 5,
            elevation: 0.8,
            flexDirection: "row"

        }}>
            <View style={{ flex: 1, paddingLeft: 15 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 19, fontWeight: "200" }}>Garuda</Text>
                    <Image style={{ width: 45, height: 45, resizeMode: "center", marginLeft: 5 }} source={require("../../../../assets/logo/garuda.png")} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12 }}>13:00 MJU</Text>
                    <Text style={{ fontSize: 11, color: "grey", marginLeft: 15, marginTop: 5 }}>55 Menit (Lansung)</Text>
                    <Text style={{ fontSize: 12, marginTop: 5 }}>13:55 UPG</Text>
                </View>

            </View>
            <View style={{ flex: 0.8, justifyContent: "space-evenly", alignItems: "center" }}>
                <Text style={{ color: "grey", fontSize: 10 }}>Harga Akhir / Penumpang</Text>
                <HighlightHarga />
                <TouchableOpacity style={{
                    backgroundColor: "#FF5733",
                    paddingHorizontal: 12,
                    borderRadius: 5,
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Text style={{ color: "white", marginRight: 10 }}>Detail</Text>
                    <Ionicons name="ios-airplane" color="white" size={15} />
                </TouchableOpacity>
            </View>

        </View>
    )
}
const JumlahPenerbangan = () => {
    return (
        <View style={{
            backgroundColor: "#E6E6E6",
            height: 30,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text style={{ color: "#6C6C6C", fontSize: 11 }}>56 penerbangan ditemukan</Text>
        </View>
    )
}
const FilterButton = (props) => {
    return (
        <View style={{
            position: "absolute",
            alignSelf: "center",
            bottom: 15,
            flexDirection: "row"
        }}>
            <TouchableOpacity style={styles.filterButton} onPress={props.onClickFilter} >
                <Ionicons name="ios-options" />
                <Text style={{ marginLeft: 5 }}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.changeDateButton} onPress={props.onClickSort}>
                <Ionicons name="ios-list" />
                <Text style={{ color: "black", marginLeft: 5 }}>Urutkan</Text>
            </TouchableOpacity>
        </View>
    )
}

class ModalUrutkanPenerbangan extends Component {
    state = {
        sortFlight: [
            { label: 'Termurah', value: 0 },
            { label: 'Paling Awal', value: 1 },
            { label: 'Paling Akhir', value: 0 },
            { label: 'Durasi Tersingkat', value: 1 }
        ], value: 0
    }
    render() {
        return (
            <Modals.BottomModal
                visible={this.props.visible}
                onTouchOutside={this.props.onDismiss}
                height={0.5}
                width={1}
                onSwipeOut={this.props.onDismiss}
                modalTitle={
                    <ModalTitle
                        title="Urutkan Penerbangan"
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
                        radio_props={this.state.sortFlight}
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
        )
    }
}

class ModalFilter extends Component {
    render() {
        return (
            <Modal visible={this.props.visible} animationType="slide">
                <View style={{ flex: 1, backgroundColor: "#F3F3F3", paddingBottom: 5 }}>
                <ModalHeader title="Filter" onPressClose={this.props.onCloseModal}>
                    <TouchableOpacity>
                        <Text style={{color:"white",fontWeight:"bold"}}>RESET</Text>
                    </TouchableOpacity>
                </ModalHeader>

                    <ScrollView>


                        <CardFilter title={"TIPE PENERBANGAN"}>
                            <FilterCheckbox title={"Lansung"} />
                            <FilterCheckbox title={"Lansung"} />
                        </CardFilter>
                        <CardFilter title={"HARGA"}>
                            <FilterCheckbox title={"Dibawah Rp 500.000"} disabled={true} />
                            <FilterCheckbox title={"Rp 500.000 - Rp 1.000.000"} />
                            <FilterCheckbox title={"Rp 1.000.000 - Rp 2.000.000"} />
                            <FilterCheckbox title={"Di atas 2.000.000"} />
                        </CardFilter>
                        <CardFilter title={"WAKTU BERANGKAT"}>
                            <FilterCheckbox title={"00:00 - 06:00"} />
                            <FilterCheckbox title={"06:12 - 12:00"} />
                            <FilterCheckbox title={"12:00 - 18:00"} />
                            <FilterCheckbox title={"18:00 - 24:06"} />
                        </CardFilter>
                        <CardFilter title={"WAKTU TIBA"}>
                            <FilterCheckbox title={"00:00 - 06:00"} />
                            <FilterCheckbox title={"06:12 - 12:00"} />
                            <FilterCheckbox title={"12:00 - 18:00"} />
                            <FilterCheckbox title={"18:00 - 24:06"} />
                        </CardFilter>
                        <CardFilter title={"MASKAPAI"}>
                            <FilterCheckbox title={"Lion Air"} />
                            <FilterCheckbox title={"Batik Air"} />
                            <FilterCheckbox title={"Garuda Indonesia"} />
                            <FilterCheckbox title={"Citilink"} />
                            <FilterCheckbox title={"Sriwijaya Air"} />
                        </CardFilter>
                    </ScrollView>
                    <ButtonSetFilter onPress={this.props.onSetFilter} />
                </View>
            </Modal>
        )
    }
}
const CardFilter = (props) => {
    return (
        <View style={{ width: "100%", backgroundColor: "white", paddingTop: 12, paddingLeft: 25, paddingBottom: 18, marginBottom: 12 }}>
            <Text style={{ marginBottom: 12, fontSize: 13, color: "grey" }}>{props.title}</Text>
            {props.children}
        </View>
    )
}
class FilterCheckbox extends Component {
    state = {
        checkbox: false
    }
    render() {
        return (
            <View style={{ marginBottom: 18 }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <Text style={{ fontSize: 17 }}>{this.props.title}</Text>
                    <CheckBox tintColors={{ true: primaryColor }} disabled={this.props.disabled} value={this.state.checkbox} style={{ marginRight: 20 }} onValueChange={(value) => { this.setState({ checkbox: value }) }} />

                </View>
                <BottomLine />
            </View>
        )
    }
}
const ButtonSetFilter = (props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: "#FC301F",
            height: 40,
            width: "95%",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10
        }}

            onPress={props.onPress}
        >
            <Text style={{ color: "white", fontSize: 16 }}>Terapkan Filter</Text>
        </TouchableOpacity>
    )
}
class ListPenerbangan extends Component {
    state = {
        modalFilter: false,
        modalSort: false
    }
    render() {
        return (
            <View style={styles.container}>
                <JumlahPenerbangan />
                <ScrollView>
                    <CardPenerbangan />
                    <CardPenerbangan />
                    <CardPenerbangan />
                    <CardPenerbangan />
                    <CardPenerbangan />
                    <CardPenerbangan />
                </ScrollView>
                <FilterButton onClickSort={() => this.setState({ modalSort: true })} onClickFilter={() => this.setState({ modalFilter: true })} />
                <ModalUrutkanPenerbangan visible={this.state.modalSort} onDismiss={() => this.setState({ modalSort: false })} />
                <ModalFilter visible={this.state.modalFilter} onCloseModal={() => this.setState({ modalFilter: false })} onSetFilter={() => { this.setState({ modalFilter: false }) }} />

            </View>
        );
    }
}
export default ListPenerbangan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, filterButton: {
        display: 'flex',
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
        display: 'flex',
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