import React, { Component } from 'react';
import {
    View,
    Text, TouchableOpacity,
} from 'react-native';
import AdsList from "../../components/adsList/AdsList";

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {image: require('../../assets/images/adidas-logo.png'), title:'Hall Name', description:'Address is here .....', space:'500 persons'},
                {image: require('../../assets/images/Asos.png'), title:'Hall Name', description:'Address is here .....', space:'300 persons'},
                {image: require('../../assets/images/calvin-klein.png'), title:'Hall Name', description:'Address is here .....', space:'600 persons'},
                {image: require('../../assets/images/dissh-au-logo.png'), title:'Hall Name', description:'Address is here .....', space:'300 persons'},
                {image: require('../../assets/images/myer-au-logo.png'), title:'Hall Name', description:'Address is here .....', space:'100 persons'},
                {image: require('../../assets/images/Rebel Sport.png'), title:'Hall Name', description:'Address is here .....', space:'700 persons'},
                {image: require('../../assets/images/target-au-logo.png'), title:'Hall Name', description:'Address is here .....', space:'800 persons'},
                {image: require('../../assets/images/The iconic.png'), title:'Hall Name', description:'Address is here .....', space:'1000 persons'},
                {image: require('../../assets/images/vans-logo.png'), title:'Hall Name', description:'Address is here .....', space:'400 persons'}
            ],
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

export default Search
