import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import HallDetailsStyles from './HallDetailsStyles';
import SliderEntry from '../../components/sliderEntries/SliderEntry';
import {itemWidth, sliderWidth} from '../../components/sliderEntries/SliderEntryStyle';

class HallDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[
                {image: 'https://image.shutterstock.com/image-photo/chennai-tamilnadu-india-08-29-600w-1412037815.jpg'},
                {image: 'https://image.shutterstock.com/image-photo/lublin-poland-june-14-2019-600w-1430672696.jpg'},
                {image: 'https://image.shutterstock.com/image-photo/festive-table-decorated-composition-white-600w-1577880922.jpg'},
                {image: 'https://image.shutterstock.com/image-photo/beautiful-wedding-ceremony-design-decoration-600w-311524406.jpg'},
                {image: 'https://image.shutterstock.com/image-photo/grey-chairs-stand-around-dinner-600w-553758457.jpg'},
                {image: 'https://image.shutterstock.com/image-photo/wedding-reception-grey-decor-600w-723794416.jpg'},
                {image: 'https://image.shutterstock.com/image-photo/image-tables-setting-luxury-wedding-600w-182518262.jpg'},
                {image: 'https://image.shutterstock.com/image-photo/lighted-white-candles-stand-around-600w-525139753.jpg'},
                {image: 'https://image.shutterstock.com/image-photo/luxury-elegant-wedding-reception-table-600w-376890619.jpg'},
                {image: 'https://image.shutterstock.com/image-photo/banquet-hall-other-function-facility-600w-179964941.jpg'},
                {image: 'https://image.shutterstock.com/image-photo/image-tables-setting-luxury-wedding-600w-113372389.jpg'},
                {image: 'https://image.shutterstock.com/image-photo/amazing-luxury-decorated-place-wedding-600w-486899269.jpg'},
                {image: 'https://image.shutterstock.com/image-photo/wedding-ceremony-hall-ready-couple-600w-379516894.jpg'},
                {image: 'https://image.shutterstock.com/image-photo/wedding-hall-600w-135447662.jpg'},
                {image: 'https://image.shutterstock.com/image-photo/wedding-hall-600w-520555021.jpg'},
            ]
        }
    }

    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }

    render() {
        return (
            <View style={HallDetailsStyles.container}>
                <Carousel
                    data={this.state.data}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    containerCustomStyle={HallDetailsStyles.slider}
                    contentContainerCustomStyle={HallDetailsStyles.sliderContentContainer}
                    // layout={type}
                    // loop={true}
                />
            </View>
        );
    }
}

export default HallDetails
