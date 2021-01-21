import { StyleSheet, Platform } from 'react-native';

export default HeaderStyle  = StyleSheet.create({ 
    header: {
      flexDirection: 'row',
      backgroundColor: '#E3E7E8',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'ios') ? 26 : 12,
        paddingBottom: 12,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        zIndex: 1
    },
    center: {
        flex: 1
    },
    profileImgWrapper: {
        height: 32,
        width: 32,
        backgroundColor: '#ffffff',
        borderRadius: (Platform.OS === 'ios') ? 32 / 2 : 50
    },
    profileImg: {
        height: 32,
        width: 32,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: (Platform.OS === 'ios') ? 32 / 2 : 50
    },
    textStyle: {
        fontSize: 20
    },
    IconContainer: {

    }
});