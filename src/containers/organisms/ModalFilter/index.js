import React, { Component } from "react";
import { 
    View,
    Text,
    Modal,
    TouchableOpacity
} from "react-native";
import { ModalHeader,CardFilter } from '../../../components/molecules'
import { ScrollView } from "react-native-gesture-handler";
import {ButtonSetFilter,FilterCheckBox} from '../../../components/atoms'

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
                            <FilterCheckBox title={"Lansung"} />
                            <FilterCheckBox title={"Lansung"} />
                        </CardFilter>
                        <CardFilter title={"HARGA"}>
                            <FilterCheckBox title={"Dibawah Rp 500.000"} disabled={true} />
                            <FilterCheckBox title={"Rp 500.000 - Rp 1.000.000"} />
                            <FilterCheckBox title={"Rp 1.000.000 - Rp 2.000.000"} />
                            <FilterCheckBox title={"Di atas 2.000.000"} />
                        </CardFilter>
                        <CardFilter title={"WAKTU BERANGKAT"}>
                            <FilterCheckBox title={"00:00 - 06:00"} />
                            <FilterCheckBox title={"06:12 - 12:00"} />
                            <FilterCheckBox title={"12:00 - 18:00"} />
                            <FilterCheckBox title={"18:00 - 24:06"} />
                        </CardFilter>
                        <CardFilter title={"WAKTU TIBA"}>
                            <FilterCheckBox title={"00:00 - 06:00"} />
                            <FilterCheckBox title={"06:12 - 12:00"} />
                            <FilterCheckBox title={"12:00 - 18:00"} />
                            <FilterCheckBox title={"18:00 - 24:06"} />
                        </CardFilter>
                        <CardFilter title={"MASKAPAI"}>
                            <FilterCheckBox title={"Lion Air"} />
                            <FilterCheckBox title={"Batik Air"} />
                            <FilterCheckBox title={"Garuda Indonesia"} />
                            <FilterCheckBox title={"Citilink"} />
                            <FilterCheckBox title={"Sriwijaya Air"} />
                        </CardFilter>
                    </ScrollView>
                    <ButtonSetFilter title="Terapkan Filter" onPress={this.props.onSetFilter} />
                </View>
            </Modal>
        );
    }
}
export default ModalFilter;

