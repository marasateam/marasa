import { createSwitchNavigator } from 'react-navigation';
import {Loading,Register,Login,Home} from '../../containers/pages'
import HomeTabNavigator from '../HomeTabNavigator'
const AuthNavigator = createSwitchNavigator(
  {
    Loading: { screen: Loading },
    Register: { screen: Register },
    Login: { screen: Login },
    HomeTabNavigator:{screen:HomeTabNavigator},
    
  },
  { initialRouteName: 'Loading' }
);
export default AuthNavigator;