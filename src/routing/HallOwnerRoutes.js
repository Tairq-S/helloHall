import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HallGallery from '../screens/HallGallery/HallGallery';
import DateCalendar from '../screens/calendar/Calendar';
import Profile from '../screens/Profile/Profile';
import AuthLoading from '../screens/authLoading/AuthLoading';

const HallOwnerTabs = createBottomTabNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon size={30} name='user' style={{color: tintColor}} />
        }
    },
    Calendar: {
        screen: DateCalendar,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon size={30} name='calendar' style={{color: tintColor}} />
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

// Hall Owner Stack
export  default createStackNavigator({
    ClientTabs: {
        screen: HallOwnerTabs,
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
});
