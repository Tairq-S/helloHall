import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator
} from "react-navigation";
import AuthLoading from '../screens/authLoading/AuthLoading';
import AuthRoutes from './AuthRoutes';
import ClientRoutes from './ClientRoutes';
import HallOwnerRoutes from './HallOwnerRoutes';

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoading,
            Auth: AuthRoutes,
            ClientRoutes: ClientRoutes,
            HallOwnerRoutes: HallOwnerRoutes
        },
        {
            initialRouteName: 'AuthLoading'
        }
    )
);
