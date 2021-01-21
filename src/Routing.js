import React from "react";
import {
    createAppContainer
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import SignIn from "./screens/signIn/SignIn";
import SignUp from "./screens/signUp/SignUp";
import Header from "./components/header/Header";
import Search from './screens/search/Search';
import Favourites from './screens/favourites/Favourites';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AuthCode from './screens/authCode/AuthCode';
import HallDetails from './screens/hallDetails/HallDetails';
import HallDetailsTabs from './components/hallDetailsTabs/HallDetailsTabs';
import Profile from './screens/Profile/Profile';
import DateCalendar from './screens/calendar/Calendar';

const SearchStack = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            header: null
        }
    },
    HallDetailsTabs: {
        screen: HallDetailsTabs,
        navigationOptions: {
            header: null
        }
    }
});
const FavouritesStack = createStackNavigator({
    Favourites: {
        screen: Favourites,
        navigationOptions: {
            header: null
        }
    },
    HallDetails: {
        screen: HallDetails,
        navigationOptions: {
            header: null
        }
    }
});


const MainMenuOfHallOwner = createBottomTabNavigator({
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

const MainMenu = createBottomTabNavigator({
    Search: {
        screen: SearchStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon size={30} name='search' style={{color: tintColor}} />
        }
    },
    Favourites: {
        screen: FavouritesStack,
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

const SignUpStack = createStackNavigator({
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header: null
        }
    },
    AuthCode: {
        screen: AuthCode,
        navigationOptions: {
            header: null
        }
    }
});

const MainStack = createStackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null
        }
    },

    SignUp: {
        screen: SignUpStack,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: MainMenuOfHallOwner   ,
        navigationOptions: {
            header: ({navigation}) => {
                return <Header leftHandler={() => navigation.goBack(null)}/>
            }
        }
    }
});
const App = createAppContainer(MainStack);
export default App;
