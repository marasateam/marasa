import { createSwitchNavigator } from 'react-navigation';
import LoadingScreen from './LoadingScreen';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './Navigator/HomeScreen'
import HomeTabNavigator from './Navigator/HomeTabNavigator'
const AuthNavigator = createSwitchNavigator(
  {
    Loading: { screen: LoadingScreen },
    Register: { screen: RegisterScreen },
    Login: { screen: LoginScreen },
    Home:{screen:HomeTabNavigator},
    
  },
  { initialRouteName: 'Loading' }
);
export default AuthNavigator;