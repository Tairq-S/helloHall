import React, { Component } from 'react';
import {View, Text, TouchableOpacity, AsyncStorage, Alert} from 'react-native';
import {Calendar} from 'react-native-calendars';
import GradientWrapper from '../../components/gradientWrapper/GradientWrapper';

class DateCalendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            bookDays:['2020-01-28','2020-01-27', '2020-01-25', '2020-01-22', '2020-01-24', '2020-01-01'],
            marked: null,
        }
    }

    componentDidMount() {
        this.anotherFunc();
    }

    pushDate(d){
        let dates = this.state.bookDays;
        dates.push(d.dateString);
        this.setState({bookDays: dates},this.anotherFunc())

    }

    showAlert1(d) {
        Alert.alert(
            'Booking',
            'Do you want to book is date',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => this.pushDate(d)},
            ]
        );
    }

    logOut(){
        AsyncStorage.removeItem('user')
            .then((res)=>{
                this.props.navigation.navigate('Auth')
            })
            .catch((err)=>{
                console.log('err', err)
            })
    }


    anotherFunc = () => {
        let {bookDays} = this.state;
        let obj = bookDays.reduce((c, v) => Object.assign(c, {[v]: {customStyles: { container: { backgroundColor: 'rgba(246, 36, 89, 0.5)' }}}}), {});
        this.setState({ marked : obj});
    };


    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={()=> this.logOut()} style={{backgroundColor: '#000'}}>
                    <Text style={{color:'#fff'}}>Log Out</Text>
                </TouchableOpacity>
                <Calendar
                    onDayPress={(d)=>this.showAlert1(d)}
                    markingType={'custom'}
                    markedDates={this.state.marked}
                    style={{flex: 1}}
                    // Specify theme properties to override specific styles for calendar parts. Default = {}
                    theme={{
                        backgroundColor: '#FCFCFC',
                        calendarBackground: '#000',
                        textSectionTitleColor: '#F4FAFF',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#FCFCFC',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#FCFCFC',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'red',
                        monthTextColor: '#FCFCFC',
                        indicatorColor: 'blue',
                        textDayFontFamily: 'monospace',
                        textMonthFontFamily: 'monospace',
                        textDayHeaderFontFamily: 'monospace',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                    }}
                />
            </View>
        );
    }
}

export default DateCalendar
