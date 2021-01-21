import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export const InputContainer = ({children, icon}) => {
    return (
        <View style={{marginVertical:10,paddingVertical: 2, paddingHorizontal:10, marginHorizontal:20,borderRadius:50, borderColor: '#fff', borderWidth:3,  flexDirection:'row', alignItems:'center'}}>
            <View style={{flex:.1, alignItems:'center'}}>
                <Icon name={icon} size={25} color="#c79a61"/>
            </View>
            <View style={{flex:.9,}}>
                {children}
            </View>
        </View>

    );
};
