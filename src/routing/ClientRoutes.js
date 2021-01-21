import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Search from '../screens/search/Search';
import Favourites from '../screens/favourites/Favourites';
import SignIn from '../screens/signIn/SignIn';
import Profile from '../screens/Profile/Profile';
import HallGallery from '../screens/HallGallery/HallGallery';
import DateCalendar from '../screens/calendar/Calendar';
import AuthLoading from '../screens/authLoading/AuthLoading';

const ClientTabs = createBottomTabNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon size={30} name='search' style={{color: tintColor}} />
        }
    },
    Favourites: {
        screen: Favourites,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon size={30} name='heart' style={{color: tintColor}} />
        }
    },
},{
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#121619',
        inactiveTintColor : '#F4FFFD',
        style:{
            backgroundColor:'#ED254E'
        }
    },
});

// ClientStack
 export  default createStackNavigator({
     ClientTabs: {
        screen: ClientTabs,
         navigationOptions: {
             header: null
         }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: null
        }
    },
    HallGallery: {
        screen: HallGallery,
        navigationOptions: {
            header: null
        }
    },
    DateCalendar: {
        screen: DateCalendar,
        navigationOptions: {
            header: null
        }
    },
});
