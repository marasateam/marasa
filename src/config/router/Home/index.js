import React from 'react'
import { Home,Notifications, CariTiket, ListPenerbangan, DetailPemesanan } from '../../../containers/pages'
import { createStackNavigator } from 'react-navigation-stack'
import {NotificationsIcon,HeaderListPenerbangan} from '../../../components/molecules';

const HomeNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Marasa',
            headerTintColor: 'white',
            headerRight:()=><NotificationsIcon/>
        }
    },
    Notifications: {
        screen: Notifications,
        navigationOptions: {
            headerTitle: 'Notifikasi',
            headerTintColor: 'white'
        }
    },CariTiket: {
        screen: CariTiket,
        navigationOptions: {
            headerTitle: 'Cari Tiket',
            headerTintColor: 'white'
        }
    },
    ListPenerbangan: {
        screen: ListPenerbangan,
        navigationOptions: {
            headerTitle: ()=><HeaderListPenerbangan/>,
            headerTintColor: 'white'
        }
    },
    DetailPemesanan: {
        screen: DetailPemesanan,
        navigationOptions: {
            headerTitle: 'Detail Pemesanan',
            headerTintColor: 'white'
        }
    }

}, {
    defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#EE2424' }
    }
})
HomeNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
};
export default HomeNavigator;

