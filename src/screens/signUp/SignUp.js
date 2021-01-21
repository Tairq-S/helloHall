import React, { Component } from 'react';
import {
    View,
    Text, TextInput, TouchableOpacity, ImageBackground,
} from 'react-native';
import {InputContainer} from '../../components/inputContainer/InputContainer';
import RadioGroup from '../../components/radioButton/RadioGroup';
import RadioButton from '../../components/radioButton/RadioButton';
import {CustomButton} from '../../components/customButton/CustomButton';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            password:'',
            confirmPassword:'',
            role:''
        }
    }

    onSelect(index, value){
        this.setState({
            role: value
        })
    }

    render() {
        let {name, password, confirmPassword} = this.state;
        return (
            <ImageBackground source={require('../../assets/images/backgroung.jpg')} style={{flex:1, justifyContent:'center'}}>
                <InputContainer icon='user'>
                    <TextInput placeholder="Name"
                               placeholderTextColor="#fff"
                               underlineColorAndroid='transparent'
                               value={name}
                               onChangeText={(value)=>this.setState({userName: value})}
                               onSubmitEditing={() => this.password.focus()}
                               ref={(ref) => {this.userName = ref}}
                               returnKeyType='next'
                               style={{}}/>
                </InputContainer>
                <InputContainer icon='lock'>
                    <TextInput placeholder="PASSWORD"
                               placeholderTextColor="#fff"
                               underlineColorAndroid='transparent'
                               value={password}
                               onChangeText={(value)=>this.setState({password: value})}
                               ref={(ref) => {this.password = ref}}
                               returnKeyType='next'
                               style={{}}/>
                </InputContainer>
                <InputContainer icon='lock'>
                    <TextInput placeholder="CONFIRM PASSWORD"
                               placeholderTextColor="#fff"
                               underlineColorAndroid='transparent'
                               value={confirmPassword}
                               onChangeText={(value)=>this.setState({password: value})}
                               ref={(ref) => {this.password = ref}}
                               returnKeyType='next'
                               style={{}}/>
                </InputContainer>
                <RadioGroup
                    style={{marginHorizontal:10, marginBottom: 20}}
                    onSelect = {(index, value) => this.onSelect(index, value)}
                    color='transparent'
                    activeColor='#03c39a'>
                    <RadioButton value={'hallOwner'}>
                        <Text style={{fontSize:16, color:'#fff'}}>Hall Owner</Text>
                    </RadioButton>
                    <RadioButton value={'client'}>
                        <Text style={{fontSize:16, color:'#fff'}}>Client</Text>
                    </RadioButton>
                </RadioGroup>
                <CustomButton onPress={()=> this.props.navigation.navigate('AuthCode')} title='SIGN UP' textColor='#9b1b1c'/>
            </ImageBackground>
        );
    }
}

export default SignUp
