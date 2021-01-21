import { StyleSheet, Dimensions, Platform } from 'react-native';

export default AdsListStyle = StyleSheet.create({
    flatList:{
        backgroundColor: '#F5F5F5'
    },

    listItem: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor:'#fff',
        paddingVertical: 25,
        borderRadius: 10
    },

    innerCont: {
        flexDirection:'row',
        marginHorizontal: 20
    },

    logo: {
        height: 80,
        width: 80
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7D7D7D'
    },

    description: {
        marginTop: 20,
        color: '#7D7D7D'
    },

    textCont: {
        flex:1,
        marginHorizontal: 25
    },

})