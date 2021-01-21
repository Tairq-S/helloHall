import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import GradientWrapper from "../gradientWrapper/GradientWrapper";

export default class RadioButton extends Component{
    constructor(props, context){
        super(props, context)
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            selectedIndex: nextProps.selectedIndex
        })
    }

    getRadioStyle(){
        return {
            height: this.context.size,
            width: this.context.size,
            borderRadius: this.context.size / 2,
            borderWidth: this.context.thickness,
            borderColor: '#edeef0',
        }
    }

    getRadioDotStyle(){
        return {
            height: this.context.size / 2,
            width: this.context.size / 2,
            borderRadius: this.context.size / 4,
            backgroundColor: this.props.color || this.props.activeColor,
        }
    }

    isSelected(){
        if(this.props.isSelected)
            return <View style={this.getRadioDotStyle()}/>
    }
    render(){
        let colors = [
            '#bf965e',
            '#9a7241',
            '#f5c481',
            '#a57b49'
        ];
        var {children} = this.props;
        return(
            <View style={{opacity: this.props.disabled?0.4:1}}>
                <TouchableWithoutFeedback
                    disabled={this.props.disabled}
                    onPress={() => this.context.onSelect(this.props.index, this.props.value)}
                >
                    <View style={[styles.container, this.props.style, this.props.isSelected?{backgroundColor: this.context.highlightColor}:null]}>
                        {this.props.isSelected ?
                            <GradientWrapper colors={colors} style={{height:24, width:24, borderRadius:100, alignItems:'center', justifyContent:'center'}}>
                                <GradientWrapper colors={colors} style={{padding:5, borderRadius:100, borderColor:'#a66b59', borderWidth:3}}/>
                            </GradientWrapper>
                            :<View style={{height:24, width:24, borderRadius:100, borderWidth:1,borderColor:'#e0e0e0', alignItems:'center', justifyContent:'center'}}/>}
                        <View style={styles.item}>
                            {children}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

RadioButton.contextTypes = {
    onSelect: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
    thickness: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    highlightColor: PropTypes.string
};

let styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        flexDirection: 'row',
        padding: 10,
    },
    radio:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#edeef0'
    },
    item: {
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
