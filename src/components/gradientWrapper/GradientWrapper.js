import React  from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GradientWrapper = ({ children,  style, colors}) => {
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={colors} style={{ ...style}}>
            { children }
        </LinearGradient>
    )
};

export default GradientWrapper;
