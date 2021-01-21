import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput, ImageBackground,
} from 'react-native';
import {CustomButton} from '../../components/customButton/CustomButton';

class AuthCode extends Component {

    state = {
        code: '',
        digitOne:'',
        digitTwo:'',
        digitThree:'',
        digitFour:'',
        errorMessage:'',
        error: false,
        sent: false
    };


    onChange (name, val) {
        this.setState({ [name] : val }, () => {
            let value = `${this.state.digitOne}${this.state.digitTwo}${this.state.digitThree}${this.state.digitFour}`;
            this.setState({code: value})
        });
    }

    returnColor(validate, error){
        console.log('validate', validate);
        console.log('error',error);
        if(validate) return '#028090';
        if(error) return '#ff1954';
        else return '#e0e0e0';
    }

    render() {
        let { code, errorMessage, error, sent } = this.state;
        console.log('Resend verification code', sent)
        let validate = code.length ===4;
        let color = this.returnColor(validate, error);
        console.log('Color',color);
        let {digitOne, digitTwo, digitThree, digitFour} = this.state;
        let autoFocus = !!digitOne;

        return(
            <ImageBackground source={require('../../assets/images/backgroung.jpg')} style={{flex:1, justifyContent:'center'}}>
                <View style={{marginHorizontal:46, alignItems:'center'}}>
                    <Text style={{fontSize:16, color:'#fff'}}>{`Check your email (and your spam)\nfor the 4-digit code and enter below`}</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', marginHorizontal:60}}>
                    <View style={{borderBottomColor: color, borderBottomWidth:2, justifyContent:'center', alignItems:'center', padding:10, marginHorizontal:5}}>
                        <TextInput underlineColorAndroid='transparent'
                                   maxLength={1}
                                   returnKeyType="next"
                                   ref={(ref) => {this.one = ref}}
                                   autoCorrect={false}
                                   autoCapitalize={'none'}
                                   value={digitOne}
                                   autoFocus={true}
                                   keyboardType='phone-pad'
                                   onChangeText={(digit) => {this.onChange('digitOne', digit), (digit && digit !== ' ') && this.two.focus()}}
                                   onSubmitEditing={() => this.two.focus()}
                                   style={{fontSize:40, color:!validate?'#e0e0e0':'#028090'}}/>
                    </View>
                    <View style={{borderBottomColor: color, borderBottomWidth:2, justifyContent:'center', alignItems:'center', padding:10, marginHorizontal:5}}>
                        <TextInput underlineColorAndroid='transparent'
                                   maxLength={1}
                                   returnKeyType="next"
                                   ref={(ref) => {this.two = ref}}
                                   autoCorrect={false}
                                   autoCapitalize={'none'}
                                   value={digitTwo}
                                   autoFocus={autoFocus}
                                   keyboardType='phone-pad'
                                   onChangeText={(digit) => {this.onChange('digitTwo', digit), (digit && digit !== ' ') ? this.three.focus() : this.one.focus()}}
                                   onSubmitEditing={() => this.three.focus()}
                                   onKeyPress={ (arg)=>{arg.nativeEvent.key === 'Backspace' ? this.one.focus():null}}
                                   style={{fontSize:40, color:!validate?'#e0e0e0':'#028090'}}/>
                    </View>
                    <View style={{borderBottomColor: color, borderBottomWidth:2, justifyContent:'center', alignItems:'center', padding:10, marginHorizontal:5}}>
                        <TextInput underlineColorAndroid='transparent'
                                   maxLength={1}
                                   returnKeyType={"next"}
                                   autoCorrect={false}
                                   autoCapitalize={'none'}
                                   value={digitThree}
                                   autoFocus={autoFocus}
                                   keyboardType='phone-pad'
                                   ref={(ref) => {this.three = ref}}
                                   onChangeText={(digit)=> {this.onChange('digitThree',digit), (digit && digit !== ' ') ? this.four.focus() : this.two.focus()}}
                                   onSubmitEditing={() => this.four.focus()}
                                   onKeyPress={ (arg)=>{arg.nativeEvent.key === 'Backspace' ? this.two.focus():null}}
                                   style={{fontSize:40, color:!validate?'#e0e0e0':'#028090'}}/>
                    </View>
                    <View style={{borderBottomColor: color, borderBottomWidth:2, justifyContent:'center', alignItems:'center', padding:10, marginHorizontal:5}}>
                        <TextInput underlineColorAndroid='transparent'
                                   maxLength={1}
                                   ref={(ref) => {this.four = ref}}
                                   autoCorrect={false}
                                   autoCapitalize={'none'}
                                   value={digitFour}
                                   autoFocus={autoFocus}
                                   keyboardType='phone-pad'
                                   onChangeText={(digit)=> {this.onChange('digitFour', digit), (!digit && digit !== ' ') && this.three.focus()}}
                                   onKeyPress={ (arg)=>{arg.nativeEvent.key === 'Backspace' ? this.three.focus():null}}
                                   style={{fontSize:40, color:!validate?'#e0e0e0':'#028090'}}/>
                    </View>
                </View>
                <View style={{alignItems:'center', marginVertical:30}}><Text style={{color:'#ff1954', fontSize:14}}>{errorMessage}</Text></View>
                <View style={{}}>
                    <CustomButton
                        textColor={!validate?'#9b1b1c': null}
                        // color={!validate?'#e0e0e0':null}
                        title='Verify'
                        // disabled={this.props.isAuthenticate}
                        onPress={()=> this.props.navigation.navigate('Home')}
                    />
                </View>
            </ImageBackground>
        )
    }
}


export default AuthCode;
