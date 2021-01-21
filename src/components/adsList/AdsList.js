import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import AdsListStyle from './AdsListStyle'

class AdsList extends Component {
    constructor(props){
        super(props);
        this.state={}
    }

    _renderItem = ({item}) => {
        return(
            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Profile')}} style={AdsListStyle.listItem}>
                <View style={AdsListStyle.innerCont}>
                    <Image style={AdsListStyle.logo} source={item.image}/>
                    <View style={AdsListStyle.textCont}>
                        <Text style={AdsListStyle.title}>{item.title}</Text>
                        <Text style={AdsListStyle.description}>{item.description}</Text>
                        <Text style={AdsListStyle.description}>{item.space}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    render() {
        return (
            <FlatList
                data={this.props.data}
                extraData={this.props}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this._renderItem}
                style={AdsListStyle.flatList}
            />
        );
    }
}
export default AdsList
