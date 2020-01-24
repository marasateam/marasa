import React, { Component } from 'react'
import {View,Text} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import BottomLine from '../BottomLine'
import {primaryColor} from '../../../styles/colors'
class FilterCheckBox extends Component {
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
export default FilterCheckBox;