import HomeScreen from './screens/Navigator/HomeScreen'
import AuthNavigator from './screens/AuthNavigator'
import {createAppContainer,createSwitchNavigator } from 'react-navigation'
import firebase from 'firebase'
import {firebaseConfig} from './config/firebase'

firebase.initializeApp(firebaseConfig);

const MainNavigator = createSwitchNavigator({
  Auth:{screen:AuthNavigator},
  Home:{screen:HomeScreen}
})

const App = createAppContainer(MainNavigator);
export default App;
