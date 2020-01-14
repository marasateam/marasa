import {Home} from '../../../containers/pages'

import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

const HomeNavigator = createStackNavigator({
    Home:{screen:Home,navigationOptions:{headerTitle:'Marasa',headerTintColor:'white'}}
},{defaultNavigationOptions:{headerTitleAlign:'center',headerStyle:{backgroundColor:'#EE2424'}}})

export default createAppContainer(HomeNavigator);

