import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import GradientWrapper from '../gradientWrapper/GradientWrapper';

export const CustomButton = ({ onPress, title, loading, textColor}) => {
    let colors = [
        '#bf965e',
        '#9a7241',
        '#f5c481',
        '#a57b49'
    ];
    return(
        <View style={{alignItems:'center'}}>
            <View style={{width: 150}}>
                <View  style={{}}>
                    <TouchableOpacity onPress={onPress}>
                        <GradientWrapper colors={colors}  style={{borderRadius:50, height: 46, justifyContent: 'center'}}>
                            <Text style={{textAlign: 'center', fontSize:15, fontWeight: 'bold',color: textColor}}>{title}</Text>
                        </GradientWrapper>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )};
