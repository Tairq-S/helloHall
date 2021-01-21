import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import AdsList from "../../components/adsList/AdsList";

class Favourites extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {image: require('../../assets/images/Rebel Sport.png'), title:'Title', description:'Some descriptions are here'},
                {image: require('../../assets/images/target-au-logo.png'), title:'Title', description:'Some descriptions are here'},
                {image: require('../../assets/images/The iconic.png'), title:'Title', description:'Some descriptions are here'},
                {image: require('../../assets/images/vans-logo.png'), title:'Title', description:'Some descriptions are here'}
            ]
        }
    }

    render() {
        let {navigation} = this.props;
        return (
            <View style={{flex: 1}}>
                <AdsList
                    data={this.state.data}
                    navigation={navigation}
                />
            </View>
        );
    }
}

export default Favourites
