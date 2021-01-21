import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import SignUp from '../screens/signUp/SignUp';
import AuthCode from '../screens/authCode/AuthCode';
import SignIn from '../screens/signIn/SignIn';

export default createStackNavigator(
    {
        SignIn: {
            screen: SignIn,
            navigationOptions: {
                header: null
            }
        },
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
    }
);
