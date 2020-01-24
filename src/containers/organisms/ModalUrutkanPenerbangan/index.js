import React,{Component} from 'react'
import Modals, { ModalContent, ModalTitle } from 'react-native-modals';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
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
export default ModalUrutkanPenerbangan;