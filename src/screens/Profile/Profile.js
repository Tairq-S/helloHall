import React, { Component } from 'react';
import {View, Text, Image, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {CustomButton} from '../../components/customButton/CustomButton';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            obj: null
        }
    }

    componentWillMount() {
        this.initCheckForBtn();
    }

    initCheckForBtn = async () => {
        const user = await AsyncStorage.getItem('user');
        let obj = JSON.parse(user);
        this.setState({obj})
    };

    render() {
        let {obj} = this.state;
        return (
            <View style={{flex: 1, backgroundColor:'#fff'}}>
                <View>
                    <Image source={require('../../assets/images/backgroung.jpg')} style={{height:150}}/>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../assets/images/target-au-logo.png')} style={{borderRadius:50, height:100, width:100, borderWidth:1, borderColor:'#000',position:'absolute', bottom:-50, backgroundColor:'rgba(0,0,0,.4)', zIndex:100}}/>
                    </View>
                    <View style={{backgroundColor:'#fafafa', height:100, justifyContent:'flex-end', alignItems:'center'}}>
                        <Text style={{fontSize:25, fontWeight:'bold', marginBottom:10}}>Target</Text>
                        <View style={{backgroundColor:'#ccc', padding:.5, elevation:3, position:'absolute', width:'100%'}}/>
                    </View>
                </View>
                <View style={{marginHorizontal:40, marginTop:20}}>
                    <View style={{flexDirection:'row', alignItems:'center', marginVertical:10}}>
                        <Icon name='map-marker' size={30} color="#000"/>
                        <Text style={{marginLeft:10, color:'#8A95A5'}}>Address</Text>
                    </View>
                    <View style={{padding:.5, backgroundColor:'#ccd', marginTop:5}}/>

                    <View style={{flexDirection:'row', alignItems:'center', marginVertical:10}}>
                        <Icon name='phone' size={30} color="#000"/>
                        <Text style={{marginLeft:10, color:'#8A95A5'}}>021 311889941</Text>
                    </View>
                    <View style={{padding:.5, backgroundColor:'#ccd', marginTop:5}}/>

                    <View style={{flexDirection:'row', alignItems:'center', marginVertical:10}}>
                        <Icon name='users' size={30} color="#000"/>
                        <Text style={{marginLeft:10, color:'#8A95A5'}}>500 peoples</Text>
                    </View>
                    <View style={{padding:.5, backgroundColor:'#ccd', marginTop:5}}/>

                    <View style={{flexDirection:'row', alignItems:'center', marginVertical:10}}>
                        <Icon name='bullseye' size={30} color="#000"/>
                        <Text style={{marginLeft:10, color:'#8A95A5'}}>Sakhi Hassan</Text>
                    </View>
                    <View style={{padding:.5, backgroundColor:'#ccd', marginTop:5}}/>

                    <View style={{flexDirection:'row', alignItems:'center', marginVertical:10}}>
                        <Icon name='money' size={30} color="#000"/>
                        <Text style={{marginLeft:10, color:'#8A95A5'}}>100,000 - 150,000</Text>
                    </View>
                    <View style={{padding:.5, backgroundColor:'#ccd', marginTop:5}}/>
                </View>
                <View style={{flexDirection:'row', marginHorizontal:20, marginTop:40}}>
                    <View style={{flex:.5}}>
                        <CustomButton onPress={()=> this.props.navigation.navigate('HallGallery')} title='Gallery' textColor='#9b1b1c'/>
                    </View>
                    {obj && obj.role !== 'hallOwner' ?
                    <View style={{flex:.5}}>
                        <CustomButton onPress={()=> this.props.navigation.navigate('DateCalendar')} title='Booked Dates' textColor='#9b1b1c'/>
                    </View>: null}
                </View>

            </View>
        );
    }
}

export default Profile
