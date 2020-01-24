import React from 'react'
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
const FilterAndSortButton = (props) => {
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
            <TouchableOpacity style={styles.sortButton} onPress={props.onClickSort}>
                <Ionicons name="ios-list" />
                <Text style={{ color: "black", marginLeft: 5 }}>Urutkan</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    filterButton: {
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
    }, sortButton: {
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
})

export default FilterAndSortButton;