
import {Pesanan} from '../../../containers/pages'
import {createStackNavigator} from 'react-navigation-stack'


const PesananNavigator = createStackNavigator({
    Pesanan:{screen:Pesanan,navigationOptions:{headerTintColor:'white'}}
}, {
    defaultNavigationOptions: {
        headerTitleAlign: 'center', headerStyle: {
            backgroundColor: '#EE2424'
        }
    }
})

export default PesananNavigator;

