import React from 'react'
import {Profile,ProfileSettings} from '../../../containers/pages'
import { createStackNavigator } from 'react-navigation-stack'
import {SettingsIcon} from '../../../components/atoms'

const ProfileNavigator = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: { headerTintColor: 'white' ,headerRight:()=><SettingsIcon/> }
    },
    ProfileSettings: {
        screen: ProfileSettings,
        navigationOptions: { headerTintColor: 'white',headerTitle:"Profile Settings"}
    }

}, {
    defaultNavigationOptions: {
        headerTitleAlign: 'center', headerStyle: {
            backgroundColor: '#EE2424'
        }
    }
})

ProfileNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
};
export default ProfileNavigator;
