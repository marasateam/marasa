import {Pesanan} from '../../../containers/pages'
import {createStackNavigator} from 'react-navigation-stack'
import ScreenTabNavigator from '../../../navigations/ScreenTabNavigator'


const PesananNavigator = createStackNavigator({
    Pesanan:{screen:ScreenTabNavigator,navigationOptions:{headerTintColor:'white'}},
}, {
    defaultNavigationOptions: {
        headerTitleAlign: 'center', headerStyle: {
            backgroundColor: '#FF201D'
        }
    }
})

export default PesananNavigator;




