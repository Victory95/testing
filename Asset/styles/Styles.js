import { StyleSheet, Dimensions } from 'react-native';

let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

});