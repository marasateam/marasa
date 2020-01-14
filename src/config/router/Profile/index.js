
import {Profile} from '../../../containers/pages'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'


const ProfileNavigator = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: { headerTintColor: 'white' }
    }
}, {
    defaultNavigationOptions: {
        headerTitleAlign: 'center', headerStyle: {
            backgroundColor: '#EE2424'
        }
    }
})
export default createAppContainer(ProfileNavigator);
