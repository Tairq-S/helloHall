import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
} from 'react-native';

class AuthLoading extends React.Component {
    constructor(props) {
        super(props);
        this.routesInitializer();
    }

    routesInitializer = async () => {
        const user = await AsyncStorage.getItem('user');
        let obj = JSON.parse(user);
        console.log('obj', obj)
        if(obj){
            if(obj.role === 'client'){
                this.props.navigation.navigate('ClientRoutes');
            }
            else {
                this.props.navigation.navigate('HallOwnerRoutes');
            }
        }
        else {
            this.props.navigation.navigate('Auth');
        }
    };

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default AuthLoading;

