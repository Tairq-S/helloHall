import React from 'react';
import {Image, Text, TouchableOpacity, View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HeaderStyle from './HeaderStyle';

const Header = (props) => {
    return (
        <View style={HeaderStyle.header}>
            <View style={[HeaderStyle.left,{backgroundColor:'green'}]}>
                <TouchableOpacity style={HeaderStyle.IconContainer} onPress={props.leftHandler} >
                    <Icon name={props.leftIcon} size={25} color="#fff"  />
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                <Text>{props.title}</Text>
            </View>
        </View>

    );
};

export default  Header;
