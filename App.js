import AuthNavigator from './src/navigations/AuthNavigator'
import {createAppContainer,createSwitchNavigator } from 'react-navigation'
import firebase from 'firebase'
import {firebaseConfig} from './config/firebase'

firebase.initializeApp(firebaseConfig);

const MainNavigator = createSwitchNavigator({
  Auth:{screen:AuthNavigator}
})

const App = createAppContainer(MainNavigator);
export default App;
