import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import GradientWrapper from '../gradientWrapper/GradientWrapper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import DateCalendar from '../../screens/calendar/Calendar';
import HallDetails from '../../screens/hallDetails/HallDetails';

class HallDetailsTabs extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex:0,
            isHallGallery:true,
            isCalendar: false
        }
    }

    hallGallery(){
        this.setState({
            activeIndex:0,
            isHallGallery: true,
            isCalendar:false
        })
    }

    calendar(){
        this.setState({
            activeIndex:1,
            isHallGallery: false,
            isCalendar  :true
        })
    }

    render() {
        let {isHallGallery, isCalendar, activeIndex} = this.state;
        let {navigation} = this.props;
        let colors = [
            '#bf965e',
            '#9a7241',
            '#f5c481',
            '#a57b49'
        ];
        return (
            <View style={{flex:1, backgroundColor:'#fff'}}>
                <View style={{flexDirection:'row', backgroundColor:'#000', paddingVertical:15}}>
                    <TouchableOpacity onPress={()=>this.hallGallery()} style={{flex:.5, justifyContent:'center', alignItems:'center'}}>
                        <Icon name='image' size={25} color={isHallGallery ? "#f5c481" : "#8E9AAF"} style={{marginBottom:10}}/>
                        {isHallGallery ? <GradientWrapper colors={colors} style={{paddingVertical:2, paddingHorizontal:50,  flex:1}}/> : null}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.calendar()} style={{flex:.5, justifyContent:'center', alignItems:'center'}}>
                        <Icon name='calendar' size={25} color={isCalendar ? "#f5c481" : "#8E9AAF"} style={{marginBottom:10}}/>
                        {isCalendar ? <GradientWrapper colors={colors} style={{paddingVertical:2, paddingHorizontal:50,  flex:1}}/> : null}
                    </TouchableOpacity>
                </View>
                {activeIndex === 0 ? <HallDetails  navigation={navigation}/> :  <DateCalendar navigation={navigation}/>}
            </View>
        );
    }
}

export default HallDetailsTabs
