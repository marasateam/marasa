import React from 'react'
import { View, Image, Text } from 'react-native'
import RecomendedCard from '../../../components/molecules/RecomendedCard'
import { RecomendedCard2 } from '../../../components/molecules'
const Recomended = () => {
    return (
        <View style={{ paddingTop: 5, flexDirection: 'row', marginBottom: 20, height: 200 }}>
            <RecomendedCard Image={require('../../../../assets/promo/Makassar.jpg')} />
            <View style={{ flex: 1, flexDirection: 'column',}}>
                <RecomendedCard2 Image={require('../../../../assets/promo/bandung.jpg')} />
                <RecomendedCard2 Image={require('../../../../assets/promo/Makassar.jpg')} />
            </View>
        </View>
    )
}
export default Recomended;