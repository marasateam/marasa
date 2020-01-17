import React from 'react'
import {Profile,ProfileSettings} from '../../../containers/pages'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Ionicons } from '@expo/vector-icons';
import {SettingsIcon} from '../../../components/atoms'
import { Alert } from 'react-native';
import { withNavigation } from 'react-navigation'

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
        },
        cardStyle:{
            backgroundColor:'#CCCCCC'
        },
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
